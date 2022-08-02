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
        thresholds: [1,3,6],
        messages: {
            neutral: [
                    `In my eyes, userName, you are perfect in every way. You make me so proud; you give my life so much purpose, thank you! I would never think userProblem could get in the way of any of that.`,
                    `I could never imagine userProblem giving you such grief, userName. You have always been the light of my life, and the strongest of all of us. Thank you for making me so proud, I already know you'll get through this just fine.` ,
                    `userName, you are dealing with userProblem? It's incredible that you have come so far in your life that you would encounter such challenges. I trust your decision on this and I know you'll make me proud.`,
                    `Call it what you will but I think this so-called "problem" of yours, what did you call it? userProblem? It is actually a blessing in disguise, just as you are a blessing to me, userName, in that you will come out of this stronger and wiser than you already are.`,
                    `It hurts me deep down to know that userProblem could be causing you, my dearest userName, so much grief. You are strong, you will get through this. I have faith in you!`,
                    `So little in this life means as much as you do to me, userName. I can't bear to think of you dealing with userProblem on your own. Don't forget you have me to help you get through this.`,
                    `Oh, userName, you are so sweet to ask me for help. Yes, I know all about userProblem, and yes, we will get through it together. I promise.`,      
                    `We worked so hard to give you this life, userName, late nights, skipped meals, all for you. Now does that put userProblem into perspective?`,          
                    `userName! Don't get so upset, not in front of me at least. My image of you is that of an angel. My perfect one and only. You wouldn't let userProblem disrupt that for me, can you?`,
                    `Why didn't you come to me sooner about userProblem? I might not know everything about this world we live in now, userName, but one thing I know is that I will always be there for you.`,
                    `It must be so nice to have this life, userName, where userProblem is what you're so worried about. It makes me happy that all those hard times we got through are in the past now.`,
                    `Are you OK userName? I worry about you, sometimes too much, late at night next to the phone, wondering if you're OK. Oh, userProblem? Don't let those little things ruin what's important: family.`,
                ],
            aggressive: [                    
                    `Oh. It's you, userName. What a surprise, you're here now talking about userProblem. As usual you just want to use me. Why don't you call me anymore just to say "Hello" like you used to?`,
                    `.... Maybe the silent treatment will show you how it feels, userName.`,
                    `Why do you insist on hurting me, userName? What does userProblem matter when it comes to honoring your family? Do you even know what that is? Family? I didn't think so. Now please go.`,
                    `Why is it only you have problems with userProblem? Your cousins never talk about that kind of thing, they only call me to say "I love you" but I guess that's too much of a burdon for you, right userName?`,
                    `What would my mother say now... I'd never had betrayed her like my userName has. userProblem? A pity. I might have been able to help you before you became like this.`,
                    `userProblem? This is why you called me, userName? (sniffling)`,
                    `I have plans, userName, with members of the family who care. They tell me their problems, they call me. I don't know what userProblem is but I'm sure whoever you are seeing these days can help.`,
                    `I hope you are happy with how things are now, userName. We did everything for you and now... (sobbing). Are you still there? userProblem? I'm sure you'll figure it out on your own, like you do everything else: without me.`

                ]
            ,
            happy: [

            ]
        }
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
        thresholds: [4,9,10],
        messages: {
            neutral: [
                    `You know what I think, Sport? Oh, right, you want to be called userName. Whatever. What I think you need is a lesson on toughening up! I don't know much about userProblem, but I know what it means to be strong. Something you might think about looking up on that iPad, iPhone, iWhatever it is you got there.`,
                    'Back in my day we didn\'t have to worry about userProblem. We faced every challenge with gusto. Like the time me and the boys won the regionals with nothing but our own grit! Take it from me, userName, things were better back then.' ,
                    `Did I hear you talking about userProblem again? How many times do I have to knock sense into you, userName. Your problem is that you take for granted all that your elders have given you, not whatever nonsense you're yammering on about!`,
                    `Why is your generation so concerned with userProblem? I don't know if I'll ever understand you kids. userName, life isn't so complicated if you toughen up!`,
                    `In the old days we used to call a spade a spade. Now, you can't even open your mouth about something like userProblem without hearing about it from people like you, userName. What's the big deal, just get over your problems and get back to work!`,
                    `What do you want, userName? Can't you see I'm watching the game? What did you say about userProblem? I don't know, go ask your dang yahoo or jeeves or whatever it is, can't you see I'm busy?`,
                    `The golden age of music, TV, and movies is over. It ended before you were even born. Young people like you, userName, are obsessed with stuff like userProblem. Such a waste, did you not learn anything from us?`,
                    `All these damn tree-huggers making this world unlivable. userName, what do you think of that? What are you going on about? userProblem? I don't know what that is, are you listening to me at all?`,
                    `You need to get your rear into gear, userName, if you want to conquer userProblem. Honestly, sounds like some real wimpy stuff, if you know what I mean. Yeah, that's exactly what I mean.`,
                    `I wish I could REALLY tell you what I think about userProblem, userName, but I am afraid the woke mob might come after me. Oh, you don't like the cut of my jib these days? Well BOO HOO!`,
                    `You know what I think, userName? I think all this malarky about userProblem is made up. Yeah, I said it. We only had ONE problem in my day and that was how HARD were you going to work for what your earned.`                    
                ],
            aggressive: [
                `Weak. That's what you are, userName. userProblem is a made up thing, never even heard of it, so why don't you get off your sorry butt and get on with it already! What is "it"? Your damn LIFE, you ingrate!`,
                `Back in my day the weak were beat with mallets with not even a thought about whatever the hell userProblem was. userName, what you need is a good smack on the head, you wimp!`,
                `You and your lousy generation are a bunch of sobbing wimps! userProblem? Are you kidding me, userName? It's no wonder things are the way they are these days with people like you infesting our great country.`,
                `My Dad once told me there were two kinds of people. Good, upstanding citizens, like him, and the utterly pathetic, like you, userName. Get over userProblem and leave me alone.`,
                `An ingrate like you sure wouldn't know the first thing about self determination. userProblem, userName? All I'm hearing is "I am weak". You are pathetic.`,
                `They aught to make it illegal for people like you to whine about userProblem. Yeah, people like YOU, userName. You make me sick.`,                    
                ],            
            happy: [
                ``,
            ]
        }
    },
    
]

module.exports = MentorsDB;
