var timer;
var msg;
var hascode = false;
var auto;
function gencode(length, special) {
    var iteration = 0;
    var code = "";
    var randomNumber;
    if (special == undefined) {
        var special = false;
    }
    while (iteration < length) {
        randomNumber = (Math.floor((Math.random() * 100)) % 94) + 33;
        if (!special) {
            if ((randomNumber >= 33) && (randomNumber <= 47)) {
                continue;
            }
            if ((randomNumber >= 58) && (randomNumber <= 64)) {
                continue;
            }
            if ((randomNumber >= 91) && (randomNumber <= 96)) {
                continue;
            }
            if ((randomNumber >= 123) && (randomNumber <= 126)) {
                continue;
            }
        }
        iteration++;
        code += String.fromCharCode(randomNumber);
    }
    return "[PP助手1.0-" + code + "]";
}

function gencode2() {
    if (hascode) {
        hascode = false;
        return ' ';
    }
    else {
        hascode = true;
        return '';
    }
}

function getElementsByClassName(node, classname) {
    if (node.getElementsByClassName) { // use native implementation if available
        return node.getElementsByClassName(classname);
    } else {
        return (function getElementsByClass(searchClass, node) {
            if (node == null)
                node = document;
            var classElements = [],
                els = node.getElementsByTagName("*"),
                elsLen = els.length,
                pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)"), i, j;

            for (i = 0, j = 0; i < elsLen; i++) {
                if (pattern.test(els[i].className)) {
                    classElements[j] = els[i];
                    j++;
                }
            }
            return classElements;
        })(classname, node);
    }
}

function sendmsg() {
    var sendbox = getElementsByClassName(document, 'my-message')[0];
    var sendbtn = getElementsByClassName(document, 'btn-send')[0];
    sendbox.value = msg + gencode2();// + "[" + Math.random() + "]";
    sendbtn.click();
    timer = setTimeout("sendmsg()", 500);
}

//自动回复
function autoRespon() {
    alert("121212");
    var ks_scroll_view_content = getElementsByClassName(document, 'ks-scroll-view-content')[0];
    ks_scroll_view_content.addEventListener("DOMNodeInserted",function(){
        var chat=getElementsByClassName(document,"chat-item role-6")[0];
        //  console.debug(chat);
        if(typeof chat != "undefined"){

            var sendbox = getElementsByClassName(document, 'my-message')[0];
            var sendbtn = getElementsByClassName(document, 'btn-send')[0];
            var event=getElementsByClassName(chat,"nick-name")[0];
            // console.debug(event.data_nick_name);
            event.click();
           // var s="对" +event.title.toString()+ "悄悄地说:test ";
            console.debug(s);
            sendbox.value=sendbox.value+"renew";
            sendbtn.click();
        }
    });



}

function rush(action) {
    if (action == 'stop') {
        clearTimeout(timer);
    }
    if (action == 'start') {
        msg = getElementsByClassName(document, 'my-message')[0].value;
        sendmsg();
    }
    if (action == 'auto'){
        autoRespon();

    }
        }
