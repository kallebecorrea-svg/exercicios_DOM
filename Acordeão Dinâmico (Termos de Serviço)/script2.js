const titulos = document.querySelectorAll('.titulo_clausulas');

titulos.forEach(function (titulo_clausulas){
    titulo_clausulas.addEventListener('click', function(){
        const texto = titulo_clausulas.nextElementSibling;

        if(texto.style.display === 'block'){
            texto.style.display = 'none'

        }else {
            texto.style.display = 'block'
        };
    });
});