
//funcionamento do carrosel

const imgs=document.getElementById('img')
const img=document.querySelectorAll('#img img') //pegar elemento de cada imagem dentro do id img

let idx=0

function carrossel(){

    idx++;

    if(idx > img.length -1){

        idx=0
    }

    imgs.style.transform= `translateX(${-idx * 100}%)`
}

setInterval(carrossel,4000);

//------------------------------------------------------------------------


//direcionar para "menu" ou "Quem Somos" ou "Produtos e Serviços" ou "Contato"

function menu(){

    
    document.getElementById('meio').scrollIntoView({behavior:'smooth'})
}

function quemsomos(){

    document.getElementById('div-serve-para-scrollInto-View-quemsomos').scrollIntoView({behavior:'smooth'})
}

function produtoseservicos(){

    document.getElementById('funcao-hard').scrollIntoView({behavior:'smooth'})
}

function contato(){

    document.getElementById('contato').scrollIntoView({behavior:'smooth'})
}


//----------------------------------------------------------------------------------------

//locarizacao das coordenadas do scroll

window.addEventListener('scroll', () => {

    console.log(window.scrollY)


})

//-----------------------------------------------------

//animacao de todo o site principal

//animacao na tela 2 -Sobre Nos-'
window.addEventListener('scroll', () => {

    if( window.scrollY>=100 &&  window.scrollY<5000){

        document.getElementById('label-quemsomos-0').setAttribute('class','label-quemsomos-css-0')
        document.getElementById('label-quemsomos-1').setAttribute('class','label-quemsomos-css-1')
        document.getElementById('label-quemsomos-2').setAttribute('class','label-quemsomos-css-2')
        document.getElementById('label-quemsomos-3').setAttribute('class','label-quemsomos-css-3')
        document.getElementById('label-quemsomos-4').setAttribute('class','label-quemsomos-css-4')
        document.getElementById('carrossel').setAttribute('class','animar-carrosel-css-5')
    }


})
//animacao na tela 2 -Nosso Diferencial-'

window.addEventListener('scroll', () => {

    if( window.scrollY>=390 &&  window.scrollY<5000){

        document.getElementById('label-nosso-diferencal-animacao-1').setAttribute('class','label-nosso-diferencial-animacao-css-1')

        document.getElementById('label-nosso-diferencal-animacao-2').setAttribute('class','label-nosso-diferencial-animacao-css-2')

        document.getElementById('label-nosso-diferencal-animacao-3').setAttribute('class','label-nosso-diferencial-animacao-css-3')

        document.getElementById('botao-saiba-mais-quem-somos').setAttribute('class','animar-botao-saibamais-nosso-diferencial')

    }


})

//animacao dos especialistas

window.addEventListener('scroll', () => {

    if( window.scrollY>=910 &&  window.scrollY<5000){

        document.getElementById('ju').setAttribute('class','ju-animacao')
        document.getElementById('ju').style.opacity='1'

        document.getElementById('diego').setAttribute('class','diego-animacao')
        document.getElementById('diego').style.opacity='1'

        document.getElementById('douglas').setAttribute('class','douglas-animacao')
        document.getElementById('douglas').style.opacity='1'

        document.getElementById('hard').setAttribute('class','hard-animacao')
        document.getElementById('hard').style.opacity='1'


    }


})

//----------------------------------------

//funcao clicar e direcionar para o instagram,fecebook,linkdin da empresa

function clicarinstragram(){


    window.location.href="https://www.instagram.com/prevenirsc/"
}

function clicarfacebook(){

    window.location.href="https://www.facebook.com/prevenirsc/"

}

//----------------------------------------------------------------------------------------------------


//Ficar vermelho os itens no MENU quando o scroll estiver passando por os itens respectivamente

home1=document.getElementById('home')
quemsomos1=document.getElementById('substituilo-quem-somos')
servicoseprodutos10=document.getElementById('produtoseservicos-2')
produtos1=document.getElementById('contato-barra')
contato1=document.getElementById('contato-barra')

window.addEventListener('scroll', () => {

    if( window.scrollY>=0 &&  window.scrollY<300){

        home1.style.color=' #f70000'
        home1.style.fontSize='22px'

        home1.addEventListener("mouseout", homevermelho)

        function homevermelho(){

            home1.style.color=' #f70000'
            home1.style.fontSize='22px'
        }

    }else{

        home1.style.color=' #f0eaea'
        home1.style.fontSize='20px'

        home1.addEventListener("mouseover", homevermelho)

        function  homevermelho(){

            home1.style.color=' #f70000'
            home1.style.fontSize='22px'
        }

        home1.addEventListener("mouseout", homebranco)

        function homebranco(){

            home1.style.color=' #f0eaea'
            home1.style.fontSize='20px'
        }

    }

    if( window.scrollY>=301 &&  window.scrollY<1600 ){

        quemsomos1.style.color=' #f70000'
        quemsomos1.style.fontSize='22px'

        quemsomos1.addEventListener("mouseout", quemsomosvermelho)

        function quemsomosvermelho(){

            quemsomos1.style.color=' #f70000'
            quemsomos1.style.fontSize='22px'
        }

    }else{


        quemsomos1.style.color=' #f0eaea'
        quemsomos1.style.fontSize='20px'

        quemsomos1.addEventListener("mouseover", quemsomosvermelho)

        function  quemsomosvermelho(){

            quemsomos1.style.color=' #f70000'
            quemsomos1.style.fontSize='22px'
        }

        quemsomos1.addEventListener("mouseout", quemsomosbranco)

        function quemsomosbranco(){

            quemsomos1.style.color=' #f0eaea'
            quemsomos1.style.fontSize='20px'
        }
    }

    if(window.scrollY>=1601 &&  window.scrollY<4980){

        servicoseprodutos10.style.color=' #f70000'
        servicoseprodutos10.style.fontSize='22px'

        servicoseprodutos10.addEventListener("mouseout", servicovermelho)

        function servicovermelho(){

            servicoseprodutos10.style.color=' #f70000'
            servicoseprodutos10.style.fontSize='22px'
        }

    }else{

        servicoseprodutos10.style.color=' #f0eaea'
        servicoseprodutos10.style.fontSize='20px'

        servicoseprodutos10.addEventListener("mouseover", servicovermelho)

        function  servicovermelho(){

            servicoseprodutos10.style.color=' #f70000'
            servicoseprodutos10.style.fontSize='22px'
        }

        servicoseprodutos10.addEventListener("mouseout", servicosbranco)

        function servicosbranco(){

            servicoseprodutos10.style.color=' #f0eaea'
            servicoseprodutos10.style.fontSize='20px'
        }

    }

    if(window.scrollY>=4981 ){


        contato1.style.color=' #f70000'
        contato1.style.fontSize='22px'

        contato1.addEventListener("mouseout", contatovermelho)

        function contatovermelho(){

            contato1.style.color=' #f70000'
            contato1.style.fontSize='22px'
        }

    }else{

        contato1.style.color=' #f0eaea'
        contato1.style.fontSize='20px'

        contato1.addEventListener("mouseover", contatovermelho)

        function  contatovermelho(){

            contato1.style.color=' #f70000'
            contato1.style.fontSize='22px'
        }

        contato1.addEventListener("mouseout", contatobranco)

        function contatobranco(){

            contato1.style.color=' #f0eaea'
            contato1.style.fontSize='20px'
        }

    }


})

//----------------------------------------------------------------------------------------------------