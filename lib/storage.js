// {0} variavel StorageLocal
var StorageLocal = (function() {
    'use strict'

    let userList = [];

    return {
        // {1} pega todos os registros no LocalStorage por key
        getAll: function() {

            userList = JSON.parse(localStorage.getItem('LIST_USER_KEY')); // {1.0} pega o array no LocalStorage
            let html = ''; // {1.0} Cria uma variavel vazia;

            if (userList == null || userList == undefined) {
                localStorage.setItem('LIST_USER_KEY', JSON.stringify([]));
                userList = [];
            }

            if (userList == 0) {
                html += '<h1 class="center">Nenhum usuario cadastrado</h1>' // {1.2} se for igual a 0 passa um h1
            } else {
                html += `<tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>option</th>
                        </tr>`
                    // {1.1} cria novas lista
                for (let element of userList) {
                    html += '<tr>';
                    html += `<td>${element.name.value}</td>`;
                    html += `<td>${element.email.value}</td>`;
                    html += `<td>${element.password.value}</td>`;
                    html += `<td>
                               <button onclick="StorageLocal.remove('${element.email.value}')" class="btn btn-sm">
                                 <span class="material-icons">
                                   delete_outline
                                 </span>
                               </button> 
                             </td>`;
                    html += '</tr>'
                }
            }
            document.getElementById('table').innerHTML = html; // {1.3} renderiza o novo elemento com novos valores
        },
        // {2} adiciona novo registro no localStorage e atualiza a lista @getAll
        create: function(obj) {

            userList.push(obj) // {2.0} Adiciona o obj formulario na array userList

            localStorage.setItem('LIST_USER_KEY', JSON.stringify(userList)); // {2.1} Adiciona a array atualizada no localstorage
            this.getAll(); // {2.2} Atualiza a tabela renderizando
        },
        // {3} remove 1 registro no localStorage e atualiza a lista @getAll
        remove: function(email) {

            const index = userList.findIndex(x => x.email.value === email); // {3.1} Faz uma busca na array userList e passa a index para a constante index

            userList.splice(index, 1); // {3.2} Exclui o 1 item na posição passada pela a index

            localStorage.setItem('LIST_USER_KEY', JSON.stringify(userList)); // {3.3} Atualiza o localstorage
            this.getAll(); // {3.4} Atualiza a tabela renderizando            
            Toast.sucess('Sucess', `item com o email ${email}, foi excluido com sucesso.`); // {3.5} Msg Sucess
        }
    };
}())