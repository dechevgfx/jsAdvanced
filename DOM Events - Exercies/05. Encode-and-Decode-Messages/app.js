function encodeAndDecodeMessages() {
    
    document.getElementById('main').children[0].children[2].addEventListener('click', encode);
    document.getElementById('main').children[1].children[2].addEventListener('click', decode);
    let message = '';

    function encode(event) {

        message = event.target.parentNode.children[1].value;
        message = message.split('').map(x => {

            let asciiTableCode = x.charCodeAt(0);
            asciiTableCode++;
            return String.fromCharCode(asciiTableCode);

        }).join('');
        event.target.parentNode.children[1].value = null;
        document.getElementsByTagName('textarea')[1].value = message;

    }

    function decode(event) {

        event.target.parentNode.children[1].value = event.target.parentNode.children[1].value
        .split('')
        .map(x => {

            let asciiTableCode = x.charCodeAt(0);
            asciiTableCode--;
            return String.fromCharCode(asciiTableCode);

        }).join('');

    }
}