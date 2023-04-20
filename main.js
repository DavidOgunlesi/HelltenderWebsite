unseenCharacters = [];
maxCharacters = 9;


function createCharacter(element){
    if (element) {
        element.remove();
    }

    if (unseenCharacters.length === 0){
        for (let i = 0; i < maxCharacters; i++) {
            unseenCharacters.push(i);
        }        
    }

    var characterIdx = Math.floor(Math.random() * unseenCharacters.length);
    var i = unseenCharacters[characterIdx];
    unseenCharacters.splice(characterIdx, 1);
    console.log(unseenCharacters);

    // create the image element
    const targetEl = document.querySelector(".top-bar-graphic");
    const img = document.createElement('img');
    img.classList.add('character');
    img.src = `images/characters/${i+1}.png`;
    targetEl.appendChild(img);

    // generate a random slowdown point between 40% and 60%
    const slowdownPoint = 20 + Math.random() * 60;

    // apply the animation with the random slowdown point
    img.style.animation = `move-left-to-right 14s ease-in-out`;
    img.style.animationDelay = `${Math.random() * 2}s`;
    img.style.animationIterationCount = 'forwards';
    img.style.animationPlayState = 'running';
    img.style.willChange = 'transform, left';
    img.addEventListener("webkitAnimationEnd", () => createCharacter(img), false);

    const keyframes = `
    @keyframes move-left-to-right {
        0% {
        left: -500px;
        }
        45% {
        left: ${slowdownPoint - 5}%;
        }
        55% {
        left: ${slowdownPoint + 5}%;
        }
        100% {
        left: 140%;
        }
    }
    `;

    const style = document.createElement('style');
    style.appendChild(document.createTextNode(keyframes));
    document.head.appendChild(style);

    
}
createCharacter(undefined);

function logoFall() {
    var element = document.getElementById('logo');
    element.classList.add('hinge');
}
// var element = document.getElementById('logo');
// element.addEventListener('click', () => element.style.classList.add('hinge')); 

