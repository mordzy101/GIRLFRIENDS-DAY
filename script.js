// =====================================
// ELEMENTS
// =====================================

const hero = document.querySelector(".hero");
const letter = document.querySelector(".letter");
const success = document.querySelector(".success");

const begin = document.getElementById("begin");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

const typing = document.querySelector(".typing");
const response = document.getElementById("response");
const music = document.getElementById("music");

// =====================================
// TYPING MESSAGE
// =====================================

const message =
"Hey Abigail 🌷 I made this little website just for you. Happy Girlfriend's Day ❤️ I hope this puts the biggest smile on your face because you deserve all the happiness in the world.";

let index = 0;

function typeWriter(){

    if(index < message.length){

        typing.textContent += message.charAt(index);

        index++;

        setTimeout(typeWriter,45);

    }

}

typeWriter();

// =====================================
// OPEN LETTER
// =====================================

begin.addEventListener("click",()=>{

    // Fade hero out
    hero.style.transition="opacity .6s";

    hero.style.opacity="0";

    setTimeout(()=>{

        hero.classList.add("hidden");

        letter.classList.remove("hidden");

        letter.style.opacity="0";

        letter.style.transition="opacity .8s";

        requestAnimationFrame(()=>{

            letter.style.opacity="1";

        });

        // Start music
        music.play().catch(()=>{});

        // Scroll smoothly
        letter.scrollIntoView({
            behavior:"smooth"
        });

    },600);

});

// =====================================
// LITTLE FLOATING HEARTS
// =====================================

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
        (15+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },5000);

},700);

// =====================================
// PAGE TITLE ANIMATION
// =====================================

const titles=[
"Happy Girlfriend's Day ❤️",
"For Abigail ❤️",
"I Love You ❤️"
];

let titleIndex=0;

setInterval(()=>{

    document.title=titles[titleIndex];

    titleIndex++;

    if(titleIndex>=titles.length){

        titleIndex=0;

    }

},2500);

// =====================================
// PREVENT RIGHT CLICK (OPTIONAL)
// =====================================

// Uncomment if you want to disable right-click

/*
document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
});
*/

// =====================================
// END OF PART 1
// =====================================
// =====================================
// NO BUTTON + YES BUTTON
// =====================================

// Funny responses
const replies = [

    "Nice try 😂",

    "Nope 😭",

    "Wrong answer 🤨",

    "Try pressing YES ❤️",

    "You can't escape my love 🌷",

    "Absolutely not 😤",

    "I'm faster than you 😎",

    "Come onnn 😭❤️",

    "Be serious 😂",

    "The YES button is looking lonely ❤️"

];

// YES button gets bigger
let yesScale = 1;

// Move the NO button
function moveNoButton(){

    const maxX = Math.max(0, window.innerWidth - no.offsetWidth - 20);

    const maxY = Math.max(0, window.innerHeight - no.offsetHeight - 20);

    const randomX = Math.random() * maxX;

    const randomY = Math.random() * maxY;

    no.style.position = "fixed";

    no.style.left = randomX + "px";

    no.style.top = randomY + "px";

    // Funny message
    response.textContent =
        replies[Math.floor(Math.random()*replies.length)];

    // Grow YES button
    yesScale += 0.08;

    yes.style.transform = `scale(${yesScale})`;

}

// Desktop
no.addEventListener("mouseover",moveNoButton);

// Mobile
no.addEventListener("click",moveNoButton);

// =====================================
// YES BUTTON
// =====================================

let celebrationStarted = false;

yes.addEventListener("click",()=>{

    if(celebrationStarted) return;

    celebrationStarted = true;

    // Fade out letter
    letter.style.transition = "opacity .7s";

    letter.style.opacity = "0";

    setTimeout(()=>{

        letter.classList.add("hidden");

        success.classList.remove("hidden");

        success.style.opacity = "0";

        success.style.transition = "opacity .8s";

        requestAnimationFrame(()=>{

            success.style.opacity = "1";

        });

        success.scrollIntoView({

            behavior:"smooth"

        });

        createConfetti();

        rainHearts();

    },700);

});

// =====================================
// LITTLE POP EFFECT
// =====================================

yes.addEventListener("mousedown",()=>{

    yes.style.transform=`scale(${yesScale + .15})`;

});

yes.addEventListener("mouseup",()=>{

    yes.style.transform=`scale(${yesScale})`;

});

// =====================================
// BUTTON GLOW
// =====================================

setInterval(()=>{

    yes.style.boxShadow=
    `0 0 ${20+Math.random()*15}px rgba(255,143,177,.55)`;

},600);

// =====================================
// END OF PART 2
// =====================================
// =====================================
// HEART RAIN
// =====================================

let heartRainStarted = false;

function rainHearts(){

    if(heartRainStarted) return;

    heartRainStarted = true;

    setInterval(()=>{

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = ["❤️","💖","💕","💗","💞"][Math.floor(Math.random()*5)];

        heart.style.left = Math.random()*100 + "vw";

        heart.style.fontSize = (20 + Math.random()*20) + "px";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },5000);

    },250);

}

// =====================================
// CONFETTI
// =====================================

function createConfetti(){

    const colors = [

        "#ff8fb1",
        "#ffc9de",
        "#ffe77a",
        "#b7f5d4",
        "#ffffff",
        "#ffd6a5"

    ];

    for(let i=0;i<300;i++){

        const piece = document.createElement("div");

        piece.style.position = "fixed";

        piece.style.width = "10px";

        piece.style.height = "10px";

        piece.style.borderRadius = "50%";

        piece.style.left = Math.random()*100 + "vw";

        piece.style.top = "-20px";

        piece.style.pointerEvents = "none";

        piece.style.zIndex = "9999";

        piece.style.background =
        colors[Math.floor(Math.random()*colors.length)];

        document.body.appendChild(piece);

        const duration = 4000 + Math.random()*3000;

        piece.animate(

            [

                {

                    transform:"translateY(0) rotate(0deg)",

                    opacity:1

                },

                {

                    transform:`translateY(${window.innerHeight+100}px) rotate(720deg)`,

                    opacity:0.8

                }

            ],

            {

                duration:duration,

                easing:"linear",

                iterations:1

            }

        );

        setTimeout(()=>{

            piece.remove();

        },duration);

    }

}

// =====================================
// FINAL SURPRISE MESSAGE
// =====================================

function finalMessage(){

    const message = document.createElement("div");

    message.innerHTML = `

        <h2 style="font-family:Parisienne,cursive;
                   color:#ff8fb1;
                   font-size:3rem;
                   margin-bottom:20px;">

            One More Thing... ❤️

        </h2>

        <p style="
            max-width:700px;
            margin:auto;
            line-height:2;
            font-size:18px;">

            Thank you for choosing me.

            Thank you for loving me.

            Thank you for making life so much brighter.

            I hope we keep making sweet memories together.

            I'm really happy this first month brought us closer.

            ❤️

        </p>

    `;

    message.style.marginTop = "60px";

    message.style.opacity = "0";

    message.style.transition = "1s";

    document.querySelector(".success").appendChild(message);

    setTimeout(()=>{

        message.style.opacity="1";

    },100);

}

// Show after Yes page has been open a while
yes.addEventListener("click",()=>{

    setTimeout(finalMessage,7000);

});

// =====================================
// EASTER EGG
// Press H
// =====================================

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()!=="h") return;

    for(let i=0;i<40;i++){

        const flower=document.createElement("div");

        flower.innerHTML="🌷";

        flower.style.position="fixed";

        flower.style.left=Math.random()*100+"vw";

        flower.style.top=Math.random()*100+"vh";

        flower.style.fontSize="35px";

        flower.style.pointerEvents="none";

        flower.style.zIndex="9999";

        document.body.appendChild(flower);

        flower.animate(

            [

                {transform:"scale(0)",opacity:0},

                {transform:"scale(1.4)",opacity:1},

                {transform:"scale(1)",opacity:0}

            ],

            {

                duration:2500,

                iterations:1

            }

        );

        setTimeout(()=>{

            flower.remove();

        },2500);

    }

});

// =====================================
// CONSOLE MESSAGE
// =====================================

console.log("%c❤️ Happy Girlfriend's Day ❤️",
"color:#ff4d88;font-size:24px;font-weight:bold;");

console.log("%cHey Abigail 🌷",
"color:#ff8fb1;font-size:18px;");

console.log("%cIf you're reading this...",
"color:#555;font-size:15px;");

console.log("%cYou're the most beautiful girl in the world ❤️",
"color:#ff4d88;font-size:18px;font-weight:bold;");

console.log("%cMade with love 💖",
"color:#ff8fb1;font-size:16px;");

// =====================================
// THE END ❤️
// =====================================
