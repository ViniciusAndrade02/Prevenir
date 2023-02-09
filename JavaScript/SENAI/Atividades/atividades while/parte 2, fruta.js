let seleciona=[]
let fruta


while(fruta != "cereja"){

    fruta=prompt("Qual fruta adicionar?").toLowerCase()
    seleciona.push(fruta)

}

alert(seleciona)


const newValues = [...new Set(seleciona)]

alert(newValues)

let arr = seleciona;


let resultado = arr.reduce((acc, val) => {
  if (!acc[val]) acc[val] = {
    "número": val,
    "quantidade": 1
  };
  else acc[val]["quantidade"]++;
  return acc;
}, {});


alert(resultado)

