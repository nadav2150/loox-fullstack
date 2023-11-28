import { Injectable } from '@nestjs/common';
import {data} from '../datasource/data'

@Injectable()
export class AppService {
  getAllArticles(limit:number){
    return data.slice(0,limit)
  }
  getArticleById(id:number){
return data.find(article=>article.id===id) || {}
  }
}
