import API from "./API";

async function wordAPI(wordArr) {
    // this processes each word in the string, replacing each word with an object which includes wordType
    for (let i = 0; i < wordArr.length; i++) {
        const word = wordArr[i]
        await API.search(word)
                .then(res => {
                    // find first entry contining "fl"
                    const foundType = res.data.find(obj => obj.fl);
                    wordArr[i] = {
                        'word': word,
                        type: foundType.fl
                    }

                })    
    }

    return wordArr
}

function processArr(wordObjArr) {
    // this is where we're going to create the "logic" to figure out what the subject of the sentence is. 
    console.log(wordObjArr)
    let newStringArr = [];
    
    let newString = ''

    let index = 0

    let nounString = [];

    // some sentences may detect two sub-strings of "subjects".
    wordObjArr.some(word => {
        console.log("Checking ", word)
        // skip 'I'
        // definite article = 'the', keep that
        // the first noun is the best noun
        // keep the adjective before that noun if it exists AND a noun that follows if that exists
        console.log(nounString.length)
        if (word.type === 'definite article') {
            newStringArr.push(word.word)
        } else if (word.word.toUpperCase() === 'I' || word.word.toUpperCase() === 'MY'){
            newStringArr.push("your")
        } else if (nounString.length === 0 && word.word.toUpperCase() != 'I' && word.word.toUpperCase() != 'MY' && word.type === 'noun') {
            console.log("Found noun: ", word.word)
            

            if (wordObjArr[index - 1] && wordObjArr[index - 1].word.toUpperCase() != 'MY' && wordObjArr[index - 1].type === 'adjective') {
                nounString.push(wordObjArr[index - 1].word)
            }
            
            if (word.type === 'noun') {
                nounString.push(word.word)
            }

            if (wordObjArr[index + 1] && wordObjArr[index + 1].type === 'noun') {
                nounString.push(wordObjArr[index + 1].word)
            }

            newStringArr.push(nounString.join(" "))
            
            newString = newStringArr.join(" ")

        }

        index++

    })


    // fail safe here, join with quotes on the word 
    if (!newString) {

        return false

    }

    return newString

}


function procStatement(string) {
    return new Promise(resolve => {
        const wordArr = string.split(" ")


        wordAPI(wordArr).then((res) => {

            let newString = processArr(res)
            if (!newString) {
                newString = '"' + string + '"'
            }
            resolve(newString)
        })
    })
}

export default procStatement
