import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LoginResolverBase } from "./base/login.resolver.base";
import { Login } from "./base/Login";
import { LoginService } from "./login.service";

@graphql.Resolver(() => Login)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LoginResolver extends LoginResolverBase {
  constructor(
    protected readonly service: LoginService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
