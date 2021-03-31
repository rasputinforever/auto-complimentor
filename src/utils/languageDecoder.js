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

    wordObjArr.forEach(word => {

        if (word.type === 'definite article') {
            newStringArr.push(word.word)
        } else if (!possessiveCheck && wordObjArr[index + 1] && word.word.charAt(0).toUpperCase() === 'I') {
            // dealing with posessives
            possessiveCheck = true

            // check if "being" exists in the string
            const beingCheck = wordObjArr.find(obj => obj.word === 'being'); 

            // I have... etc
            if (word.word.toUpperCase() === `I` && wordObjArr[index + 1].word.toUpperCase() === 'HAVE') {
                newStringArr.push('having')
                wordObjArr.splice(index, 2)

            // I'm or I AM here
            } if (word.word.toUpperCase() === 'I' && wordObjArr[index + 1].word.toUpperCase() === 'AM') {
                wordObjArr.splice(index, 2)
                if (!beingCheck) {newStringArr.push('being')}
            }
            if (word.word.toUpperCase() === `I'M`) {
                wordObjArr.splice(index, 1)
                if (!beingCheck) {newStringArr.push('being')}
            }

            wordObjArr.forEach(subWord => {
                newStringArr.push(subWord.word)
            })

            newString = newStringArr.join(" ")
       

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
        console.log(wordArr)
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
