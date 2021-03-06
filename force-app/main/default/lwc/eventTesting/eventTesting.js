import { LightningElement } from 'lwc';

export default class EventTesting extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}