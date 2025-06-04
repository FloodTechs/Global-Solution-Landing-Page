//DECLARANDO O ARRAY DE IMAGENS

let imagens = [
    'src/assets/slideshow/imagem1.jpg',
    'src/assets/slideshow/imagem2.jpg',
    'src/assets/slideshow/imagem3.jpg',

];

//DECLARANDO AS VARIAVEIS

let i=0;
let tempo =3000;

//CRIANDO A FUNÇÃO SLIDESHOW

function slideShow(){
    document.getElementById('image').src=imagens[i];
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout("slideShow()",tempo)
}
slideShow();
