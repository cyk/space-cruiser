import 'polymer/polymer-element.html';
import format from 'date-fns/format';
import './template.html';
import '../cruiser-scene';
import '../cruiser-mirror';
import '../cruiser-dashboard';

const { Element, DomModule } = Polymer;

export class CruiserApp extends Element {
  static get is() { return 'cruiser-app'; }
  static get template() {  
    return DomModule.import(CruiserApp.is, 'template')     
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

customElements.define(CruiserApp.is, CruiserApp);