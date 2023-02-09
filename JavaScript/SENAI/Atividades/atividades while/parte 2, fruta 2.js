let seleciona=[]
let fruta


while(fruta != "cereja"){

    fruta=prompt("Qual fruta adicionar?").toLowerCase()
    seleciona.push(fruta)

}

alert(`As frutas são(CONFERIR):\n${seleciona}`)



let resultado = seleciona.reduce((acc, val) => {
    if (!acc[val]) acc[val] = {
      "quantidade": 1
    };
    else acc[val]["quantidade"]++;
    return acc;
  }, {});
  
  
  alert(JSON.stringify(resultado, null, 4));