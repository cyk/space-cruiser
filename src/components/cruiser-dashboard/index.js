import 'polymer/polymer-element.html';

export class CruiserDashboard extends Polymer.Element {
  static get is() { return 'cruiser-dashboard'; }
  static get template() {       
    return "<div>I'm a dashboard, yo!</div>";
  }
  static get properties() {}
}

customElements.define(CruiserDashboard.is, CruiserDashboard);