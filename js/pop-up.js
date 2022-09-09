function openMessage(message, timeClose = 2000) {
    let popUp = document.createElement('div');
    popUp.classList.add('pop-up-message');
    popUp.innerHTML = message;
    openFieldmessage(popUp);
    setTimeout(function() {
        closeMessage(popUp);
    }, timeClose);
}

function openFieldmessage(popUp) {
    let fieldMessage = document.querySelector('.field-message');
    if(fieldMessage) {
        fieldMessage.append(popUp);
    }
    else {
        let fieldMessage = document.createElement('div');
        fieldMessage.classList.add('field-message');
        // media
        fieldMessage.classList.add('media-one');
        fieldMessage.classList.add('media-two');
        document.querySelector('body').append(fieldMessage);
        fieldMessage.append(popUp);
    }
}

function closeMessage(popUp) {
    popUp.remove();
    let allPopUp = document.querySelectorAll('.field-message .pop-up-message');
    if(allPopUp.length == 0) {
        document.querySelector('.field-message').remove();
    }
}