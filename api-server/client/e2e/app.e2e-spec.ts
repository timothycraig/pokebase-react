import { PokebaseCliPage } from './app.po';

describe('pokebase-cli App', function() {
  let page: PokebaseCliPage;

  beforeEach(() => {
    page = new PokebaseCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
