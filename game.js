console.log("Hello Mortal")
console.log("You are stuck in a computer with no way to get out")
console.log("I, your cool savior is gonna give you a cool power cus yes")
let stats = {}
(function () {
            const characterName = prompt("What's your name buddy?");
            console.log(`Good luck ${characterName}.exe, I believe in you!`);
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
            window.addEventListener('keydown', function (e) {
                switch (e.key) {
                    case '#':
                        const ability = prompt("Choose your starter ability (you can obtain more later).");
                        if (ability === "1") {
                            stats = { Atk: 5, Def: 4, Trk: 5 };
                        } else if (ability === "2") {
                            stats = { Atk: 2, Def: 4, Trk: 8 };
                        } else if (ability === "3") {
                            stats = { Atk: 2, Def: 7, Trk: 5 };
                        }
                        window.addEventListener('keydown', function (e) {
                            switch (e.key) {
                                case 'i':
                                    console.log(stats);
                                    setTimeout(function () {
                                        console.log("Atk and Def are self-explanatory, but Trk decides your ability storage and how well you hide from antiviruses.");
                                    }, 1000);
                            }
                        });
                }
            })
}());
let dirs = {
    1: 'Home',
    2: 'Root',
    3: 'Lib'
};
window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case '.':
            const ans = prompt("would you like to see the directories you have access to?")
            if (ans == 'y' && 'yes') {
                console.log("the dirs you currently have access to:")
                console.log(dirs)
                window.addEventListener('keydown', function (e) { 
                    switch (e.key) {
                        case '+':
                let q = prompt("which one would you like to explore?")
                if (q == 1) {
                console.log(`You are currently in ${dirs['1']}`)
                }
                else if (q == 2) {
                    console.log(`You are currently in ${dirs['2']}`)
                }
                else if (q == 3) {
                    console.log(`You are currently in ${dirs['3']}`)
                }
                else {
                    console.log(`this directory doesnt exist`)
                }
                let curdir = (q)
                    }
                });
                
            }
 }
});