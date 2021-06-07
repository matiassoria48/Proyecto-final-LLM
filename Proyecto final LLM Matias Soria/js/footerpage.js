export class footerpage extends HTMLElement{

    constructor(){
        super();
    }
connectedCallback(){
    this.render();
}
render(){
    this.innerHTML = `
  
    <footer>
   <div>

   <h2>Dejanos tus comentarios sobre nuestras comidas aquí.</h2>
   <a href="../comentarios.html" class="button">PINCHA AQUÍ</a>
   </br>

        <a href="https://www.instagram.com"><i class="fab fa-instagram"></i> Instagram</a>
        </br>
        <a href="https://www.twitter.com"><i class="fab fa-twitter"></i> Twitter</a>
        <h4>Veggie Bergains la pagina que nos acerca mas a la comida veggie sin grandes sacrificios por parte de nuestra cartera.</h4>
   </div>
</footer>
    `;
}
}


window.customElements.define("footer-page", footerpage);