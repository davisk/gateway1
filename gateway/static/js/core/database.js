var ventureName = window.location.hash;
console.log(ventureName);
var ventureUrl = 'localhost:9000/database/' + ventureName;

var interest = {
    score : 0
};

var elevator = {
    final_answers: [0,0,0]
};

var gamestate = {
    position : {
        x: 0,
        y: 0
    },
    level: 1,
    start: {
        question1: 0,
        question2: 0,
        question3: 0,
        question4: 0,
        question5: 0
    },
    aha: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    elevator: {
        final_answers: [0,0,0]
    },
    gap: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    interest: {
        score: 0
    },
    survey: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    }
};

interest.watch('score', function() {
    console.log(interest.score);
    gamestate.interest.score = interest.score;
});

elevator.watch('final_answers', function(){
    console.log(final_answers);
    gamestate.elevator.final_answers = final_answers;
});

var db = new PouchDB(ventureName);

db.put(gamestate);

db.changes({
    onChange: function() {
        console.log('Ch-Ch-Changes');
    }
});

function sync() {
    console.log('syncing now');
    db.replicate.to(ventureUrl, gamestate);
    db.replicate.from(ventureUrl, gamestate);
}

sync();
