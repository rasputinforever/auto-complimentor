// this is the pseudo-db as I do not know best practices for database connection to React yet!

const MentorsDB = [
    {
        name: 'Susan',
        style: {
            fontFamily: 'Permenant Marker',
            fontSize: 28,
            padding: '10px',
        },
        image: 'susan.jpg',
        keyWords: ['motherly', 'coddling', 'calm', 'guilt'],
        messages: [
            `In my eyes, userName, you are perfect in every way. You make me so proud; you give my life so much purpose, thank you! I would never think userProblem could get in the way of any of that.`,
            `I could never imagine something like this for you, userName. You have always been the light of my life, and the strongest of all of us. Thank you for making me so proud.` ,
            `userName? userProblem? It's incredible that you have come so far in your life that you would encounter such challenges. I trust your decision on this and I know you'll make me proud.`,
            `Call it what you will but I think this problem of yours, what is it called, userProblem? It is actually a blessing in disguise, just as you are a blessing to me, userName.`,
            `It hurts me deep down to know that userProblem could be causing you, my dearest userName, so much grief. You are strong, you will get through this. I have faith in you!`,
        ]
    },
    {
        name: 'Dirk',
        style: {
            fontFamily: "Rockwell",
            fontSize: 32,
        },
        image: 'dirk.jpg',
        keyWords: ['fatherly', 'distracted', 'glory-days', 'boostraps'],
        messages: [
            'You know what I think, Sport? Sorry, sorry: userName. Anyway, I think you need to toughen up a bit. Get some grit, and tackle userProblem head on!',
            'Back in my day we didn\'t have userProblem. We faced every challenge with gusto. Like the time me and the boys won the regionals. Those were the days...' ,
            'Sport, er, userName: I just don\'t see what the problem is. If it were me in your shoes the first thing I\'d do is pull up those bootstraps, grin, and attack userProblem with my own determination!',
            'Why is your generation so concerned with userProblem? I don\'t know if I\'ll ever understand your generation, userName. Life isn\'t so complicated if you toughen up!',
            'Back in my day, Sport, we just called a userProblem a userProblem and that was that.',
        ]
    },
    {
        name: 'Spot',
        style: {
            fontFamily: "Comic Sans MD",
            fontSize: 32,
        },
        image: 'spot.jpg',
        keyWords: ['dog'],
        messages: [
            'Bark! Bark bark bark! (Spot is amused by userProblem)',
            'Bark! ... Bark! ... Bark bark!! (Spot is visibly upset by userProblem)' ,
            '... (Spot is sleeping)',
            'Grrr... Bark! (Spot is intimidated by userProblem)',
            '... Woof.',
        ]
    },
    {
        name: 'Paul',
        style: {
            fontFamily: "Didot",
            fontSize: 32,
        },
        image: 'paul.jpg',
        keyWords: ['unrelated', 'specific', 'analytical'],
        messages: [
            `My dude: you can't let userProblem get in the way of saving for your future. Look at me, when I was 19 I started my own business and I retired by 30. userProblem or no userProblem, you gotta look out for number one!`,
            `userName, let me hook you up with a buddy of mine who's big into stocks. He actually got into Bitcoin recently too; definitely a real genius type. Spend an afternoon at his apartment and userProblem won't even register anymore.`,
            `This is a basic statistics problem. userProblem is an outlier in an otherwise normal situation you're living. You're fixated on userProblem, you in fact think you're userProblem, but you're not userProblem: you are userName.`,
            `Dude, I was watching History Channel last night and they were talking about userProblem in Nazi Germany. You wouldn't believe the kind of stuff going on there, it's amazing how people forget about the past.`,
            `userProblem is a lot like the Quadratic Equation, userName. It may seem really obtuse, large, overwhelming, but when you really get into it you realize it has it's own kind of beauty, know what I mean?`,
            `userName, my analytical mind tells me that your problem is that you think userProblem is a problem. If you just realize userProblem isn't a problem you'll be all set!`,
        ]
    },
    {
        name: 'Cindy',
        style: {
            fontFamily: "Tangerine",
            fontSize: 34,
        },
        image: 'cindy.jpg',
        keyWords: ['waitress', 'diner', 'hurried'],
        messages: [
            `Hon, I got pork chops and the rib eye on special; sorry, not sure if that answered your question about userProblem.`,
            `Here is your userProblem, sweetie. By the way, I'm taking a 15 minute break so Jose over there is going to take your food order.` ,
            `Did you want a slice of pie? Just the check? Ok, great.`,
            `I actually really like the userProblem and onions dinner, call me crazy, but it's really surprisingly good if you give it a chance.`,
            `Is Diet userProblem OK?`,
        ]
    },
    {
        name: 'Deego',
        style: {
            fontFamily: "Luminari",
            fontSize: 34,
        },
        image: 'deego.jpg',
        keyWords: ['waitress', 'diner', 'hurried'],
        messages: [
            `In the fourth Age of Terra it was foretold by the Alanor that userProblem would rise again. After a millenium of peace a new era begins: the Age of userProblem.`,
            `When the Alanor blessed me with the gift of third-sight I saw all the goodness of earth consumed by the wretchedness of userProblem. In an instant I came to from my premonition and since then I knew it was you, userName, who would return Terra to a new era of peace.`,
            `In the deepest reaches of Terra, below the Cloudy Crest, lies a place most foul where userProblem dwells. userName! You will conquer this place and liberate the underground orc city of Doria!`,
            `Adventure? In matters concerning userProblem, there is no so-called 'adventure', my dear userName. No, this is a grave matter indeed and one we which must seek council for.`,
            `In the First Age of Terra`,
            'When the Earth came into being, in the age of the Gods, even the Alanor themselves knew not what they wrought.',
        ]
    },
    {
        name: 'Plork',
        style: {
            fontFamily: "Courier New",
            fontSize: 28,
        },
        image: 'plork.jpg',
        keyWords: ['alien', 'nervous', 'hurried'],
        messages: [
            'Haha, yes, I can relate completely to your problem! I have also experienced that problem many times. Thank you!',
            'When I was a human child I had this problem occur to me many times and on each time it occured to me I also had trouble with that problem!',
            'It would seem for us, normal human people, that we are often challenged by problems such as this one.',
            'When I arrived to this land mass and began interacting with its inhabitants I was struck by both how sentient the beings here are as well as how troubled they appear to be.',
            'This reminds me of a funny annecdote that happened to me; I was imbibing on the typical meal of this region that we all enjoy and noticed a small creature running about on the ground of that establishment. I was not too sure if it was also a sentient create, such as ourselves, but I was too nervous to ask it.',
        ]
    },
]

module.exports = MentorsDB;
