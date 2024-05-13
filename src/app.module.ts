import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDataSourceOptions } from './config/dataSource';

@Module({
  imports: [
    TypeOrmModule.forRoot(getDataSourceOptions()),
    ApplicationModule,
    DomainModule
  ]
})
export class AppModule {}
