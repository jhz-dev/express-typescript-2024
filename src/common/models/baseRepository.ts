import { Prisma } from "@prisma/client";

interface Delegate<T, CreateInput, UpdateInput> {
  findMany: () => Promise<T[]>;
  findUnique: (args: { where: { id: number } }) => Promise<T | null>;
  create: (args: { data: CreateInput }) => Promise<T>;
  update: (args: { where: { id: number }; data: UpdateInput }) => Promise<T>;
  delete: (args: { where: { id: number } }) => Promise<T>;
}

export class BaseRepository<
  T,
  CreateInput,
  UpdateInput,
  D extends Delegate<T, CreateInput, UpdateInput>
> {
  private model: D;

  constructor(model: D) {
    this.model = model;
  }

  async findAll(): Promise<T[]> {
    return this.model.findMany();
  }

  async findById(id: number): Promise<T | null> {
    return this.model.findUnique({
      where: { id },
    });
  }

  async create(data: CreateInput): Promise<T> {
    return this.model.create({
      data,
    });
  }

  async update(id: number, data: UpdateInput): Promise<T> {
    return this.model.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<T> {
    return this.model.delete({
      where: { id },
    });
  }
}
