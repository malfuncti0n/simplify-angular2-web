import { SimplifyWebPage } from './app.po';

describe('simplify-web App', () => {
  let page: SimplifyWebPage;

  beforeEach(() => {
    page = new SimplifyWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
