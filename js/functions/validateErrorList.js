const generateValidateErrorList = (event, result) => {
    let ul = event.target.nextElementSibling;

    if (!result.valid) {
        event.target.classList.add('is-invalid');
        if (ul === null) {
            ul = document.createElement('ul');
            event.target.after(ul);
        }
        ul.innerText = '';
        result.msg.forEach(msg => {
            const li = document.createElement('li');
            li.innerText = msg;
            ul.appendChild(li);
        });
    }
    else {
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
        if (ul !== null) {
            ul.remove();
        }
    }
}

export { generateValidateErrorList }