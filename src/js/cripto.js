import {
    forEach as _foreach
} from 'lodash';
const name = 'Cripto Module';

function reverseString(str) {
    return str === ""
        ? ""
        : reverseString(str.substr(1)) + str.charAt(0);
}

function startCripto (text) {
    let result = text
        .replace(/M/g, 't|')
        .replace(/m/g, 'T|')
        .replace(/t(?!\|)/g, 'M')
        .replace(/T(?!\|)/g, 'm')
        .replace(/a/g, '9|')
        .replace(/9(?!\|)/g, 'a')
        .replace(/g/g, '#|')
        .replace(/#(?!\|)/g, 'g')
        .replace(/r/g, '%|')
        .replace(/%(?!\|)/g, 'r')
        .replace(/A/g, 'j|')
        .replace(/j(?!\|)/g, 'A')
        .replace(/e/g, '¨|')
        .replace(/¨(?!\|)/g, 'e')
        .replace(/i/g, '¢|')
        .replace(/¢(?!\|)/g, 'i')
        .replace(/o/g, '7|')
        .replace(/7(?!\|)/g, 'o')
        //remove pipes
        .replace(/\|/g, '');

    let words = result.split(' ');

    _foreach(words, (word, index) => {
        words[index] = reverseString(word);
    });
    result = words.join('§ª');

    return result;
}

function startDecripto (text) {
    let words = text.split('§ª');

    _foreach(words, (word, index) => {
        words[index] = reverseString(word);
    });

    let result = words.join(' ');

    return result
        .replace(/t/g, 'M|')
        .replace(/T/g, 'm|')
        .replace(/M(?!\|)/g, 't')
        .replace(/m(?!\|)/g, 'T')
        .replace(/9/g, 'a|')
        .replace(/a(?!\|)/g, '9')
        .replace(/#/g, 'g|')
        .replace(/g(?!\|)/g, '#')
        .replace(/%/g, 'r|')
        .replace(/r(?!\|)/g, '%')
        .replace(/j/g, 'A|')
        .replace(/A(?!\|)/g, 'j')
        .replace(/¨/g, 'e|')
        .replace(/e(?!\|)/g, '¨')
        .replace(/¢/g, 'i|')
        .replace(/i(?!\|)/g, '¢')
        .replace(/7/g, 'o|')
        .replace(/o(?!\|)/g, '7')
        //remove pipes
        .replace(/\|/g, '');
}

export {
    name,

    startCripto,

    startDecripto,
};
