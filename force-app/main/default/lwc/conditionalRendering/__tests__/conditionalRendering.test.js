import { createElement } from 'lwc';
import ConditionalRendering from 'c/conditionalRendering';

describe('c-conditional-rendering', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });
    beforeEach(()=>{
        const element = createElement('c-conditional-rendering',{
            is: ConditionalRendering
        })
        document.body.appendChild(element);
    })
    it('when checkbox is not clicked', () => {
        const element = document.body.querySelector('c-conditional-rendering');
        const div = element.shadowRoot.querySelector('.testRender');
        expect(div.textContent).toBe('These are the details Without checkbox!');
    });
    it('when checkbox is  clicked', () => {
        const element = document.body.querySelector('c-conditional-rendering');
        const checbox = element.shadowRoot.querySelector('lightning-input');
        checbox.checked = true;
        checbox.dispatchEvent(new CustomEvent('change'));
        const div = element.shadowRoot.querySelector('.testRender');
        return Promise.resolve().then(()=>{
            expect(div.textContent).toBe('These are the details!');
        })
    });

    
});