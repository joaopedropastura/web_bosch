
function passainfo(id){
    console.log(id)
    // document.getElementById('teste').innerHTML = id;
    
    var modal = document.getElementById(id+"modal")
    console.log(modal)
    document.getElementById('modal-body').innerHTML = ""
    document.getElementById('modal-body').appendChild(modal);
    document.getElementById("formEdit").action = "/editarAluno/" + id;
}

$("#edt-btn6").click(function(){
    // $(this).append("<div class\"carro\">input</div>")
    console.log('alo')
    console.log($(this).parent().siblings(1).children())
})

var cards = $(".card")

console.log(cards.attr('id'))



let fotos = document.getElementsByClassName("pedroPaulo")

var filesList = []
var photosList = []

for (let i = 0; i < fotos.length; i++)
{
    filesList.push(document.getElementById("flImage input-edt"+i))
    photosList.push(document.getElementById("img-edt"+i))

    photosList[i].addEventListener('click', () => {
        console.log(i)
        console.log(filesList[i]) 
        filesList[i].click();
    });
    
    filesList[i].addEventListener('change', () => {
        // Sem essa verificação, ele irá dar erro quando o usuário clicar em cancelar
        // pois enviará uma "imagem" vazia
        if (filesList[i].files.length == 0) {
            return;
        }
        // Inicializando a função que pega o caminho da imagem
        let reader = new FileReader();
        // Está pegando o caminho da imagem
        reader.readAsDataURL(filesList[i].files[0]);
        // Coloca o caminho da imagem no Source da tag IMG
        reader.onload = () => {
            photosList[i].src = reader.result
        }
    });
}





