export class bodypage extends HTMLElement {

    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
  
    <div class="container">
    <div id="card-container" class="row"></div>
  </div>

    
    `;
    }
}


window.customElements.define("body-page", bodypage);