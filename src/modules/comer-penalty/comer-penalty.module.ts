import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { ComerPenaltyController } from './comer-penalty.controller';
import { ComerPenaltyService } from './comer-penalty.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "SERVICE_PENALTY",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [ComerPenaltyController],
  providers: [ComerPenaltyService]
})
export class ComerPenaltyModule {}
