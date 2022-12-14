import { Module } from "@nestjs/common";
import { WinstonModule } from "nest-winston";
import * as winston from "winston";
import * as path from "path";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from "@nestjs/core";
import { AllExceptionsFilter } from "./core/exception.interceptor";
import { ComerPenaltyModule } from './modules/comer-penalty/comer-penalty.module';
import { ComissionModule } from './modules/comission/comission.module';


@Module({
  imports: [
    WinstonModule.forRoot({
      level: 'debug', 
      format: winston.format.combine( 
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
      ),
      transports: [ 
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/debug/'),
          filename: 'debug.log',
          level: 'debug',
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/error/'),
          filename: 'error.log',
          level: 'error',
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/info/'),
          filename: 'info.log',
          level: 'info',
        }),
        new winston.transports.Console({ level: 'debug' }),
      ],
    }),
    ComerPenaltyModule,
    ComissionModule,
   
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
