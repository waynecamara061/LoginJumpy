const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const telefoneRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
const cpfRegex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidate();
    mainPasswordValidate();
    nameValidate();
    telefoneValidate();
    cpfValidate();
});

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '2px solid #008000';
    spans[index].style.display = 'none';
}

function cpfValidate() {
    if (!cpfRegex.test(campos[3].value)) {
        setError(3);
    } else {
        removeError(3);
    }
}

function telefoneValidate() {
    if (!telefoneRegex.test(campos[2].value)) {
        setError(2);
    } else {
        removeError(2);
    }
}

function emailValidate() {
    if (emailRegex.test(campos[1].value)) {
        setError(1);
    } else {
        removeError(1);
    }
}

function mainPasswordValidate() {
    if (campos[4].value.length < 4) {
        setError(4);
    } else {
        removeError(4);
    }
}

function nameValidate() {
    if (campos[0].value.length < 3) {

        setError(0);

    } else {

        removeError(0)
    }
}