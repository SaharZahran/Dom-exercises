const submitBtn = document.getElementById('submitBtn');
submitBtn.style.display = "none";

const password = document.getElementById('password1');
const repeat_password = document.getElementById('password2');
const error1 = document.getElementById('pw1_check');
const error2 = document.getElementById('pw2_check');
const form = document.querySelector('form');


password.addEventListener('focusout', checkValue);
repeat_password.addEventListener('focusout', checkEqual);

function checkValue() {
    if (password.value.length < 6)
        error1.innerText = 'Too Short';
    else
        error1.style.display = "none"

}

function checkEqual() {
    if (password.value === repeat_password.value && password.value.length >= 6)
        submitBtn.style.display = "block";
    else if (password.value !== repeat_password.value)
        error2.innerText = 'The two passwords do not match';
    else
        error2.style.display = "none";
}