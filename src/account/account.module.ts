import { AccountController } from './account.controller';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AccountService } from './account.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNT_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5500',
          package: 'account',
          protoPath: join(__dirname, 'account.proto'),
        },
      },
    ]),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
