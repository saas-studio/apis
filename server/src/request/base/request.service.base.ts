/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Request, User } from "@prisma/client";

export class RequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RequestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequestFindManyArgs>
  ): Promise<number> {
    return this.prisma.request.count(args);
  }

  async findMany<T extends Prisma.RequestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequestFindManyArgs>
  ): Promise<Request[]> {
    return this.prisma.request.findMany(args);
  }
  async findOne<T extends Prisma.RequestFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequestFindUniqueArgs>
  ): Promise<Request | null> {
    return this.prisma.request.findUnique(args);
  }
  async create<T extends Prisma.RequestCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequestCreateArgs>
  ): Promise<Request> {
    return this.prisma.request.create<T>(args);
  }
  async update<T extends Prisma.RequestUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequestUpdateArgs>
  ): Promise<Request> {
    return this.prisma.request.update<T>(args);
  }
  async delete<T extends Prisma.RequestDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequestDeleteArgs>
  ): Promise<Request> {
    return this.prisma.request.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.request
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}