import { CarprojectPage } from './app.po';

describe('carproject App', function() {
  let page: CarprojectPage;

  beforeEach(() => {
    page = new CarprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
