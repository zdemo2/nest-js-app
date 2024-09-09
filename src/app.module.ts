import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/projects.module';
import { BoardlayoutService } from './boardlayout/boardlayout.service';
import { BoardlayoutController } from './boardlayout/boardlayout.controller';
import { BoardlayoutModule } from './boardlayout/boardlayout.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    ProjectsModule,
    BoardlayoutModule,
  ],
  controllers: [AppController, BoardlayoutController],
  providers: [AppService, BoardlayoutService],
})
export class AppModule {}
