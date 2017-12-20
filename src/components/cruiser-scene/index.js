import 'polymer/polymer-element.html';
import './template.html';

const { Element, DomModule } = Polymer;

export class CruiserScene extends Element {
  static get is() { return 'cruiser-scene'; }
  static get template() {
    return DomModule.import(CruiserScene.is, 'template');
  }
  static get properties() {}
}

customElements.define(CruiserScene.is, CruiserScene);