//variavel api
var apikey = {
    key: 'API KEY' 
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {
        var texto = "";
        var texto2 = "";
        var texto3 = "";
        //Obter informação de 10 moedas
        for(let i=0; i < 4; i++){
            texto = texto + `
            <div  align="center" class="col-md-3">
            <img class="logo-cripto" src="img/criptomoeda.png" onmouseover="visible(${i})" onmouseout="invisible(${i})">
            <p class="mostrar">[Show info]</p>
            <p id="infoname${i}">${api.data[i].name}</p>
            <div id="info${i}" style="display: none;" class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
            <p>${api.data[i].first_historical_data}</p>
            </div>
            </div>
        `;}

        for(let i=4; i < 8; i++){
            texto2 = texto2 + `
            <div  align="center" class="col-md-3">
            <img class="logo-cripto" src="img/criptomoeda.png" onmouseover="visible(${i})" onmouseout="invisible(${i})">
            <p class="mostrar">[Show info]</p>
            <p id="infoname${i}">${api.data[i].name}</p>
            <div id="info${i}" style="display: none;" class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
            <p>${api.data[i].first_historical_data}</p>
            </div>
            </div>
        `;}

        for(let i=8; i < 12; i++){
            texto3 = texto3 + `
            <div  align="center" class="col-md-3">
            <img class="logo-cripto" src="img/criptomoeda.png" onmouseover="visible(${i})" onmouseout="invisible(${i})">
            <p class="mostrar">[Show info]</p>
            <p id="infoname${i}">${api.data[i].name}</p>
            <div id="info${i}" style="display: none;" class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
            <p>${api.data[i].first_historical_data}</p>
            </div>
            </div>
        `;}

            document.getElementById("coins").innerHTML = texto;
            document.getElementById("coins2").innerHTML = texto2;
            document.getElementById("coins3").innerHTML = texto3; 
    })
    .catch((error) => {
        console.error(error.message);
});