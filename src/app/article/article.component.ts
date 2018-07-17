import { EditorArticleService } from './editor-article.service';
import { LOGO_URL } from './logo-url.token';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'article',
    template: `
        <img src="{{ logoUrl }}">
        <h2>Fool & His Monkey Reunited At Last</h2>
        <p>Author: Jake Hsu</p>

        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
        <hr>
    `
})
export class ArticleComponent implements OnInit {
    private logoUrl;
    title;
    body;

    constructor(
        @Inject(LOGO_URL) logoUrl,
        private editorArticleService: EditorArticleService
    ) { 
        this.logoUrl = logoUrl;
        
        let article = editorArticleService.getArticle();
        this.title = article.title;
        this.body = article.body;
    }

    ngOnInit() { 

    }

}