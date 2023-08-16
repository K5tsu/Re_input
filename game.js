const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Hello Grunt");
console.log("You Pissed of a couple hundred gangs and you're screwed");
console.log("I, your cool savior, am gonna give you the power to fight back because yes");

let stats = {};

(function () {
    rl.question("What's your name buddy? ", (characterName), (characterLName) => {
        console.log(`Good luck ${characterName} ${characterLName}, I believe in you!`);
        setTimeout(function () {
            console.log("Now to the basics");
        }, 1000);
        setTimeout(function () {
            console.log("Press # to choose your ability and progress.");
        }, 1000);
        setTimeout(function () {
            console.log("Press / to see current directories.");
        }, 1000);
        setTimeout(function () {
            console.log("Press + to access directories.");
        }, 1000);
        setTimeout(function () {
            console.log("Press i to see your stats");
        }, 1000);
        setTimeout(function () {
            console.log("1 is for replication which gives +3 ATK, 2 is for Daemon which gives +3 TRK, and 3 is for complexity which gives +3 DEF.");
        }, 1000);
    });
})();

rl.on('line', (input) => {
    switch (input) {
        case '#':
            rl.question("Choose your starter ability (you can obtain more later). ", (ability) => {
                if (ability === "1") {
                    stats = { Atk: 5, Def: 4, Trk: 5 };
                } else if (ability === "2") {
                    stats = { Atk: 2, Def: 4, Trk: 8 };
                } else if (ability === "3") {
                    stats = { Atk: 2, Def: 7, Trk: 5 };
                }
                rl.on('line', (input) => {
                    if (input === 'i') {
                        console.log(stats);
                        setTimeout(function () {
                            console.log("Atk and Def are self-explanatory, but Trk decides your ability storage and how well you hide from antiviruses.");
                        }, 1000);
                    }
                });
            });
            break;
    }
});

let dirs = {
    1: 'Home',
    2: 'Root',
    3: 'Lib'
};

rl.on('line', (input) => {
    if (input === '/') {
        rl.question("Would you like to see the directories you have access to? (y/n) ", (ans) => {
            if (ans === 'y' || ans === 'yes') {
                console.log("The dirs you currently have access to:");
                console.log(dirs);

                rl.on('line', (input) => {
                    if (input === '+') {
                        rl.question("Which one would you like to explore? ", (q) => {
                            let curdir = dirs[q];
                            if (curdir) {
                                console.log(`You are currently in ${curdir}`);
                            } else {
                                console.log("This directory doesn't exist");
                            }
                        });
                    }
                });
            }
        });
    }
});