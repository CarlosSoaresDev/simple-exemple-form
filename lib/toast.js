// {0} variavel toast
var Toast = (function() {
    'use strict'

    return {
        // {1} função error com dois parametros
        error: function(title, paragr) {
            this.toastCreate(title, paragr, 'error', 'toast-danger') // {1.0} Passando parametro para criação
        },
        // {2} função sucess com dois parametros
        sucess: function(title, paragr) {
            this.toastCreate(title, paragr, 'done_all', 'toast-sucess') // {2.0} Passando parametro para criação
        },
        // {3} função para criar o elemento html
        toastCreate: function(title, paragr, icon, status) {

            var elemnt = document.querySelector('body'), // {3.0} Selecionando onde o elemento sera criado
                div = document.createElement('div'), // {3.1} Criando um elemento div
                div_body = document.createElement('div'), // {3.2} Criando um elemento div
                span = document.createElement('span'), // {3.3} Criando um elemento span
                div_line = document.createElement('div'), // {3.4} Criando um elemento div
                h3 = document.createElement('h3'), // {3.5} Criando um elemento h3
                p = document.createElement('p'); // {3.6} Criando um elemento p

            div.classList = `toast ${status}`; // {3.7} Adicionando 2 classes ao novo elemnto div, 1 é passado por parametro
            div_body.classList = 'toast-body'; // {3.8} Adicionando 1 classes ao novo elemnto div @div-body 
            span.classList = 'material-icons toast-icon'; // {3.9} Adicionando 2 classes ao novo elemnto span
            span.innerText = icon; // {3.10} Adicionando um novo texto ao elemento span passado por parametro
            h3.innerText = title; // {3.11} Adicionando um novo texto ao elemento h3 passado por parametro
            p.innerText = paragr; // {3.12} Adicionando um novo texto ao elemento p passado por parametro

            div_body.appendChild(span); // {3.13} acressenta o span na div @div-body
            div_line.appendChild(h3) // {3.14} acressenta o h3 na div @div-line
            div_line.appendChild(p) // {3.15} acressenta o p na div @div-line
            div_body.appendChild(div_line); // {3.16} acressenta o @div-line na @div-body
            div.appendChild(div_body); // {3.17} acressenta o @div-body na div
            elemnt.appendChild(div) // {3.18} acressenta o div no elemento selecionado 

            setTimeout(() => {
                elemnt.removeChild(div) // {4} Drestroi depois de 5 segundos
            }, 5000);
        },
    };
}());