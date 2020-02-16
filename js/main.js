var closeChat = document.getElementById('close-chat');
var openChat = document.getElementById('open-chat');
var chat = document.getElementById('chat');

closeChat.onclick = function () {
    chat.classList.add('hide');
    openChat.classList.remove('hide');
}
openChat.onclick = function () {
    chat.classList.remove('hide');
    openChat.classList.add('hide');
}