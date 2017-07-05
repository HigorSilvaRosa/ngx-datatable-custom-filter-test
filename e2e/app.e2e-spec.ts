import { NgxDatatableCustomFilterTestPage } from './app.po';

describe('ngx-datatable-custom-filter-test App', () => {
  let page: NgxDatatableCustomFilterTestPage;

  beforeEach(() => {
    page = new NgxDatatableCustomFilterTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
