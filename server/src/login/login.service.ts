import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LoginServiceBase } from "./base/login.service.base";

@Injectable()
export class LoginService extends LoginServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
