const Filter = require('bad-words')
    filter = new Filter();
    filter.addWords('bad', 'heck');

const generateMessage = (userName,text) => {
    var newText;
    if(text){
        newText = filter.clean(text);
    }else console.log("no text");

    console.log(newText);
    return {
        userName,
        text: newText,
        createdAt: new Date().getTime()
    }
}

module.exports = { generateMessage }