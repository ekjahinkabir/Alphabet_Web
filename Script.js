/* =====================================================
   JAHIN'S ALPHABET WORLD
   PREMIUM JAVASCRIPT
===================================================== */


/* =====================================================
   ALPHABET DATA
===================================================== */

const alphabet = [

    {
        letter: "A",
        word: "Apple",
        bangla: "আপেল",
        emoji: "🍎"
    },

    {
        letter: "B",
        word: "Ball",
        bangla: "বল",
        emoji: "⚽"
    },

    {
        letter: "C",
        word: "Cat",
        bangla: "বিড়াল",
        emoji: "🐱"
    },

    {
        letter: "D",
        word: "Dog",
        bangla: "কুকুর",
        emoji: "🐶"
    },

    {
        letter: "E",
        word: "Elephant",
        bangla: "হাতি",
        emoji: "🐘"
    },

    {
        letter: "F",
        word: "Fish",
        bangla: "মাছ",
        emoji: "🐟"
    },

    {
        letter: "G",
        word: "Grapes",
        bangla: "আঙুর",
        emoji: "🍇"
    },

    {
        letter: "H",
        word: "House",
        bangla: "বাড়ি",
        emoji: "🏠"
    },

    {
        letter: "I",
        word: "Ice Cream",
        bangla: "আইসক্রিম",
        emoji: "🍦"
    },

    {
        letter: "J",
        word: "Juice",
        bangla: "জুস",
        emoji: "🧃"
    },

    {
        letter: "K",
        word: "Kite",
        bangla: "ঘুড়ি",
        emoji: "🪁"
    },

    {
        letter: "L",
        word: "Lion",
        bangla: "সিংহ",
        emoji: "🦁"
    },

    {
        letter: "M",
        word: "Monkey",
        bangla: "বানর",
        emoji: "🐵"
    },

    {
        letter: "N",
        word: "Nest",
        bangla: "পাখির বাসা",
        emoji: "🪺"
    },

    {
        letter: "O",
        word: "Orange",
        bangla: "কমলা",
        emoji: "🍊"
    },

    {
        letter: "P",
        word: "Penguin",
        bangla: "পেঙ্গুইন",
        emoji: "🐧"
    },

    {
        letter: "Q",
        word: "Queen",
        bangla: "রানী",
        emoji: "👑"
    },

    {
        letter: "R",
        word: "Rabbit",
        bangla: "খরগোশ",
        emoji: "🐰"
    },

    {
        letter: "S",
        word: "Sun",
        bangla: "সূর্য",
        emoji: "☀️"
    },

    {
        letter: "T",
        word: "Tiger",
        bangla: "বাঘ",
        emoji: "🐯"
    },

    {
        letter: "U",
        word: "Umbrella",
        bangla: "ছাতা",
        emoji: "☂️"
    },

    {
        letter: "V",
        word: "Van",
        bangla: "ভ্যান",
        emoji: "🚐"
    },

    {
        letter: "W",
        word: "Whale",
        bangla: "তিমি",
        emoji: "🐳"
    },

    {
        letter: "X",
        word: "Xylophone",
        bangla: "জাইলোফোন",
        emoji: "🎵"
    },

    {
        letter: "Y",
        word: "Yo-Yo",
        bangla: "ইয়ো-ইয়ো",
        emoji: "🪀"
    },

    {
        letter: "Z",
        word: "Zebra",
        bangla: "জেব্রা",
        emoji: "🦓"
    }

];


/* =====================================================
   GAME STATE
===================================================== */

let currentLetter = 0;

let currentLanguage = "en";

let stars =
    Number(
        localStorage.getItem("jahinStars")
    ) || 0;


let learned =
    JSON.parse(
        localStorage.getItem(
            "jahinLearned"
        )
    ) || [];


let selectedCharacter =
    localStorage.getItem(
        "jahinCharacter"
    ) || "Jahin";


/* =====================================================
   CHARACTERS
===================================================== */

const characters = [

    {
        name: "Jahin",
        emoji: "🧒",
        cost: 0
    },

    {
        name: "Mimi",
        emoji: "👧",
        cost: 50
    },

    {
        name: "Leo",
        emoji: "🦁",
        cost: 100
    },

    {
        name: "Bunny",
        emoji: "🐰",
        cost: 150
    },

    {
        name: "Panda",
        emoji: "🐼",
        cost: 250
    }

];


let unlockedCharacters =
    JSON.parse(
        localStorage.getItem(
            "jahinCharacters"
        )
    ) || ["Jahin"];


/* =====================================================
   SCREEN NAVIGATION
===================================================== */

function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove(
                "active"
            );

        });


    const screen =
        document.getElementById(screenId);


    if (screen) {

        screen.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    if (screenId === "characters") {

        renderCharacters();

    }


    if (screenId === "parent") {

        updateParentStats();

    }

}


/* =====================================================
   STARTUP
===================================================== */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            document
                .getElementById(
                    "loadingScreen"
                )
                .classList.add("hidden");


            document
                .getElementById("app")
                .classList.remove("hidden");


            updateStats();

            createAlphabetGrid();

            createCharacters();

            setupTracing();

        }, 1200);

    }
);


/* =====================================================
   STATS
===================================================== */

function getLevel() {

    return Math.floor(stars / 50) + 1;

}


function updateStats() {

    document
        .getElementById("starCount")
        .textContent = stars;


    document
        .getElementById("levelCount")
        .textContent =
        getLevel();

}


function saveProgress() {

    localStorage.setItem(
        "jahinStars",
        stars
    );


    localStorage.setItem(
        "jahinLearned",
        JSON.stringify(learned)
    );


    localStorage.setItem(
        "jahinCharacters",
        JSON.stringify(
            unlockedCharacters
        )
    );


    localStorage.setItem(
        "jahinCharacter",
        selectedCharacter
    );

}


function addStars(amount) {

    stars += amount;

    updateStats();

    saveProgress();

    showStarAnimation(
        `+${amount} ⭐`
    );

}


/* =====================================================
   STAR ANIMATION
===================================================== */

function showStarAnimation(text) {

    const element =
        document.createElement("div");


    element.textContent = text;


    element.style.position =
        "fixed";


    element.style.left =
        "50%";


    element.style.top =
        "25%";


    element.style.transform =
        "translate(-50%,-50%)";


    element.style.zIndex =
        "99999";


    element.style.fontSize =
        "40px";


    element.style.fontWeight =
        "bold";


    element.style.color =
        "#ffb700";


    element.style.pointerEvents =
        "none";


    document.body.appendChild(
        element
    );


    setTimeout(() => {

        element.style.transition =
            "1s";


        element.style.transform =
            "translate(-50%,-150%)";


        element.style.opacity =
            "0";

    }, 50);


    setTimeout(() => {

        element.remove();

    }, 1100);

}


/* =====================================================
   ALPHABET WORLD
===================================================== */

function createAlphabetGrid() {

    const grid =
        document.getElementById(
            "alphabetGrid"
        );


    grid.innerHTML = "";


    alphabet.forEach(
        (item, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "alphabet-button";


            button.textContent =
                item.letter;


            button.onclick =
                () => {

                    openLetter(index);

                };


            grid.appendChild(
                button
            );

        }
    );

}


function openLetter(index) {

    currentLetter = index;


    const item =
        alphabet[index];


    document
        .getElementById(
            "lessonLetter"
        )
        .textContent =
        item.letter;


    document
        .getElementById(
            "lessonEmoji"
        )
        .textContent =
        item.emoji;


    document
        .getElementById(
            "lessonWord"
        )
        .textContent =
        item.word;


    if (currentLanguage === "en") {

        document
            .getElementById(
                "lessonSentence"
            )
            .textContent =
            `${item.letter} is for ${item.word}`;

    } else {

        document
            .getElementById(
                "lessonSentence"
            )
            .textContent =
            `${item.letter} দিয়ে ${item.bangla}`;

    }


    document
        .getElementById(
            "letterLesson"
        )
        .classList.remove(
            "hidden"
        );


    if (!learned.includes(index)) {

        learned.push(index);

        addStars(5);

        saveProgress();

    }


    speakCurrentLetter();

}


function closeLesson() {

    document
        .getElementById(
            "letterLesson"
        )
        .classList.add(
            "hidden"
        );

}


/* =====================================================
   VOICE
===================================================== */

function speak(text) {

    if (
        !("speechSynthesis" in window)
    ) {

        return;

    }


    speechSynthesis.cancel();


    const voice =
        new SpeechSynthesisUtterance(
            text
        );


    voice.rate = .75;

    voice.pitch = 1.25;

    voice.volume = 1;


    speechSynthesis.speak(
        voice
    );

}


function speakCurrentLetter() {

    const item =
        alphabet[currentLetter];


    if (currentLanguage === "en") {

        speak(
            `${item.letter}. ${item.letter} is for ${item.word}.`
        );

    } else {

        speak(
            `${item.letter} দিয়ে ${item.bangla}`
        );

    }

}


/* =====================================================
   BALLOON POP GAME
===================================================== */

function startBalloonGame() {

    const area =
        document.getElementById(
            "gameArea"
        );


    const title =
        document.getElementById(
            "gameTitle"
        );


    const content =
        document.getElementById(
            "gameContent"
        );


    area.classList.remove(
        "hidden"
    );


    title.textContent =
        "🎈 Balloon Pop";


    const correct =
        alphabet[
            Math.floor(
                Math.random() *
                alphabet.length
            )
        ];


    content.innerHTML = `

        <h3>
            Pop the balloon with:
            <strong>${correct.letter}</strong>
        </h3>

        <div id="balloons"></div>

    `;


    const balloons =
        document.getElementById(
            "balloons"
        );


    let choices = [
        correct.letter
    ];


    while (choices.length < 6) {

        const random =
            alphabet[
                Math.floor(
                    Math.random() *
                    alphabet.length
                )
            ].letter;


        if (!choices.includes(random)) {

            choices.push(random);

        }

    }


    choices.sort(
        () => Math.random() - .5
    );


    choices.forEach(letter => {

        const balloon =
            document.createElement(
                "div"
            );


        balloon.className =
            "balloon";


        balloon.textContent =
            letter;


        balloon.onclick = () => {

            if (
                letter ===
                correct.letter
            ) {

                balloon.textContent =
                    "💥";


                addStars(10);

                speak(
                    "Amazing! Great job!"
                );


                setTimeout(
                    startBalloonGame,
                    700
                );

            } else {

                balloon.style.opacity =
                    ".3";


                speak(
                    "Try again!"
                );

            }

        };


        balloons.appendChild(
            balloon
        );

    });

}


/* =====================================================
   MATCHING GAME
===================================================== */

function startMatchingGame() {

    const area =
        document.getElementById(
            "gameArea"
        );


    const title =
        document.getElementById(
            "gameTitle"
        );


    const content =
        document.getElementById(
            "gameContent"
        );


    area.classList.remove(
        "hidden"
    );


    title.textContent =
        "🧩 Letter Match";


    const selected = [];


    while (selected.length < 3) {

        const index =
            Math.floor(
                Math.random() *
                alphabet.length
            );


        if (!selected.includes(index)) {

            selected.push(index);

        }

    }


    let cards = [];


    selected.forEach(index => {

        cards.push({
            type: "letter",
            value:
                alphabet[index].letter,
            pair: index
        });


        cards.push({
            type: "word",
            value:
                alphabet[index].emoji +
                " " +
                alphabet[index].word,
            pair: index
        });

    });


    cards.sort(
        () => Math.random() - .5
    );


    content.innerHTML = `

        <p>
            Match each letter with its word!
        </p>

        <div
            id="matchGrid"
            class="match-grid">
        </div>

    `;


    const grid =
        document.getElementById(
            "matchGrid"
        );


    let firstCard = null;

    let lock = false;

    let matched = 0;


    cards.forEach(card => {

        const button =
            document.createElement(
                "button"
            );


        button.className =
            "match-card";


        button.textContent =
            "❓";


        button.onclick = () => {

            if (
                lock ||
                button.dataset.done
            ) return;


            button.textContent =
                card.value;


            if (!firstCard) {

                firstCard = {
                    button,
                    card
                };


                return;

            }


            lock = true;


            if (
                firstCard.card.pair ===
                card.pair &&
                firstCard.card.type !==
                card.type
            ) {

                firstCard.button.style
                    .background =
                    "#a5f3c4";


                button.style
                    .background =
                    "#a5f3c4";


                firstCard.button.dataset.done =
                    "true";


                button.dataset.done =
                    "true";


                matched++;

                addStars(10);


                if (matched === 3) {

                    speak(
                        "Wonderful! You matched them all!"
                    );

                }


                firstCard = null;

                lock = false;

            } else {

                setTimeout(() => {

                    firstCard.button
                        .textContent =
                        "❓";


                    button.textContent =
                        "❓";


                    firstCard = null;

                    lock = false;

                }, 700);

            }

        };


        grid.appendChild(
            button
        );

    });

}


/* =====================================================
   CLOSE GAME
===================================================== */

function closeGame() {

    document
        .getElementById(
            "gameArea"
        )
        .classList.add(
            "hidden"
        );

}


/* =====================================================
   CHARACTERS
===================================================== */

function createCharacters() {

    renderCharacters();

}


function renderCharacters() {

    const grid =
        document.getElementById(
            "characterGrid"
        );


    grid.innerHTML = "";


    characters.forEach(character => {

        const card =
            document.createElement(
                "div"
            );


        const unlocked =
            unlockedCharacters
                .includes(
                    character.name
                );


        card.className =
            "character-card " +
            (unlocked
                ? ""
                : "locked");


        card.innerHTML = `

            <div class="avatar">
                ${character.emoji}
            </div>

            <h3>
                ${character.name}
            </h3>

            ${
                unlocked
                ? `
                    <p>Unlocked ✨</p>

                    <button>
                        ${
                            selectedCharacter ===
                            character.name
                            ? "✓ Selected"
                            : "Select"
                        }
                    </button>
                `
                : `
                    <p>
                        🔒 ${character.cost} ⭐
                    </p>

                    <button>
                        Unlock
                    </button>
                `
            }

        `;


        const button =
            card.querySelector(
                "button"
            );


        button.onclick = () => {

            if (unlocked) {

                selectedCharacter =
                    character.name;


                saveProgress();

                renderCharacters();

                speak(
                    `${character.name} selected!`
                );

            } else {

                unlockCharacter(
                    character
                );

            }

        };


        grid.appendChild(
            card
        );

    });

}


function unlockCharacter(character) {

    if (stars < character.cost) {

        speak(
            `You need ${character.cost} stars to unlock ${character.name}.`
        );


        alert(
            `You need ${character.cost} ⭐ to unlock ${character.name}.`
        );


        return;

    }


    stars -= character.cost;


    unlockedCharacters.push(
        character.name
    );


    saveProgress();

    updateStats();

    renderCharacters();


    speak(
        `${character.name} is unlocked!`
    );


    createCelebration();

}


/* =====================================================
   TRACING
===================================================== */

let canvas;

let ctx;

let drawing = false;

let traceCurrent = "A";


function setupTracing() {

    canvas =
        document.getElementById(
            "traceCanvas"
        );


    if (!canvas) return;


    resizeCanvas();


    window.addEventListener(
        "resize",
        resizeCanvas
    );


    canvas.addEventListener(
        "pointerdown",
        startDrawing
    );


    canvas.addEventListener(
        "pointermove",
        draw
    );


    canvas.addEventListener(
        "pointerup",
        stopDrawing
    );


    canvas.addEventListener(
        "pointerleave",
        stopDrawing
    );

}


function resizeCanvas() {

    if (!canvas) return;


    const rect =
        canvas.getBoundingClientRect();


    canvas.width =
        rect.width *
        window.devicePixelRatio;


    canvas.height =
        rect.height *
        window.devicePixelRatio;


    ctx =
        canvas.getContext("2d");


    ctx.scale(
        window.devicePixelRatio,
        window.devicePixelRatio
    );


    ctx.lineWidth = 8;

    ctx.lineCap = "round";

    ctx.lineJoin = "round";

}


function getPosition(event) {

    const rect =
        canvas.getBoundingClientRect();


    return {

        x:
            event.clientX -
            rect.left,

        y:
            event.clientY -
            rect.top

    };

}


function startDrawing(event) {

    drawing = true;


    const pos =
        getPosition(event);


    ctx.beginPath();

    ctx.moveTo(
        pos.x,
        pos.y
    );

}


function draw(event) {

    if (!drawing) return;


    const pos =
        getPosition(event);


    ctx.lineTo(
        pos.x,
        pos.y
    );


    ctx.stroke();

}


function stopDrawing() {

    drawing = false;

}


function clearCanvas() {

    if (!ctx) return;


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

}


function newTraceLetter() {

    const index =
        Math.floor(
            Math.random() *
            alphabet.length
        );


    traceCurrent =
        alphabet[index].letter;


    document
        .getElementById(
            "traceLetter"
        )
        .textContent =
        traceCurrent;


    clearCanvas();

}


function completeTrace() {

    addStars(10);

    speak(
        "Great tracing! You are doing amazing!"
    );


    createCelebration();

}


/* =====================================================
   CELEBRATION
===================================================== */

function createCelebration() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const item =
            document.createElement(
                "div"
            );


        item.textContent =
            [
                "⭐",
                "✨",
                "🎉",
                "🌟",
                "🎈"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];


        item.style.position =
            "fixed";


        item.style.left =
            Math.random() * 100 + "vw";


        item.style.top =
            "-30px";


        item.style.fontSize =
            "30px";


        item.style.zIndex =
            "99999";


        item.style.transition =
            "transform 1.5s, opacity 1.5s";


        document.body.appendChild(
            item
        );


        setTimeout(() => {

            item.style.transform =
                `translateY(110vh)
                 rotate(720deg)`;


            item.style.opacity =
                "0";

        }, 50);


        setTimeout(() => {

            item.remove();

        }, 1600);

    }

}


/* =====================================================
   PARENT AREA
===================================================== */

function openParentArea() {

    const password =
        prompt(
            "🔒 Parent Area\nEnter password:"
        );


    if (password === "1234") {

        showScreen("parent");

    } else {

        if (password !== null) {

            alert(
                "Incorrect password."
            );

        }

    }

}


function updateParentStats() {

    document
        .getElementById(
            "parentStars"
        )
        .textContent =
        stars;


    document
        .getElementById(
            "parentLevel"
        )
        .textContent =
        getLevel();


    document
        .getElementById(
            "learnedLetters"
        )
        .textContent =
        learned.length;

}


function resetProgress() {

    const answer =
        confirm(
            "Are you sure you want to reset all progress?"
        );


    if (!answer) return;


    stars = 0;

    learned = [];

    unlockedCharacters = [
        "Jahin"
    ];

    selectedCharacter =
        "Jahin";


    saveProgress();

    updateStats();

    updateParentStats();

    renderCharacters();


    alert(
        "Progress has been reset."
    );

}


/* =====================================================
   LANGUAGE
===================================================== */

/*
   Change language from browser console:

   setLanguage("bn")
   setLanguage("en")
*/


function setLanguage(language) {

    if (
        language !== "en" &&
        language !== "bn"
    ) return;


    currentLanguage =
        language;


    if (
        !document
            .getElementById(
                "letterLesson"
            )
            .classList.contains(
                "hidden"
            )
    ) {

        openLetter(
            currentLetter
        );

    }

}


/* =====================================================
   KEYBOARD SHORTCUTS
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "ArrowRight"
        ) {

            currentLetter++;

            if (
                currentLetter >=
                alphabet.length
            ) {

                currentLetter = 0;

            }


            openLetter(
                currentLetter
            );

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            currentLetter--;

            if (
                currentLetter < 0
            ) {

                currentLetter =
                    alphabet.length - 1;

            }


            openLetter(
                currentLetter
            );

        }

    }
);