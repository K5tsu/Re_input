const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Hello Grunt");
console.log("You Pissed off a couple hundred gangs and you're screwed");
console.log("I, your cool savior, am gonna give you the power to fight back because yes");

let stats = {};
let abilities = {};

(async function () {
    const characterName = await new Promise((resolve) => {
        rl.question("What's your first name buddy? ", resolve);
    });

    const characterLName = await new Promise((resolve) => {
        rl.question("What's your last name buddy? ", resolve);
    });

    console.log(`Good luck ${characterName} ${characterLName}, I believe in you!`);
    setTimeout(function () {
        console.log("Now to the basics");
    }, 1000);
    setTimeout(function () {
        console.log("Press # to choose your ability and progress.");
    }, 1000);
    setTimeout(function () {
        console.log("Press / to see current Locations.");
    }, 1000);
    setTimeout(function () {
        console.log("Press + to access Locations.");
    }, 1000);
    setTimeout(function () {
        console.log("Press i to see your stats");
    }, 1000);
    setTimeout(function () {
        console.log("1 is for Drive which gives +3 ATK, 2 is for Addict which gives +3 TRK, and 3 is for Bear which gives +3 DEF.");
    }, 1000);
})();

rl.on('line', (input) => {
    switch (input) {
        case '#':
            rl.question("Choose your starter ability (you can obtain more later). ", (ability) => {
                if (ability === "1") {
                    stats = { Atk: 5, Def: 4, Trk: 5, DC: 5, G: 5 };
                } else if (ability === "2") {
                    stats = { Atk: 2, Def: 4, Trk: 8, DC: 5, G: 5 };
                } else if (ability === "3") {
                    stats = { Atk: 2, Def: 7, Trk: 5, DC: 5, G: 5 };
                }
                rl.on('line', (input) => {
                    if (input === 'i') {
                        console.log(stats);
                        setTimeout(function () {
                            console.log("Atk and Def are self-explanatory, but Trk decides your ability storage and how well you can flip off RNG.");
                        }, 1000);
                    }
                });
            });
            break;
    }
});

let dirs = {
    1: 'Market',
    2: 'Alley',
    3: 'Downtown'
};

let rates = {
    0.001: "Total Violence",
    0.01: "Pressure",
    0.1: "Flesh control",
    0.1: "Game addict",
    1: "Coin flip",
    10: "Sureshot",
    50: "Meat sac",
    90: "Tryer"
}

function Gamble() {
    let randAbility = Math.random();

    if (randAbility <= 0.001) {
        console.log("You got Total Violence!")
        stats.Atk = 999;
        stats.Def = 999;
        stats.Trk = 999;
        abilities = { 1: "Total violence" };
    }
    else if (randAbility <= 0.01) {
        console.log("You got Pressure!")
        stats.Atk = 999;
        abilities = { 1: "Pressure" };
    }
    else if (randAbility <= 0.1) {
        let randChance = Math.random();
        if (randChance <= 0.5) {
            console.log("You got Flesh Control!");
            stats.Def = 999;
        }
        else {
            console.log("You got Game Addict!");
            stats.DC = 999;
        }
    }
}

rl.on('line', (input) => {
    if (input === '/') {
        rl.question("Would you like to see the locations you have access to? (y/n) ", (ans) => {
            if (ans === 'y' || ans === 'yes') {
                console.log("The dirs you currently have access to:");
                console.log(dirs);

                rl.on('line', (input) => {
                    if (input === '+') {
                        rl.question("Which one would you like to explore? ", (q) => {
                            let choice = parseInt(q);
                            let curdir = dirs[choice];
                            if (curdir) {
                                console.log(`You are currently in ${curdir}`);
                            } else {
                                console.log("This place doesn't exist");
                            }
                            if (choice === 1){
                                console.log("Vendors of the market:");
                                console.log("choose your vendor:")
                                console.log("Gambler", "Armsmith", "Pharmacist");
                                rl.on('line', (input) => {
                                    if (input === "Gambler" || input === "gambler") {
                                        console.log("Hey there kiddo, wanna try your luck?");
                                        console.log(rates);
                                        rl.question("wanna have a go? ", (ans) => {
                                            if (ans === "y") {
                                                if (stats.G >= 5) {
                                                stats.G -= 5;
                                                    Gamble(); //you need to finish that buddy :)
                                                }
                                                else {
                                                    console.log("you aint got enough buddy")
                                                    return stats.G
                                                    rl.close();
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                            //enemy encounter wip
                            else if (choice === 2) {
                                let enChance = math.random();
                                (function () {
                                    enChance
                                    if (enChance <= 40) {
                                        console.log("you have encountered a low level yakuza!")
                                        rl.question("will you brave this threat?");
                                        if (input == 'y' && 'yes') {

                                        } 
                                  }  
                                })
                            }
                        });
                    }
                });
            }
        });
    }
});
