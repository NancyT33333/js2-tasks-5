'use strict';

// Код валидации формы
function validateForm (params) {  /** {
        formId: 'profile',
        formValidClass: 'form_valid',
        formInvalidClass: 'form_invalid',

        inputErrorClass: 'input_error'
    }*/


    var settings = arguments[0];




    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.classList.contains(settings.formInvalidClass) || form.classList.contains(settings.formValidClass)) {
            form.classList.remove(settings.formInvalidClass);
            form.classList.remove(settings.formValidClass);
        }



        if (checkValid(nameInput) && checkValid(ageInput) && checkValid(phoneInput) && checkValid(numberInput)) {
            form.classList.add(settings.formValidClass);
        } else {
            form.classList.add(settings.formInvalidClass);
        }

    });

    var nameInput = document.querySelector('#profile-name');

    nameInput.addEventListener("blur", function( event ) {

        if (checkValid(nameInput) === false ) {
        nameInput.classList.add(settings.inputErrorClass)
        }

    }, true);

    nameInput.addEventListener('focus', function (event) {
        if (nameInput.classList.contains(settings.inputErrorClass)) {
            nameInput.classList.remove(settings.inputErrorClass);
        }
    })

    function checkValid(elem) {
        if (elem.dataset.hasOwnProperty('required') && elem.value =='') {
            return false
        }
        var reLetts = new RegExp("[^A-zА-я\s]+");  // пропускает _, не работают пробелы

        if (elem.dataset.validator == 'letters' && reLetts.test(elem.value) === true ) {
            return false
        }
        var reNums = new RegExp("[[A-zА-я]|[\s]]");
        if (elem.dataset.validator =='number' && reNums.test(elem.value) === true ) {
            return false
        }

        if (elem.dataset.validator ==='regexp') {
            var regex = new RegExp(elem.dataset.validatorPattern);

            if ( regex.test(elem.value) ===false ) {
                return false
            }
        }
         if (elem.dataset.validatorMin || elem.dataset.validatorMax )   {
             if (parseInt(elem.value)<= parseInt(elem.dataset.validatorMin) || parseInt(elem.value) > parseInt(elem.dataset.validatorMax)) {

                  return false
              }


         }

        return true
    }

    var ageInput = document.querySelector('#profile-age');
    ageInput.addEventListener('blur', function(event) {


        if (checkValid(ageInput) === false ) {
            ageInput.classList.add(settings.inputErrorClass)}

    }, true);
    ageInput.addEventListener('focus', function(event) {
        if (ageInput.classList.contains(settings.inputErrorClass)) {
            ageInput.classList.remove(settings.inputErrorClass);        }
    })
    var phoneInput = document.querySelector('#profile-phone');
    phoneInput.addEventListener('blur', function(event) {



        if (checkValid(phoneInput) === false ) {
            phoneInput.classList.add(settings.inputErrorClass)}
    }, true);
    phoneInput.addEventListener('focus', function(event) {
        if (phoneInput.classList.contains(settings.inputErrorClass)) {
            phoneInput.classList.remove(settings.inputErrorClass);        }
    })


    var numberInput = document.querySelector('#profile-number');
    numberInput.addEventListener('blur', function(event) {

        if (checkValid(numberInput) === false) {
            numberInput.classList.add(settings.inputErrorClass);
        }

    });
    numberInput.addEventListener('focus', function (event) {
        if (numberInput.classList.contains(settings.inputErrorClass)) {
            numberInput.classList.remove(settings.inputErrorClass);
        }
    })

}