 // {0} Variavel Validator
 var Validator = (function() {
     'use strict'
     return {
         // {1} função para validar o minimo de caracteres inseridos
         minLength: (obj, qt, el) => {

             const element = document.getElementById(el); // {1.0} Pega o elemento por Id

             if (obj.value.length < qt) {
                 element.removeAttribute('hidden') // {1.1} se for falso ele remove o attr hidden
                 return false; // {1.2} retorna um valor false 
             }
             element.setAttribute('hidden', true); // {1.3} se for true ele adiciona o attr hidden
             return true; // {1.4} retorna um valor true 
         },
         // {2} função para validar o maximo de caracteres inseridos
         maxLength: (obj, qt, el) => {

             const element = document.getElementById(el); // {2.0} Pega o elemento por Id

             if (obj.value.length > qt) {
                 element.removeAttribute('hidden') // {2.1} se for falso ele remove o attr hidden
                 return false; // {2.2} retorna um valor false 
             }
             element.setAttribute('hidden', true); // {2.3} se for true ele adiciona o attr hidden
             return true; // {2.4} retorna um valor true 
         },
         // {3} função para validar se o campo foi inserido algum valor
         require: (obj, el) => {

             const element = document.getElementById(el); // {3.0} Pega o elemento por Id

             if (obj.value.length === 0) {
                 element.removeAttribute('hidden'); // {3.1} se for falso ele remove o attr hidden
                 return false; // {3.2} retorna um valor false 
             }
             element.setAttribute('hidden', true); // {3.3} se for true ele adiciona o attr hidden
             return true; // {3.4} retorna um valor true 
         },
         // {4} função para validar o formato do email se é valido
         email: (obj, el) => {

             const element = document.getElementById(el); // {4.0} Pega o elemento por Id
             const regex = /\S+@\S+\.\S+/; // {4.1} ReGex para validar o email

             if (!regex.test(obj.value)) {
                 element.removeAttribute('hidden'); // {4.2} se for falso ele remove o attr hidden
                 return false; // {4.3} retorna um valor false 
             }
             element.setAttribute('hidden', true); // {4.4} se for true ele adiciona o attr hidden
             return true; // {4.5} retorna um valor true 
         }
     };
 }());