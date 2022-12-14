import { Module } from '@nestjs/common';
import { ComissionService } from './comission.service';
import { ComissionController } from './comission.controller';

@Module({
  providers: [ComissionService],
  controllers: [ComissionController]
})
export class ComissionModule {}
