import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';

@Injectable()
export class PrismaService extends PrismaClient{}
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
