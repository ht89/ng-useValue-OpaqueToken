import { EditorArticleService } from './editor-article.service';
import { Directive } from '@angular/core';

@Directive({
    selector: '[editor-view]',
    providers: [EditorArticleService]
})
export class EditorViewDirective { } 