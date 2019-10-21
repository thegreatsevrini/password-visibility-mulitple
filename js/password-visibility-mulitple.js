//turns nodeList into an array and assigns it to a variable
var passwords = Array.prototype.slice.call(document.querySelectorAll('[type="password"]'));
//grabs checkbox
var togglePasswords = document.querySelector('#show-passwords');


//listens for click events on togglePasswords checkbox
togglePasswords.addEventListener('click', function(event) {
    //loops through each password field in passwords array
    passwords.forEach(function (password, index) {
        //checks to see if the check box is checked and if it is, changes the type of the current password to text (shows the password).
        //otherwise it changes the current password type to password(masks password).
        if (togglePasswords.checked) {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    });
});