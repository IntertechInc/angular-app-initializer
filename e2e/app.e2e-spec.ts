import { InitializeNGPage } from './app.po';

describe('initialize-ng App', () => {
  let page: InitializeNGPage;

  beforeEach(() => {
    page = new InitializeNGPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
