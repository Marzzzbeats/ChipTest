import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<Request>(); //Récupère la requette et la type en type Requet
        const token = this.extractTokenFromHeader(request);
        if(!token){
            throw new UnauthorizedException('Access forbidden');
        }
        //gerer plus tard avec les vrais tokens
        return true;
    }
    private extractTokenFromHeader(request: Request): string | undefined{
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token: undefined;
    }
}