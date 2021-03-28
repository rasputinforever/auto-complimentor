import API from "./API";

async function wordAPI(wordArr) {
    // thsi processes each word in the string, replacing each word with an object which includes wordType
    for (let i = 0; i < wordArr.length; i++) {
        const word = wordArr[i]
        await API.search(word)
                .then(res => {
                    // find first entry contining "fl"
                    const foundType = res.data.find(obj => obj.fl);

                    console.log(res.data)
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

    // words to skip: 'I'
    const ignoreWords = ['I']
    let newStringArr = [];
    let nounArr = [];
    let index = 0
    // some sentences may detect two sub-strings of "subjects".
    wordObjArr.forEach(word => {
        console.log('processing ', word)

        // skip 'I'
        // definite article = 'the'
        // keep the last noun
        // keep the adjective before that noun if it exists

        if (word.type === 'definite article') {
            newStringArr.push(word.word)
        } else if (word.word.toUpperCase != 'I' && word.type === 'noun') {

            let nounString = [];

            if (wordObjArr[index - 1] && wordObjArr[index - 1].type === 'adjective') {
                nounString.push(wordObjArr[index - 1].word)
            }
            
            if (word.type === 'noun') {
                nounString.push(word.word)
            }

            if (wordObjArr[index + 1] && wordObjArr[index + 1].type === 'noun') {
                nounString.push(wordObjArr[index + 1].word)
            }

            newStringArr.push(nounString.join(" "))
            console.log(newStringArr.join(" "))
            return newStringArr.join(" ")
        }

        index++

    })

    // fail safe here, join with quotes on the word 
    console.log('"' + newStringArr.join(" ") + '"')
     return '"' + newStringArr.join(" ") + '"'

}


function procStatement(string) {
    return new Promise(resolve => {
        console.log('processing string: ', string)
        const wordArr = string.split(" ")

        wordAPI(wordArr).then((res) => {

            const newString = processArr(res)

            resolve('testing0')
        })
    })
}

export default procStatement

// return new Promise(resolve => {

//     // split the problem sentence into an arr of words
//     const wordArr = query.split(" ")
//     let foundWord = "";

//     // do an API call to find the word-type, looking for nouns

//     for (let i = 0; i < wordArr.length; i++) {
//       console.log(wordArr[i])
      
//         API.search(wordArr[i])
//         .then(res => {
//           const wordType = res.data[0].fl
//           console.log(wordArr[i], "is a ", wordType)
//           if (wordType === 'noun' || wordType === 'article' || wordType === 'adjective') {
//             foundWord += " " + wordArr[i]
//           }
//         })
//         .then(() => {
//           if (i === wordArr.length - 1) {
//             resolve(foundWord)
//           }
//         })
//     }
//   });