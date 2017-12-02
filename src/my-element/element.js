import 'polymer/polymer-element.html';
import format from 'date-fns/format';

export class MyElement extends Polymer.Element {
  static get is() { return 'my-element'; }
  static get template() {       
    return "<h1>Hello, World! It's [[today]].</h1>";
  }
  static get properties() {
    return {
      today: {
        type: String,
        value: function() {
          return format(new Date(), 'MM/DD/YYYY');
        }
      }
    }
  }
}

customElements.define(MyElement.is, MyElement);