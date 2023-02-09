//efeito de desaparecer e aparecer perfil login 

let perfilpreto= document.getElementById('iconeperfil')
let perfilbranco= document.getElementById('iconedepois')
    perfilpreto.addEventListener('mouseover',aparecer)
    perfilpreto.addEventListener('mouseout',desa)

        function aparecer(){

            perfilbranco.style.display='block'
            perfilpreto.style.display='none'


}
        function desa(){

            perfilbranco.style.display='none'
            perfilpreto.style.display='block'
}
//-------------------------------------------------------------------------------------------------

