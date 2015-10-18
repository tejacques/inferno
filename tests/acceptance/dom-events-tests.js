/** @jsx t */

import events from '../../src/events/shared/events';

export default function domOperationTests(describe, expect, Inferno) {
    describe('DOM event tests', () => {
        let container;

        beforeEach(() => {
            container = document.createElement('div');
        });

        afterEach(() => {
            Inferno.clearDomElement(container);
            container = null;
        });

         it('should support common events', () => {
             expect(events.onBlur).to.eql('blur');
             expect(events.onClick).to.eql('click');
             expect(events.onMouseOver).to.eql('mouseover');			 
    });
	    });
}