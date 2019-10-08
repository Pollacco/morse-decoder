const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let message = '';

    for (let i = 0; i < expr.length; i += 10) {
        let morse = '';
        let onePiece = expr.slice(i, i + 10);
        if (onePiece === '**********') {
            message = message + ' ';
            continue;
        }
        for (let j = 0; j < onePiece.length; j += 2) {
            let symbol = '';
            let encodeSymbol = onePiece.slice(j, j + 2);

            if (encodeSymbol === '10') {
                symbol = symbol + '.';
            } else if (encodeSymbol === '11') {
                symbol = symbol + '-';
            } else {
                continue;
            }
            morse = morse + symbol;
        }

        message = message + MORSE_TABLE[morse];
    }
    return message;
}

module.exports = {
    decode
}