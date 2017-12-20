import 'polymer/polymer-element.html';
import './template.html';

const { Element, DomModule } = Polymer;

export class CruiserMirror extends Element {
  static get is() { return 'cruiser-mirror'; }
  static get template() {
    return DomModule.import(CruiserMirror.is, 'template')
  }
  static get properties() {}
}

customElements.define(CruiserMirror.is, CruiserMirror);