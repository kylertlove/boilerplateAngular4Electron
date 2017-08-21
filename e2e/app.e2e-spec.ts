import { DestopAppPage } from './app.po';

describe('destop-app App', () => {
  let page: DestopAppPage;

  beforeEach(() => {
    page = new DestopAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
