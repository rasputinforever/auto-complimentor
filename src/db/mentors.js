// this is the pseudo-db as I do not know best practices for database connection to React yet!

const MentorsDB = [
    {
        name: 'Susan',
        age: '58',
        location: 'Phoenix, Arizona',
        style: {
            fontFamily: 'Arial',
            fontSize: 28,
            padding: '10px',
        },
        image: 'susan.JPG',
        keyWords: ['motherly', 'coddling', 'calm', 'guilt'],
        messages: [
            `In my eyes, userName, you are perfect in every way. You make me so proud; you give my life so much purpose, thank you! I would never think userProblem could get in the way of any of that.`,
            `I could never imagine userProblem giving you such grief, userName. You have always been the light of my life, and the strongest of all of us. Thank you for making me so proud, I already know you'll get through this just fine.` ,
            `userName, you are dealing with userProblem? It's incredible that you have come so far in your life that you would encounter such challenges. I trust your decision on this and I know you'll make me proud.`,
            `Call it what you will but I think this so-called "problem" of yours, what did you call it? userProblem? It is actually a blessing in disguise, just as you are a blessing to me, userName, in that you will come out of this stronger and wiser than you already are.`,
            `It hurts me deep down to know that userProblem could be causing you, my dearest userName, so much grief. You are strong, you will get through this. I have faith in you!`,
            `So little in this life means as much as you do to me, userName. I can't bear to think of you dealing with userProblem on your own. Don't forget you have me to help you get through this.`,
            `Oh, userName, you are so sweet to ask me for help. Yes, I know all about userProblem, and yes, we will get through it together. I promise.`
        ]
    },
    {
        name: 'Dirk',
        age: '62',
        location: 'Dayton, Ohio',
        style: {
            fontFamily: "Rockwell",
            fontSize: 32,
        },
        image: 'dirk.JPG',
        keyWords: ['fatherly', 'distracted', 'glory-days', 'boostraps'],
        messages: [
            `You know what I think, Sport? Oh, right, you want to be called userName. Whatever. What I think you need is a lesson on toughening up! I don't know much about userProblem, but I know what it means to be strong. Something you might think about looking up on that iPad, iPhone, iWhatever it is you got there.`,
            'Back in my day we didn\'t have to worry about userProblem. We faced every challenge with gusto. Like the time me and the boys won the regionals with nothing but our own grit! Take it from me, userName, things were better back then.' ,
            `Did I hear you talking about userProblem again? How many times do I have to knock sense into you, userName. Your problem is that you take for granted all that your elders have given you, not whatever nonsense you're yammering on about!`,
            `Why is your generation so concerned with userProblem? I don't know if I'll ever understand you kids. userName, life isn't so complicated if you toughen up!`,
            `In the old days we used to call a spade a spade. Now, you can't even open your mouth about something like userProblem without hearing about it from your generation, userName. What's the big deal, just get over your problems and get back to work!`,
            `What do you want, userName? Can't you see I'm watching the game? What did you say about userProblem? I don't know, go ask your dang yahoo or jeeves or whatever it is, can't you see I'm busy?`,
            `The golden age of music, TV, and movies is over. It ended before you were even born. Young people like you, userName, are obsessed with stuff like userProblem. Such a waste, did you not learn anything from us?`
        ]
    },
    {
        name: 'Spot',
        age: '1',
        location: 'Portland, Oregon',
        style: {
            fontFamily: "cursive",
            fontSize: 32,
        },
        image: 'spot.JPG',
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
        age: '32',
        location: 'Los Angeles, California',
        style: {
            fontFamily: "Tahoma",
            fontSize: 32,
        },
        image: 'paul.JPG',
        keyWords: ['unrelated', 'specific', 'analytical'],
        messages: [
            `My dude: you can't let userProblem get in the way of what really matters right now: saving for your future. Look at me, when I was 19 I started my own business and I retired by 30. userProblem or not, you gotta look to the future, dude!`,
            `userName, let me hook you up with a buddy of mine who's big into stocks. He actually got into Bitcoin recently too, you could call him, like, the modern-day Bill Gates. Definitely a real genius type. Anyway, let me get you his pager number, call him up, tell him I sent you, and spend an afternoon at his apartment. After a few minutes with my guy userProblem won't even register anymore.`,
            `This is a basic statistics problem, dude: userProblem is an outlier in an otherwise normal life you're living, userName. You gotta get beyond it, stop living in the foothills, you are the apex of your own distribution, my friend.`,
            `Dude, I was watching History Channel last night and they were talking about userProblem in Nazi Germany. You wouldn't believe the kind of stuff going on there, it's amazing how people forget about the past.`,
            `Your deal with userProblem is a lot like calculus. Don't let it intimidate you, userName, it's just another chapter in the endless semester of userName 101.`,
            `userName, my analytical mind tells me that your problem is that you think userProblem is a problem. If you just realize userProblem isn't a problem you'll be all set!`,
        ]
    },
    {
        name: 'Cindy',
        age: '42',
        location: 'Tulsa, Oklahoma',
        style: {
            fontFamily: "Brush Script MT,cursive",
            fontSize: 38,
        },
        image: 'cindy.JPG',
        keyWords: ['waitress', 'diner', 'hurried'],
        messages: [
            `Hon, I got pork chops and the rib eye on special; sorry, not sure if that answered your question about userProblem.`,
            `I got userProblem that you ordered, sweetie. By the way, I'm taking a 15 minute break so Jose over there is going to check in on you here in a minute. Enjoy!`,
            `Did you want a slice of pie? Just the check? Oh, and a doggie bag for userProblem? Ok, be right back.`,
            `I actually really enjoy userProblem and onions as a dinner, call me crazy, but it's really surprisingly good if you give it a chance.`,
            `Is Diet userProblem OK?`,
        ]
    },
    {
        name: 'Deego',
        age: '1087',
        location: 'Montpelier, Vermont',
        style: {
            fontFamily: "papyrus",
            fontSize: 34,
        },
        image: 'deego.JPG',
        keyWords: ['waitress', 'diner', 'hurried'],
        messages: [
            `In the fourth Age of Terra it was foretold by the Alanor that userProblem would rise again. After a millenium of peace a new era begins: the Age of userProblem.`,
            `When the Alanor blessed me with the gift of third-sight I saw all the goodness of earth consumed by the wretchedness of userProblem. In an instant I came to from my premonition and since then I knew it was you, userName, who would return Terra to a new era of peace.`,
            `In the deepest reaches of Terra, below the Cloudy Crest, lies a place most foul where userProblem dwells. userName! You will conquer this place and liberate the underground orc city of Doria from userProblem!`,
            `Adventure? In matters concerning userProblem, there is no so-called 'adventure', my dear userName. No, this is a grave matter indeed and one we which must seek council for.`,
            `In the First Age of Terra, on the day the Alanor cried out and existence began, even Mother Aärde did not forsee the wickedness of userProblem. In truth, to them, all of Terra was pure and good.`,
        ]
    },
    {
        name: 'Plork',
        age: '?',
        location: 'Roswell, New Mexico',
        style: {
            fontFamily: "Courier New",
            fontSize: 28,
        },
        image: 'plork.JPG',
        keyWords: ['alien', 'nervous', 'hurried'],
        messages: [
            `Ha. Ha. Yes. I fully relate to userProblem! I have also expereinced userProblem many times in my dozens of day-cycles! Ha. Ha. Being a typical human sure is exciting!`,
            `Your query regarding userProblem has initiated a recall into my own past which I have transformed into an anecdote! Why yes, I have many anecdotes to share with you, fellow userName.`,
            `Ah, yes. Normal humans like us often concern ourselves with userProblem. It is a natural form of expression for the people of userName, is it not?`,
            `Like yourself, I too am a life-form concerned with userProblem. Every regularly occuring series of night-day cycles I am also asking others for their wisdom on that matter. I am just like you, userName.`,
            `Ah, userProblem. I have many points of wisdome regarding this matter thanks to my typical existence as a human, and as a typical human I have specific wisdom on the matter.`,
            `On a particular day-night cycle I personally experienced, I had the opportunity to interact with a lesser mammal regarding userProblem. The odd creature replied immediately, userName, which startled me at the time. It said "Bork! Bork!"`,
            `I have regular cravings for userProblem. I have fairly normal tastes when it comes to what I do and do not masticate to, userName.`,
            `Consider that userProblem can be handled by masking it in the form of an average human and training it to behave as they do, userName.`
        ]
    },
    {
        name: 'Phillip',
        age: '14',
        location: 'Austin, Texas',
        style: {
            fontFamily: "",
            fontSize: 28,
        },
        image: 'phillip.JPG',
        keyWords: ['young', 'games', 'immature'],
        messages: [
            `Oh, userProblem? Of course I've heard of userProblem, I'm not a baby. My brother, who is in college, told me userProblem is all over the place over there. He knows all about stuff like that.`,
            `Hey, userName, what's up? What's that about userProblem? Oh, yeah, I know all about userProblem. My friend from middle school used to talk about stuff like that all the time. He was a pretty big nerd, but he was actually really cool.`,
            `Oh, userName, you want to come over tonight and play that new game " userProblem "? I never heard of that game but I do have an XBOX and Playstation so I think we can get it going.`,
            `My sister is always going on about userProblem. She is so annoying. I can't believe I used to be a 6th grader. I was never that lame, though, know what I mean userName?`,
            `Hey, I'll catch up with you at Math, userName, the bell just rang! Ask me about userProblem after school!`
        ]
    },
]

module.exports = MentorsDB;
