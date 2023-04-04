// built in "db". If this app ever got more complex this would go to BE and work out a way to categorize each response and all this and that.

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
            `Oh, userName, you are so sweet to ask me for help. Yes, I know all about userProblem, and yes, we will get through it together. I promise.`,
            `I see, userProblem, ai... well, userProblem, baby, I want to help more but it's already so much while I'm making you dinner, doing your laundry, dusting and... well, no, it's ok. I will do this for you as well because that's why I'm here.`,
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
            `In the old days we used to call a spade a spade. Now, you can't even open your mouth about something like userProblem without hearing about it from people like you, userName. What's the big deal, just get over your problems and get back to work!`,
            `What do you want, userName? Can't you see I'm watching the game? What did you say about userProblem? I don't know, go ask your dang yahoo or jeeves or whatever it is, can't you see I'm busy?`,
            `The golden age of music, TV, and movies is over. It ended before you were even born. Young people like you, userName, are obsessed with stuff like userProblem. Such a waste, did you not learn anything from us?`,
            `I was doing my own research on userProblem, userName, and it seems like your generation still does not get it. It used to mean something when you came home with dirt and sweat on your brow. Now? Those men are now the villains simply for speaking their minds. Get real.`,
            `Real, true-blue, red-blooded, whi -- oh, no you don't, userName, you are not going to 'catch' me this time with some woke nonsense! I can't even start with you and, what was it, userProblem? Are you serious? What a load of horse pucky, you have got to be kidding me. Get a grip and deal with it like the rest of us do, by gritting your teeth and just getting on with your damn life!`
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
            '(Spot is staring at the ground you are standing on, waiting for food to fall from your plate)',
            `Bark! Bark! Barkbarkbarkbarkbarkbark! (it's not clear what Spot is barking at)`,
            `Grrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr! (Spot is growling at the corner of the room and not paying attention to userProblem)`,
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
            `This is a basic statistics problem, dude: userProblem is an outlier in an otherwise normal life you're living, userName. You gotta get beyond it, stop living in the foothills, you are the apex of your own distribution, userName.`,
            `Dude, I was watching History Channel last night and they were talking about userProblem in Nazi Germany. You wouldn't believe the kind of stuff going on there, it's amazing how people forget about the past.`,
            `Your deal with userProblem is a lot like calculus. Don't let it intimidate you, userName, it's just another chapter in the endless semester of userName 101.`,
            `userName, my analytical mind tells me that your problem is that you think userProblem is a problem. If you just realize userProblem isn't a problem you'll be all set!`,
            `My dude, userName, my best B. You know what I'm talking about, hahaha. No, but seriously, I am getting so ripped at the gym right now. When I'm doing my reps I think about userProblem and it really gets my blood rushing, you feel me? All problems are like this, you just explode all over them in a rush of pure, white-hot fury and you cannot go wrong. You feel me, right?`,
            `Oh hey, userName, you gotta get on this. You won't have time to worry about userProblem after you see my gains. No, not my pecs, but thank you for noticing. I'm talking my NFTs, my dude! I bought in way early, like, before the celebs were going hard and you will NOT beleive the ROIs I'm seeing. Hey, are you into Web 3.0? You have to let me get you in on this meeting I'm going to, you got a few hours to kill right now?`
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
            `So sorry, hon, it's been a whirlwind of a day, if you can beleive that. We got Pork Chops on special with the potatoes gratin and that does come with a drink from the pop machine. Did that answer your questoin about today's 'userProblem'?`,
            `I got userProblem that you ordered, sweetie. By the way, I'm taking a 15 minute break so Jose over there is going to check in on you here in a minute. Enjoy!`,
            `Did you want a slice of pie? Just the check? Oh, and a doggie bag for userProblem? Ok, be right back.`,
            `I actually really enjoy userProblem and onions as a dinner, call me crazy, but it's really surprisingly good if you give it a chance.`,
            `Is Diet userProblem OK?`,
            `For me, personally, I like userProblem just fine with a hot coffee and maybe a slice of pie after. That is, if I could afford it. Oh, not money. Money ain't a darn thing, hon. I'm taking time. There just isn't ever enough time in this life, know what I mean?`,
            `All right, hon, you enjoy that userProblem. I'm about to clock out. My kids are already in bed but I still like to be home by a certain time, if you catch me. Take care.`,
            `Cook's got that userProblem on the broiler, hope to get that to your liking quickly. I'm so sorry about that little mistake, he's been going through something of a rough patch in life. He finally realized what he wants to do in life, at age 57 if you can believe it -- wants to be an artist, you see, but in this podunk town, not much calls for any paintin's or what-have-yous and it ain't like he can just up and quit.`,            
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
            `When the Alanor blessed me with the gift of third-sight I saw all the goodness of earth consumed by the wretchedness of userProblem. In an instant I came to from my premonition and from that moment, and every moment since then, I knew it was you, userName, who would return Terra to a new era of peace.`,
            `In the deepest reaches of Terra, below the Cloudy Crest, lies a place most foul where userProblem dwells. userName! You will conquer this place and liberate the underground orc city of Doriminaniara from userProblem!`,
            `Adventure? In matters concerning userProblem, there is no so-called 'adventure', my dear userName. No, this is a grave matter indeed and one we which must seek council for. Join me, earthly warrior, to the lands far east where the skies are born and the earth is made anew!`,            
            `In the First Age of Terra, on the day the Blalanor cried out and existence began, even Mother Aärde did not forsee the wickedness of userProblem. In truth, to them, all of Terra was pure and good.`,
            `Terra calls out, userName, whether you have the ears for it or not. The elves, below even their grandest forest kindgdoms, hear these cries from deep below. The dwarves, with their keen insight, sees the voice of Blalanor warp the very lands we stand upon. What they see and hear are the same. A song of the end times will begin when the Evil One rises at last and He shall be ushered in by userProblem for it is userProblem that beckons Kanatublarina, the Dark One.`

            
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
            `I have regular cravings for userProblem. I have fairly normal tastes when it comes to what I do and do not masticate, userName.`,
            `Consider that userProblem can be handled by masking it in the form of an average human and training it to behave as they do, userName.`,            
            `Greetings, userName! I have intercepted a communicate regarding this issue and it states in clear terms ERROR_SYS_MSG: Code 000A1X0001. I'm happy to be of further assistance regarding userProblem.`,
            `Ha ha ha! Yes! Ha ha ha! userName! I agree with you regarding userProblem! Ha ha ha! Yes! Ha Ha Ha! I am audibly laughing, can you interpret these sounds correctly? Ha ha ha.`,
            `My life partners Kando and Quirbu encounter userProblem regularly in their typical day cycle and alert me to its existence. Yes, I too have normal interactions with my fellow humans, userName, thank you for recognizing that!`
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
            `Oh, userName, you want to come over tonight and play that new game "Call of userProblem "? I never heard of that game but I do have an XBOX and Playstation so I think we can get it going.`,
            `My sister is always going on about userProblem. She is so annoying. I can't believe I used to be a 6th grader. I was never that lame, though, know what I mean userName?`,
            `Hey, I'll catch up with you at Math, userName, the bell just rang! Ask me about userProblem after school!`,
            `Dude, my sister is so annoying, she is so stupid too. She told me you were dealing with something called userProblem or something. Is she even serious right now? Ugh, I really hate her sometimes, userName, she says so much stupid stuff!`,
            `Uh, yeah, I know about userProblem. Duh. I'm not a stupid kid anymore, I even hang out with my brother sometimes when he comes home on the weekends. Last time he was here we actually played a game together, he wasn't super busy with his stupid girlfriend or whatever. Actually, I think that's why I know about userProblem, she was going on and on about it to my brother this one time and he got all mad and then they were fighting or something. Uh, userName, do you have family that fights a lot?`,
            `Oh yeah, userProblem, I think about that sometimes. I kind of like stuff like that, actually. I actually love baseball more, though, but then basketball is fun too. I think soccer is OK, I wish it was closer together, you know what I mean? Like the guys stand more together 'cause they are really far away from each other which is like, too far away, you know what I mean? userName?`,
            `Whatever, userName. That stuff about userProblem is, like, really lame. You should, like, beat it up or something. Make your little sister deal with it, if you have a little sister I mean. Mine is really stupid so if you have one hopefully she's not like mine. My sister, I mean, not userProblem.`
        ]
    },
]

module.exports = MentorsDB;
