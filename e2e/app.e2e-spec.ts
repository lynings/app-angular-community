import { AppAngularCommunityPage } from './app.po';

describe('app-angular-community App', () => {
  let page: AppAngularCommunityPage;

  beforeEach(() => {
    page = new AppAngularCommunityPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
