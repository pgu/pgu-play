'use strict';


ddescribe('pgu-play homepage', function () {

    it('should present the games menu', function () {
        // given
        browser.get('#/');

        // when
        var title = element(by.css('.app-title'));

        // then
        expect(title.getText()).toEqual('Play!');
    });

});