import { NgModelCustomComponentsPage } from './app.po';

describe('ng-model-custom-components App', () => {
  let page: NgModelCustomComponentsPage;

  beforeEach(() => {
    page = new NgModelCustomComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
