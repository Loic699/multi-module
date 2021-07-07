import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './create-article/create-article.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';

const routes:Routes= [
  { path: 'create-article' , component: CreateArticleComponent },
  { path: 'details-article' , component: DetailsArticleComponent },
  { path: 'list-article' , component: ListArticlesComponent },
];

@NgModule({
  declarations: [CreateArticleComponent,
    DetailsArticleComponent,
    ListArticlesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ],
  exports:[RouterModule]
})
export class ModuleModule { }
