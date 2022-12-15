import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { ComissionService } from './comission.service';
import { ComissionController } from './comission.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "SERVICE_COMISSION",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 3002,
        },
      },
    ]),
  ],
  providers: [ComissionService],
  controllers: [ComissionController]
})
export class ComissionModule {}
