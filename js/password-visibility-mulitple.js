//turn nodelist into an array
var passwords = Array.prototype.slice.call(document.querySelectorAll('.password'));
console.log(passwords);
//grabs checkbox
var togglePasswords = document.querySelector('#show-passwords');
console.log(togglePasswords);

//
togglePasswords.addEventListener('click', function(event) {
    if (togglePasswords.checked) {
        passwords.forEach(function (password, index) {
            password.type = 'text';
        });
    } else {
        passwords.forEach(function (password, index) {
            password.type = 'password';
        });
    
}

});