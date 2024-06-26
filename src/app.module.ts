import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { UseresModule } from './useres/useres.module';

@Module({
  imports: [UsersModule, DatabaseModule, UseresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
