//script utilizado na página index.html

//carrosel de imagens
let img = document.getElementById("carrosel");
let troca = 1;

function carrosel(){
    if(troca == 1){
        img.src = 'img/imagem1.png';
        troca++;
    }

    else if(troca == 2){
        img.src = 'img/imagem2.png';
        troca++;
    }

    else if(troca == 3){
        img.src = 'img/imagem3.png';
        troca = 1;
    }
}
setInterval(carrosel, 3000);


//faz a página rolar ao clicar nos elementos do menu
function bebidas(){
    window.scrollTo({
        top: 630, // Altere este valor para a posição desejada
        behavior: 'smooth' // Isso fará com que a rolagem seja suave
    });
}
function logo(){
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    });
}
function quem_somos(){
    window.scrollTo({
        top: 1315, 
        behavior: 'smooth' 
    });
}
function local(){
    window.scrollTo({
        top: 1870, 
        behavior: 'smooth' 
    });
}


//troca para uma nova pagina html de pedidos
function pedidos() {
    window.location.href = "pages/pedidos.html";
}

//troca para pagina do carrinho de compras
function carrinho() {
    window.location.href = "pages/carrinho.html";
}


//troca para a pagina pedidos ao cliclar em qualquer produto disponivel
document.addEventListener("DOMContentLoaded", function produtos(){
    let produtos = document.querySelectorAll('.produto');
    produtos.forEach(function(carregar) {
        carregar.addEventListener('click', function() {
            window.location.href = "pages/carrinho.html";
        });
    });
});

//ao clicar na imagem do mapa, abrira o maps com a localização
let mapa = document.getElementById("local"); //declarando variavel
mapa.addEventListener("click", function () { //adicionando evento de click
    window.location.href = "https://maps.app.goo.gl/2ow3d3ic4kj7NYwh7";
});



