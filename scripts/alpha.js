const playBtn = getId("play-btn");
const life = getId("life");
const score = getId("score");
function getId (id) {
      return document.getElementById(id)
}
function show_hidden () {
      const homeGround = getId("home");
      homeGround.classList.add("hidden");
      const playGround = getId("playGround");
      playGround.classList.remove("hidden")
      playGeme()
}
playBtn.addEventListener("click",show_hidden);
// Random Alphabet Generator
function randomAlphabet () {
     const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
     const randomIndex = Math.floor(Math.random () * 25); 
     changeKbdBgColor(alphabet[randomIndex])
     return alphabet[randomIndex];
}
// Game start Function 
function playGeme () {
      const alphabet = randomAlphabet()
      const showAlpabet = getId("showAlphabet");
      showAlpabet.innerHTML = alphabet.toUpperCase();
}
function changeKbdBgColor (id) {
      const kbdElement = getId(id);
      kbdElement.classList.add("bg-blue-500");
}
function removeKbdBgColor (id) {
      const removedElement = getId(id);
      removedElement.classList.remove("bg-blue-500")
}

// Keypress event 
function handleKeyPress (event,) {
      const tragetAlpabet = getId("showAlphabet").innerHTML.toLowerCase();
      const playerKeyPressed = event.key;
      if (playerKeyPressed === tragetAlpabet) {
            const prevusScore = parseInt(score.innerText);
            const currentScore = prevusScore + 1;
            score.innerText = currentScore;  
            
            removeKbdBgColor(playerKeyPressed)
            playGeme();
      }else {
            const prevusLife = parseInt(life.innerText);
            const currentLife = prevusLife - 1;
            if (currentLife < 0) {
                  life.innerText = "You can't play"
            }
            else {
                  life.innerText = currentLife;
            }
      }
}
document.addEventListener('keyup',handleKeyPress)