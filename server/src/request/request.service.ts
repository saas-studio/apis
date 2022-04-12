import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RequestServiceBase } from "./base/request.service.base";

@Injectable()
export class RequestService extends RequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
