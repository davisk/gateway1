var venturename = prompt("name your venture", "enter name here");
console.log(venturename);

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
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    gap: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    interest: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    survey: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    }
};

var db = new PouchDB('dbname');

db.put(gamestate);

db.changes({
    onChange: function() {
        console.log('Ch-Ch-Changes');
    }
});

function sync() {
  db.replicate.to('localhost:9000/database/' + venturename, gamestate);
  db.replicate.from('localhost:9000/database/' + venturename, gamestate);
}

db.replicate.to('localhost:9000/database/' + venturename, gamestate);
