import { Module } from '@nestjs/common';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
import { ApiModule } from './api/api.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SummaryController } from './controller/summary.controller';
import { SummaryService } from './service/summary.service';
import { Summary, SummarySchema } from './model/summary.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ApiModule, 
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/summaries?directConnection=true'),
    MongooseModule.forFeature([{ name: Summary.name, schema: SummarySchema }])
  ],
  controllers: [ApiController, SummaryController],
  providers: [ApiService, SummaryService],
})
export class AppModule {}
