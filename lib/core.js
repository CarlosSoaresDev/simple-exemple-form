// {0} variavel Core
var Core = (function() {
    'use strict'

    var frmElement = document.querySelector('form[id=frm]'); // {1} seleciona o formulario
    var frm = {}; // {2} criando um objeto vazio

    // {3} Event key, sempre que for digitado algo no formulario, o evento é disparado
    frmElement.addEventListener('keyup', (e) => {

        const form = e.target.form; // {3.0} passando os valores para a constante form;

        frm = {
                name: { value: form.name.value, validator: [Validator.require(form.name, 'require_name')] },
                email: { value: form.email.value, validator: [Validator.email(form.email, 'email_email')] },
                password: { value: form.password.value, validator: [Validator.require(form.password, 'require_password'), Validator.minLength(form.password, 7, 'min_password')] }
            } // {3.1}  Criando uma estrutura de obj, com os validadores
    });
    // {4} Event Submit, sempre quer for submetido o formulario, o evento é disparado
    frmElement.addEventListener('submit', (e) => {
        // {4.0} Validação do formulario
        if (!isValid()) {
            Toast.error('Error', 'Algum campo não esta validado, verifique!'); //{4.1} Msg error
            e.preventDefault();
            return;
        }
        Toast.sucess('Sucesso', 'O usuario foi inserido com suscesso!'); //{4.2} Msg sucess
        StorageLocal.create(frm); //{4.3} passa o obj para o create que ira inserir no localstorage
        clearForm(e);
        e.preventDefault();
    });
    // {5} Validaor
    const isValid = () => {
        // {5.0} validação, se todos os validator for true, ental ele retornara um bollean true, se nao false; 
        if (!frm.name.validator[0] ||
            !frm.email.validator[0] ||
            !frm.password.validator[0] ||
            !frm.password.validator[1]
        ) {
            return false;
        }
        return true;
    };
    // {6} Limpa o formulario
    const clearForm = (f) => {
        const form = f.target;

        form.name.value = '';
        form.email.value = '';
        form.password.value = '';
        form.name.focus()
    };
}());

StorageLocal.getAll(); // {7} inicia pegando os valores do localstorage