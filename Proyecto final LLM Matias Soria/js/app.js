import { footerpage } from "./footerpage.js";
import { headerpage } from "./headerpage.js";
import { bodypage } from "./bodypage.js";




function init() {

  getFood("all");
  let buttonsList = document.querySelectorAll('.btn-check');
  for (const button of buttonsList) {
    button.addEventListener("click", function () {
      getFood(this.value);
    });
  }
}

function getFood(pType) {

  fetch('../json/comidas.json')
    .then(response => response.json())
    .then((collection) => {
      pintarListaFood(collection.food, pType);

    });
}

const pintarListaFood = (listaFood, pType) => {
  const container = document.getElementById("card-container");
  container.innerHTML = "";
  for (let food of listaFood) {
    if (pType == food.type || pType == "all") {
      container.innerHTML += `
          <div class="card col-md-4" style="width: 18rem;">
          <img src="../json/${food.img}" class="card-img-top" alt="foto-burguer" width="280px" height="250px">
          <div class="card-body">
            <h5 class="card-title">${food.title}</h5>
            <p class="card-text">${food.opinion}</p>
            <p class="card-text">Precio:${food.price}€</p>
          </div>
        </div>
          `;
    }
  }
};

init();






























