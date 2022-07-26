import "./style.scss";

const pohemonListElement = document.getElementById("pokemon-list");
if (pohemonListElement != null) {
  // fetch list of pokemon from API
  const PokemonListUrl = `http://localhost:3000/data`;
  fetch(PokemonListUrl, {
    headers: {
      "Content-type": "applicatin/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      let pokemons = data;
      pokemons.map((p) => {
        let cardType = p.type
          .map((t) => {
            return `<div class="type ${t}">${t}</div>`;
          })
          .join("");

        let itemElementText = `
                <div class="card">
                    <div class="thumbnail-bg">
                        <img src="${p.ThumbnailImage}" alt="${p.name}" />
                    </div>
                    <div>
                        <div class="text-sm text-slate-200" id="pokemon-id">#${p.number}</div>
                        <div class="text-bold text-lg  text-slate-800" id="pokemon-name">
                        <h5>${p.name}</h5>
                        </div>
                        <div class="group-type">${cardType}</div>
                  </div>
                </div>
                `;
        pohemonListElement.insertAdjacentHTML("beforeend", itemElementText);
      });
    });
}
