import API from "./API";

async function wordAPI(wordArr) {
    
    for (let i = 0; i < wordArr.length; i++) {
        const word = wordArr[i]
        await API.search(word)
                .then(res => {
                    
                    wordArr[i] = {
                        'word': word,
                        type: res.data[0].fl
                    }

                })    
    }

    return wordArr
}

function processArr(wordObjArr) {

    wordObjArr.forEach(word => {
        console.log('processing ', word)
    })

    return 'still testing'
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