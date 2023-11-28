import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('articles')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllArticles(
    @Query('limit') limit: string = '20',
  ): any {
    const limitToPass=Number(limit) || 20;
    return this.appService.getAllArticles(limitToPass);
  }

  @Get('/:id')
  getArticleById(@Param('id') id:string): any {
    return this.appService.getArticleById(Number(id));
  }
}
