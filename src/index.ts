import axios from "axios";

const formulario = document.getElementById("formulario") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const image = document.getElementById("image") as HTMLImageElement;
const app = document.getElementById("app") as HTMLDivElement;

image.style.display= 'block';

async function obterDadosJson(nome: string) {
  try{
    
    // const resposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`,{responseType:"json"});
    const resposta = await axios.get(`https://digimon-api.herokuapp.com/api/digimon/name/agumon`,{responseType:"json"});
    const pokemon = resposta.data;

   
    txtNome.value = pokemon[0].name;
    image.src = pokemon[0].img;
    // image.src = pokemon.sprites.front_default;
    // image.src = pokemon.sprites.other['official-artwork'].front_default;
    console.log(pokemon.name);
   


  }catch(error){
    console.log(error);
  }
}


formulario.addEventListener("submit", (evt: SubmitEvent) => {
  evt.preventDefault();

  obterDadosJson(txtNome.value)
});

