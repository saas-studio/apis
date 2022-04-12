import { Module } from "@nestjs/common";
import { RequestModuleBase } from "./base/request.module.base";
import { RequestService } from "./request.service";
import { RequestController } from "./request.controller";
import { RequestResolver } from "./request.resolver";

@Module({
  imports: [RequestModuleBase],
  controllers: [RequestController],
  providers: [RequestService, RequestResolver],
  exports: [RequestService],
})
export class RequestModule {}
