import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'http://localhost:5500',
    package: 'account',
    protoPath: join(__dirname, 'proto/account.proto'),
  },
};
