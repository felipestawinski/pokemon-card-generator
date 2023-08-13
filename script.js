function clearMoves() {
    const movesContainer = document.getElementById("movesContainer");
    while (movesContainer.firstChild) {
      movesContainer.removeChild(movesContainer.firstChild);
    }
  }

var form = document.getElementById('form')

form.addEventListener('submit', function(event){
    clearMoves();
    event.preventDefault();

    var pokemon = document.getElementById('pokemon').value.toLowerCase();

    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;

    fetch(url)
    .then(res => res.json() )
    .then(data => {
        const moves = data.types;
        const dataContainer = document.getElementById("movesContainer");
        let weightElement = document.createElement("p"); 
        let heightElement = document.createElement("p");  
        let typeElement = document.createElement("p");
        const imageElement = document.createElement("p");
        let typeText = "";

        if(moves.length > 1)
        {
          console.log(moves.length);
          typeText  = `<p class="info">Types: `;
          moves.forEach((type) => {
            const typeName = type.type.name;
            let typesString = "";
            typeText += `${typeName}, `;      
          });
          typeText.slice(0, -1);
          typeText += `</p>`;
        }
        else
        {
          console.log(moves.length);
          typeText  = `<p class="info">Type: `;
          moves.forEach((type) => {
            const typeName = type.type.name;
            let typesString = "";
            typeText += `${typeName}</p>`;      
          });
        }
            
          
  typeElement.innerHTML = typeText;
  heightElement.innerHTML = "Height: " + data.height;
  weightElement.innerHTML = "Weight: " + data.weight;
  dataContainer.appendChild(typeElement);
  dataContainer.appendChild(heightElement);
  dataContainer.appendChild(weightElement);
  const imagem = data.sprites.front_default;
  const imageContainer = document.getElementById("imageContainer");

  imageContainer.innerHTML = `<img src="${imagem}" style="width: 115px; height: 115px; position: relative;
  border-radius: 50px;">`;

    })
    .catch(error => console.log(error))
});