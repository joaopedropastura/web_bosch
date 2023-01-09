const container_sdt = $('#sdt-value');
const container_tcr = $("#tcr-value");
const container_nts = $("#nts-value");
const container_sls = $("#sls-value");


$("#dashBoard-bar").children().click(function(){
    // $(this).append("<div class\"carro\">input</div>")
    showItem($(this).attr('id'))
})

var studentPage = document.getElementById('student-page')
studentPage.classList.add('showdisplay')
function showItem(id){
    if (id == 'student-page')
    {
        studentContent()
        container.innerHTML = '<h1>Página 1</h1>'
    }
    else if (id == 'teacher-page')
    {
        container_tcr.append("<input>carro</input>")
        container.innerHTML = '<h2>Página 2</h2>'
    }
    
}



function studentContent(){
    container_sdt.append("<div class\"inputBoard\">input</div>")
}