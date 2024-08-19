let herois = [];

const request = fetch('https://akabab.github.io/superhero-api/api/all.json');

request.then((e) => {
    return e.json();
})
.then((response) => {
    herois = response;
    //console.log(response); //mostra a API
    main();
})

//até esse ponto, funciona só para consumir a API

function main(){
    listaAlterEgo();
    reduzido();
    filtroDc();
    ordemPorNome();
}

function listaAlterEgo(){
    console.log("***LISTA ALTER EGO***");
    herois
    .filter(heroi => heroi.biography.alterEgos != "No alter egos found.")
    .map(heroi => console.log(heroi.biography.alterEgos));
}

function reduzido() {
    console.log("\n\n***TOTAL DE CARACTERES DE TODOS OS FIRST APPEARANCE***");

    const totalCaracteres = herois
        .filter(heroi => heroi.biography.publisher === "Marvel Comics")
        .map(heroi => heroi.biography.firstAppearance) 
        .reduce((total, firstAppearance) => total + firstAppearance.length, 0);

    console.log(totalCaracteres); 
}

function filtroDc(){
    console.log("\n\n***LISTA PERSONAGENS DC***");

    const persoagensDC = herois
    .filter(heroi => heroi.biography.publisher === "DC Comics")
    
    persoagensDC.forEach(heroi =>console.log(heroi));
}

function ordemPorNome(){
    console.log("\n\n***PERSONAGENS ORDENADOS PELO TAMANHO DO NOME***");

    const personagensOrdenados = herois.sort((a, b) => a.name.length - b.name.length);
    personagensOrdenados.forEach(heroi => console.log(heroi.name));
}
