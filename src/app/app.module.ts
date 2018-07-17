import { EditorArticleService } from './article/editor-article.service';
import { EditorViewDirective } from './article/editor-view.directive';
import { LOGO_URL } from './article/logo-url.token';
import { ArticleComponent } from './article/article.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    EditorViewDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: LOGO_URL, useValue: 'https://angular.io/assets/images/logos/angular/angular.png'
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
