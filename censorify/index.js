var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function censor(inStr) {
    for(var idx in censoredWords) {
        var inStr = inStr.replace(censoredWords[idx], "***");
    }
    for (idx in customCensoredWords) {
        inStr = instr.replace(customCensoredWords[idx], "***");
    }
    return inStr;
}

function addCensoredWord(word) {
    customCensoredWords.push(word);
}
function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}

export.censor = censor;
export.addCensoredWord = addCensoredWord;
export.getCensoredWords = getCensoredWords;