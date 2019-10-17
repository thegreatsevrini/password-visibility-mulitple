//turn nodelist into an array
var passwords = Array.prototype.slice.call(document.querySelectorAll('[type="password"]'));
//grabs checkbox
var togglePasswords = document.querySelector('#show-passwords');


//allow user to toggle mulitple password fields at once
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