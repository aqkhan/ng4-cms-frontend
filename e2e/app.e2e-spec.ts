import { RsCmsPage } from './app.po';

describe('rs-cms App', () => {
  let page: RsCmsPage;

  beforeEach(() => {
    page = new RsCmsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
