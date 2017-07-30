import { NgUseValueOpaqueTokensPage } from './app.po';

describe('ng-use-value-opaque-tokens App', () => {
  let page: NgUseValueOpaqueTokensPage;

  beforeEach(() => {
    page = new NgUseValueOpaqueTokensPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
