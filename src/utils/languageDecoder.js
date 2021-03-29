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
    let newStringArr = [];
    let newString = ''
    // we need index as the 'found noun' has to grab adjacent nouns and we're avoiding the for loop
    let index = 0
    // nounstring is relevent deeper in the 'if' tree below. When hitting a noun, grab any adjacent nouns and adjectives.
    let nounString = [];
    let possessiveCheck = false;

    wordObjArr.some(word => {
        // replace I and MY with "Your"
        // definite article = 'the', keep that
        // the first noun is the best noun
        // keep the adjective before that noun if it exists AND a noun that follows if that exists
        console.log("Checking ", word.word)
        console.log("Checking possessive", !possessiveCheck)
        if (word.type === 'definite article') {
            newStringArr.push(word.word)
        } else if (!possessiveCheck && wordObjArr[index + 1] && word.word.charAt(0).toUpperCase() === 'I') {
            // dealing with "I am" or "I'm"
            possessiveCheck = true
            console.log("Inside possessive proc")
            if (word.word.toUpperCase() === 'I' && wordObjArr[index + 1].word.toUpperCase() === 'AM') {
                wordObjArr.splice(index, 2)
                newStringArr.push('being')
            }

            if (word.word.toUpperCase() === `I'M`) {
                console.log(" found I'm ")
                wordObjArr.splice(index, 1)
                newStringArr.push('being')
            }

            console.log("new string", newStringArr)

            wordObjArr.forEach(subWord => {
                newStringArr.push(subWord.word)
            })
            newString = newStringArr.join(" ")

            console.log("new string", newStringArr)

        } else if (!possessiveCheck) {
            if (word.word.toUpperCase() === 'I' || word.word.toUpperCase() === 'MY'){
                newStringArr.push("your")
            } else if (nounString.length === 0 && word.word.toUpperCase() !== 'I' && word.word.toUpperCase() !== 'MY' && word.type === 'noun') {
                
                if (wordObjArr[index - 1] && wordObjArr[index - 1].word.toUpperCase() !== 'MY' && wordObjArr[index - 1].type === 'adjective') {
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
        }

        

        index++

    })
    
    // fail safe here, join with quotes on the word, simulating that the mentor isn't sure what the hell you're talking about.
    if (!newString) {
        return false
    }

    // will uppercase if necessary. Apologies to any proper nouns out there.
    return newString.toLowerCase();
}

// this cranks through the statement and returns a truncated "subject" of the user's input to inject into the mentor-template
function procStatement(string) {
    return new Promise(resolve => {
        const wordArr = string.split(" ")

        wordAPI(wordArr).then((res) => {

            let newString = processArr(res)
            // will receive a false res if the user input doesn't contain any detected nouns or terrible spellings
            if (!newString) {
                newString = '"' + string + '"'
            }
            resolve(newString)
        })
    })
}

export default procStatement
