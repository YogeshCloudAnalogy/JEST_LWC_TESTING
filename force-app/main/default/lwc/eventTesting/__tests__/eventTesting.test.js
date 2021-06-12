import { createElement } from 'lwc';
import EventTesting from 'c/eventTesting';

describe('c-event-testing suite', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        console.log("Test after");
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });
    beforeEach(()=>{
        const element = createElement('c-event-testing', {
            is: EventTesting
        });
        document.body.appendChild(element);
    })

    it('without event value', () => {
        const element = document.querySelector('c-event-testing');
        const p = element.shadowRoot.querySelector('p');
        expect(p.textContent).toBe('Hello, World!');
    });

    it('without event value negative', () => {
        const element = document.querySelector('c-event-testing');
        const p = element.shadowRoot.querySelector('p');
        expect(p.textContent).not.toBe('Hello, World!!');
    });
    it('with event',()=>{
        const element = document.querySelector('c-event-testing');
        const inputElement = element.shadowRoot.querySelector('lightning-input');
        inputElement.value= 'Yogesh';
        inputElement.dispatchEvent(new CustomEvent('change'));
        const p = element.shadowRoot.querySelector('p');
        return Promise.resolve().then((res)=>{
            expect(p.textContent).toBe('Hello, Yogesh!');
        })
    })
});