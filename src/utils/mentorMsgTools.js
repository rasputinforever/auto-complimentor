const Message = {
    messageRandomizer: function(msgArr) {

        const msg = msgArr[Math.floor(Math.random() * msgArr.length)]
    
        return msg
    },

    transformMessage: function(msg, name, prob) {
        
        let msgArr = msg.split(" ")
    
        msgArr.forEach(word => {
            if (word.indexOf('userName') > -1) {
    
                const newName = name + word.slice("userName".length)
                msgArr[msgArr.indexOf(word)] = newName
    
            } else if (word.indexOf('userProblem') > -1) {
    
                const newProb = prob + word.slice("userProblem".length)
                msgArr[msgArr.indexOf(word)] = newProb
    
            }
        })
    
        return msgArr.join(" ")
    }
    
};

module.exports = Message;
