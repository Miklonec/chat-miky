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

var windowHeight = document.documentElement.clientHeight;
var popUp = document.getElementById('popUp');
if (windowHeight >= 938 || windowHeight <= 944) {
    popUp.style.bottom = "397px";  
}
if(windowHeight <= 937) {
    popUp.style.bottom = "380px";   
}




var frame = document.getElementById('frame');
var miky = document.getElementById('miky');
frame.onmouseover = function() {
   miky.play();
}

