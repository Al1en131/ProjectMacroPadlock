function toggleChat() {
    var chatElement = document.querySelector('.chat');
    chatElement.classList.toggle('active');

    setTimeout(function() {
        chatElement.classList.remove('active');
    }, 1000);
}

function toggleNotif() {
    var notifElement = document.querySelector('.notif');
    notifElement.classList.toggle('active');

    setTimeout(function() {
        notifElement.classList.remove('active');
    }, 1000);
}
