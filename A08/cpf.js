$("#input").click(function(){
})
$("#getCpf").click(function(){
    checkCpf($("#input:text").val())
})
const valFinal = document.getElementById("result")

function checkCpf(cpf){
    var peso = 10
    var result1 = 0
    var result2 = 0
    var sum = 0

    var novoCpf = isNumeric(cpf)
    novoCpf = Array.from(novoCpf)

    for (let i = 0; i < novoCpf.length - 2; i++) {
        result1 += (novoCpf[i] * (peso - i))
    }
    result1 = 11 - (result1 % 11)
    var peso = 11
    for (let i = 0; i < novoCpf.length - 1; i++) {
        result2 += (novoCpf[i] * (peso - i))
    }
    novoCpf.forEach(element => {
        novoCpf[0] == element ? sum++ : null
    });
    result2 = 11 - (result2 % 11)
    sum > 10 ? PrintResult(false) : result1 != novoCpf[9] || result2 != novoCpf[10] ? PrintResult(false) : PrintResult(true) 
}

function isNumeric(value) {
    return value.replace(/[.-]/g,'');
}
function PrintResult(result){
    result ? valFinal.innerHTML='valido' : valFinal.innerHTML='invalido'
}