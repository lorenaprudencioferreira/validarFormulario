function validarFormulario(){
    document.getElementById('nome-erro').textContent = '';
    document.getElementById('email-erro').textContent = '';
    document.getElementById('mensagem-erro').textContent = '';
    document.getElementById('nome').classList.remove('erro');
    document.getElementById('email').classList.remove('erro');
    document.getElementById('mensagem').classList.remove('erro'); 

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    var valido = true;

    if (nome===''){
       document.getElementById('nome-erro').textContent = '*Campo não preenchido*';
       document.getElementById('nome').classList.add('erro');
       valido = false; 
    }
    
    if (email===''){
        document.getElementById('email-erro').textContent = '*Campo não preenchido*';
        document.getElementById('email').classList.add('erro');
        valido = false;
    }

    if (mensagem===''){
        document.getElementById('mensagem-erro').textContent = '*Campo não preenchido*';
        document.getElementById('mensagem').classList.add('erro');
        valido = false;
    }

    if (valido){
        alert('Mensagem enviada com sucesso!');
    }
}