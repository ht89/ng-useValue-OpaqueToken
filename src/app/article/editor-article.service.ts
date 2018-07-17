import { Injectable } from '@angular/core';

export const MockEditorArticleService = {
    getArticle: () => ({
        title: 'Mock title',
        body: 'Mock body'
    })
}

@Injectable()
export class EditorArticleService {
    title = 'Prominent Vegan Embroiled in Scrambled Eggs Scandal';
    body = 'Tofu Farming Alliance retracted their endorsement.';

    constructor() { }

    getArticle() {
        return {
            title: this.title,
            body: this.body
        }
    }
}