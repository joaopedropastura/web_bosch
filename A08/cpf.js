$("#input").click(function(){
})

$("#getCpf").click(function(){
    checkCpf($("#input:text").val())
})

function checkCpf(cpf){
    var novoCpf = cpf.replace(/[.-]/g,'')
    cpf = Array.from(novoCpf)


    console.log(cpf)
}

function isNumeric(value) {
    return value.replace(/#|_/g,'');
}