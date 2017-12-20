import 'polymer/polymer-element.html';
import './template.html';

const { Element, DomModule } = Polymer;

export class CruiserDashboard extends Element {
  static get is() { return 'cruiser-dashboard'; }
  static get template() {
    return DomModule.import(CruiserDashboard.is, 'template')
  }
  static get properties() {}
}

customElements.define(CruiserDashboard.is, CruiserDashboard);