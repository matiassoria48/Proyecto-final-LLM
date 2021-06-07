export class headerpage extends HTMLElement {

  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    
    <header>
        <h1> Veggie Bergains</h1>  
        <a href="../loginregister.html" class="btn btn-success">LOGIN & REGISTER</a>
<nav>
        

<input type="radio" class="btn-check" name="btnradio" id="btnradio1" value="all" autocomplete="off"
checked>
<label class="btn btn-outline-primary" for="btnradio1"><i class="fas fa-utensils"></i>Nuestra Comida</label>

<input type="radio" class="btn-check" name="btnradio" id="btnradio2" value="Hamburguesas"
autocomplete="off">
<label class="btn btn-outline-primary" for="btnradio2"><i class="fas fa-hamburger"></i>Hamburguesas</label>

<input type="radio" class="btn-check" name="btnradio" id="btnradio3" value="Ensaladas" autocomplete="off">
<label class="btn btn-outline-primary" for="btnradio3"><i class="fas fa-leaf"></i>Ensaladas</label>

<input type="radio" class="btn-check" name="btnradio" id="btnradio4" value="Salchichas" autocomplete="off">
<label class="btn btn-outline-primary" for="btnradio4"><i class="fas fa-hotdog"></i>Salchichas</label>

<input type="radio" class="btn-check" name="btnradio" id="btnradio5" value="Croquetas" autocomplete="off">
<label class="btn btn-outline-primary" for="btnradio5"><i class="fas fa-bacteria"></i>Croquetas</label>

<input type="radio" class="btn-check" name="btnradio" id="btnradio6" value="Variedad" autocomplete="off">
<label class="btn btn-outline-primary" for="btnradio6"><i class="fas fa-random"></i>Variedad</label>
 
    </nav>
       
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../img/h1.png" class="d-block w-100" alt="foto-burguer">
     
    </div>
    <div class="carousel-item">
      <img src="../img/e10.jpg" class="d-block w-100" alt="foto-ensalada">
     
    </div>
    <div class="carousel-item">
      <img src="../img/v8.jpg" class="d-block w-100" alt="foto-variedad">
     
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </header>
    
    `;
  }
}


window.customElements.define("header-page", headerpage);