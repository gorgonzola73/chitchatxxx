
var messageIndex = 1;
var messages = $('.message');
var el = $('#message_wrapper');

setInterval(function () {
    var message = messages.get(messageIndex);
    if (message !== undefined) {
        var marginTop = parseInt(el.css("margin-top"));
        el.animate({ marginTop: (marginTop - message.clientHeight - 19) }, 500);
    }
    messageIndex += 1;
}, 2750);
