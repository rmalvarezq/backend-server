import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/user.module';
import { ProductsModule } from './products/product.module';

@Module({
  imports: [CatsModule, UsersModule,ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
