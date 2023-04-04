import API from "./API";

const wordAPI = async (wordArr) => {
    // this processes each word in the string, replacing each word with an object which includes wordType
    await Promise.all(wordArr.map(async (word, i) => {
       
        const res = await API.search(word)        
       
        // find first entry contining "fl"
        const foundType = res.data.find(obj => obj.fl);

        wordArr[i] = {
            'word': word,
            type: foundType.fl
        }
        
    }))

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
        } else if (!possessiveCheck) {
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

            // "My ..."
            if (word.word.toUpperCase() === 'MY'){
                wordObjArr.splice(index, 1)
                newStringArr.push("your")
            }
            
            // now patch on the rest of the string, usually makes sense.
            wordObjArr.forEach(subWord => {
                newStringArr.push(subWord.word)
            })

            newString = newStringArr.join(" ")
       

        } else if (!possessiveCheck) {
            // non possessives here
            if (nounString.length === 0 && word.word.toUpperCase() !== 'I' && word.word.toUpperCase() !== 'MY' && word.type === 'noun') {
                
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
const procStatement = async (string) => {
    const wordArr = string.split(" ")

    const response = await wordAPI(wordArr)
    let newString = processArr(response)
    
    // will receive a false res if the user input doesn't contain any detected nouns or terrible spellings
    if (!newString) {
        newString = '"' + string + '"'
    }
    
    return newString
}

export default procStatement
