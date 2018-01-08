import { WalkYourWayOutPage } from './app.po';

describe('walk-your-way-out App', () => {
  let page: WalkYourWayOutPage;

  beforeEach(() => {
    page = new WalkYourWayOutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
