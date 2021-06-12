import { createElement } from 'lwc';
import FirstComponent from 'c/firstComponent';

describe('c-first-component', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });


    test("First Test",()=>{
        const element = createElement('c-first-component',{
            is:FirstComponent
        });
        document.body.appendChild(element);
        const div = element.shadowRoot.querySelector("div.first");
        expect(div.textContent).toBe('Hello World');
    })
    test("First Test",()=>{
        const element = createElement('c-first-component',{
            is:FirstComponent
        });
        document.body.appendChild(element);
        const div = element.shadowRoot.querySelector("div.Second");
        expect(div.textContent).toBe('Test');
    })
});