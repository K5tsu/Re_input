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
                    stats = { Atk: 5, Def: 4, Trk: 5, DC: 5, EXP:0 , LVL:1,G: 5 };
                } else if (ability === "2") {
                    stats = { Atk: 2, Def: 4, Trk: 8, DC: 5, EXP:0, LVL:1,G: 5 };
                } else if (ability === "3") {
                    stats = { Atk: 2, Def: 7, Trk: 5, DC: 5, EXP:0, LVL:1,G: 5 };
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


let weapons = {
    5: "Knucklebuster",
    1: "School Tie",
    5: "Knife",
    10: "Metal Bat",
    8: "Metal Chain",
    4: "Wooden Katana"
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

let recipes = {
    Godslayer : "Katana + Chain + Reckless Animosity"
}

function battleSeq() {
    console.log("You've encountered ..."); //<----->insert enemy
    console.log("You can only leave if you beat em :D.");
    abattleSeq();
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
    else if (randAbility <= 1) {
        console.log("You got coin flip!")
        //add a mechanic for 50/50 oneshots
    }
    else if (randAbility <= 10) {
        console.log("you got Sureshot!")
        //add a mechanic for not missing
    }
    else if (randAbility <= 50) {
        console.log("you got meat sac!")
        stats.Def += 10
    }
    else if (randAbility <= 90) {
        console.log("you got tryer!")
        stats.Atk += 5
        stats.Def += 5
        stats.Trk += 5
    }

}
function mobs1() {
    const alleyMobs = ["Yakuza", "Fixer", "Addict", "Deliquent"];
    const index = Math.floor(Math.random() * alleyMobs.length);
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
                                console.log("• Gambler\n• Armsmith\n• Pharmacist");
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
                                                }
                                            }
                                        });
                                    }
                                    //make a way of equipping cus rn bro just takes your money...
                                    if (input === "Armsmith" || input === "armsmith") { 
                                        console.log("Welcome to the destruction extraordinaire!");
                                        setTimeout(function () { 
                                            rl.question("Wanna see the rates?(y/n) ", (ans1) => {
                                                if (ans1 === "y") {
                                                    console.log(weapons);
                                                    rl.on('line', (input) => {
                                                        if (input === "School Tie" || "school tie") {
                                                            if (stats.G >= 1) {
                                                                stats.G -= 1;
                                                                console.log("Pleasure doing business!")
                                                            }
                                                            else {
                                                                console.log("Make your own weapons!")
                                                            }
                                                        }
                                                        else if (input === "Wooden Katana" || "wooden katana") {
                                                            if (stats.G >= 4) {
                                                                stats.G -= 4;
                                                                console.log("Pleasure doing business!")
                                                            }
                                                            else {
                                                                console.log("Make your own weapons!")
                                                            }
                                                        }
                                                        else if (input === "Knife" || "knife") {
                                                            if (stats.G >= 5) {
                                                                stats.G -= 5;
                                                                console.log("Pleasure doing business!")
                                                            }
                                                            else {
                                                                console.log("Make your own weapons!")
                                                            }
                                                        }
                                                        else if (input === "Metal Chain" || "metal chain") {
                                                            if (stats.G >= 8) {
                                                                stats.G -= 8;
                                                                console.log("Pleasure doing business!")
                                                            }
                                                            else {
                                                                console.log("Make your own weapons!")
                                                            }
                                                        }
                                                        else if (input === "Metal Bat" || "metal bat") {
                                                            if (stats.G >= 10) {
                                                                stats.G -= 10;
                                                                console.log("Pleasure doing business!")
                                                            }
                                                            else {
                                                                console.log("Make your own weapons!")
                                                            }
                                                        }
                                                        else {
                                                            console.log("I dont know that one buddy...")
                                                        }
                                                    })
                                                }
                                                else if (ans1 === "n") { 
                                                    rl.question("wanna do some crafting?(y/n) ", (ans2) => { 
                                                        if (ans2 === "y") {
                                                            console.log("Here's what you can make:")
                                                            console.log(recipes)
                                                        }
                                                    })
                                                }
                                            })
                                        }, 1000);
                                    }
                                });
                            }
                            //enemy encounter wip
                            else if (choice === 2) {
                                let enChance = Math.random();
                                (function () {
                                    enChance
                                    if (enChance <= 0) {
                                        console.log(`you have encountered a ${alleyMobs[index]}!`)
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
