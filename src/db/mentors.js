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
            'In my estimation your problem is as follows: you haven\'t started saving for retirement yet. Though it\'s never too late, at this point in the game there aren\'t a lot of minutes left in the quarter, so to speak.',
            'What I\'m seeing here is basic statistics. You\'re the outlier here and the standard deviation is narrow enough that by your point of view you\'re basically in outer space!' ,
            'This really reminds me of the American War of 1812. Oft forgotten, but really wild when you think about how it was basically an epilogue to the American Revolution and that we got our Anthem at that time.',
            'Your problem is like the Quadratic Equation. It seems intimidating, especially when you\'re in high school, but it\'s actually quite beautiful when you revisit it as an older, wiser version of yourself.',
            'My analytical self says that your problem is actually not a problem at all. Just think about it like that and you\'ll be good to go!',
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
            'Hon, I got pork chops and the rib eye on special; sorry, not sure if that answered your question about our specials.',
            'Here is your water, sweetie. By the way, I\'m taking a 15 minute break so Jose over there is going to take your food order.' ,
            'Did you want a slice of pie? Just the check? Ok, great.',
            'I actually really like the liver and onions dinner, call me crazy, but it\'s really surprisingly good if you give it a chance.',
            'Is Diet Pepsi OK?',
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
            'In the fourth age it was foretold such matters would arise. For it is now the age of problem and it is you who will conquer it.',
            'When the Alanor blessed me with the gift of third-sight I was overcome with the goodness and the wretchedness of the Earth all at once. This I tell you in hopes you shall overcome this problem.' ,
            'The most foulest of places, deep under the greatest of mountains, lie foes greater than your problem, I assure you.',
            'A call to adventure? For this problem? This is no triffling matter, no story for the ages. Do not take such matters so lightly.',
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
