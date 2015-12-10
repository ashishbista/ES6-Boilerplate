jest.dontMock(`${__APPDIR__}/app`);

const Main = require(`${__APPDIR__}/components/main`);

describe('Main.init', function() {
 it('returns true', function() {
   expect(Main.init()).toEqual(true);
 });
});

