$('.resultat-perdant').hide();
$('.resultat-gagnant').hide();
$('.resultat-egalite').hide();
$('#refresh').hide(); 

//bouton rejouer
$('#refresh').on('click', function() {
  location.reload();
});

//bouton pierre
$('.bouton-pierre').on('click', function(){
let userInput = 'pierre';

var randomNumber = Math.floor(Math.random()*3);
function getComputerChoice() {
    if(randomNumber == 0){
    return 'pierre';
  } else if (randomNumber == 1){
    return 'feuille';
  } else {
    return 'ciseaux';
  }
}

function determineWinner(userChoice, computerChoice) {
  userChoice == 'pierre';
    if(computerChoice == 'feuille'){
      return $('.bouton-ordi-feuille').fadeIn(400) + $('.resultat-perdant').fadeIn(100) 
      + $('.bouton-feuille').hide() + $('.bouton-ciseaux').hide() + $('.welcome-mess').hide()
      + $('.user-choix-txt').text("Tu as choisi :") + $('.ordi-choix-txt').text("La Pandacademy a choisi :") 
      + $('.bouton-ordi-pierre').hide() + $('.bouton-ordi-ciseaux').hide()
      + $('.ordi-choix-txt').fadeIn(200) + $('#refresh').fadeIn(200); 
    } else if (computerChoice == 'ciseaux'){
      return $('.bouton-ordi-ciseaux').fadeIn(400) + $('.resultat-gagnant').fadeIn(100)
      + $('.bouton-feuille').hide() + $('.bouton-ciseaux').hide() + $('.welcome-mess').hide()
      + $('.user-choix-txt').text("Tu as choisi :") + $('.ordi-choix-txt').text("La Pandacademy a choisi :") 
      + $('.bouton-ordi-feuille').hide() + $('.bouton-ordi-pierre').hide()
      + $('.ordi-choix-txt').fadeIn(200) + $('#refresh').fadeIn(200); 
    } else {
      return $('.bouton-ordi-pierre').fadeIn(400) + $('.resultat-egalite').fadeIn(100)
      + $('.bouton-feuille').hide() + $('.bouton-ciseaux').hide() + $('.welcome-mess').hide()
      + $('.user-choix-txt').text("Tu as choisi :") + $('.ordi-choix-txt').text("La Pandacademy a choisi :") 
      + $('.bouton-ordi-feuille').hide() + $('.bouton-ordi-ciseaux').hide()
      + $('.ordi-choix-txt').fadeIn(200) + $('#refresh').fadeIn(200); 
    }
}

function playGame(userChoice, computerChoice){
  userChoice = userInput;
  computerChoice = getComputerChoice();
  return determineWinner(userChoice, computerChoice);
}
return getComputerChoice() + playGame();
})

//bouton feuille
$('.bouton-feuille').on('click', function(){
  let userInput = 'feuille';

  var randomNumber = Math.floor(Math.random()*3);
function getComputerChoice() {
    if(randomNumber == 0){
    return 'pierre';
  } else if (randomNumber == 1){
    return 'feuille';
  } else {
    return 'ciseaux';
  }
}

function determineWinner(userChoice, computerChoice) {
  userChoice == 'feuille';
    if(computerChoice == 'ciseaux'){
      return $('.bouton-ordi-ciseaux').fadeIn(1000) + $('.resultat-perdant').fadeIn(100)
      + $('.bouton-pierre').hide() + $('.bouton-ciseaux').hide() + $('.welcome-mess').hide()
      + $('.user-choix-txt').text("Tu as choisi :") + $('.ordi-choix-txt').text("La Pandacademy a choisi :") 
      + $('.bouton-ordi-feuille').hide() + $('.bouton-ordi-pierre').hide()
      + $('.ordi-choix-txt').fadeIn(200) + $('#refresh').fadeIn(200); 
    } else if(computerChoice == 'pierre') {
      return $('.bouton-ordi-pierre').fadeIn(1000) + $('.resultat-gagnant').fadeIn(100)
      + $('.bouton-pierre').hide() + $('.bouton-ciseaux').hide() + $('.welcome-mess').hide()
      + $('.user-choix-txt').text("Tu as choisi :") + $('.ordi-choix-txt').text("La Pandacademy a choisi :") 
      + $('.bouton-ordi-feuille').hide() + $('.bouton-ordi-ciseaux').hide()
      + $('.ordi-choix-txt').fadeIn(200) + $('#refresh').fadeIn(200); 
    } else {
      return $('.bouton-ordi-feuille').fadeIn(1000) + $('.resultat-egalite').fadeIn(100)
      + $('.bouton-pierre').hide() + $('.bouton-ciseaux').hide() + $('.welcome-mess').hide()
      + $('.user-choix-txt').text("Tu as choisi :") + $('.ordi-choix-txt').text("La Pandacademy a choisi :") 
      + $('.bouton-ordi-pierre').hide() + $('.bouton-ordi-ciseaux').hide()
      + $('.ordi-choix-txt').fadeIn(200) + $('#refresh').fadeIn(200); 
    }
}

function playGame(userChoice, computerChoice){
  var userChoice = userInput;
  var computerChoice = getComputerChoice();
  return determineWinner(userChoice, computerChoice);
}
return getComputerChoice() + playGame();
})

//bouton ciseaux
$('.bouton-ciseaux').on('click', function(){
  let userInput = 'ciseaux';
  userInput = userInput.toLowerCase();

  var randomNumber = Math.floor(Math.random()*3);
function getComputerChoice() {
    if(randomNumber == 0){
    return 'pierre';
  } else if (randomNumber == 1){
    return 'feuille';
  } else {
    return 'ciseaux';
  }
}

function determineWinner(userChoice, computerChoice) {
  userChoice == 'ciseaux';
    if(computerChoice == 'pierre'){
      return $('.bouton-ordi-pierre').fadeIn(1000) + $('.resultat-perdant').fadeIn(100)
      + $('.bouton-pierre').hide() + $('.bouton-feuille').hide() + $('.welcome-mess').hide()
      + $('.user-choix-txt').text("Tu as choisi :") + $('.ordi-choix-txt').text("La Pandacademy a choisi :") 
      + $('.bouton-ordi-feuille').hide() + $('.bouton-ordi-ciseaux').hide()
      + $('.ordi-choix-txt').fadeIn(200) + $('#refresh').fadeIn(200); 
    } else if (computerChoice == 'feuille'){
      return $('.bouton-ordi-feuille').fadeIn(1000) + $('.resultat-gagnant').fadeIn(100)
      + $('.bouton-pierre').hide() + $('.bouton-feuille').hide() + $('.welcome-mess').hide()
      + $('.user-choix-txt').text("Tu as choisi :") + $('.ordi-choix-txt').text("La Pandacademy a choisi :") 
      + $('.bouton-ordi-pierre').hide() + $('.bouton-ordi-ciseaux').hide()
      + $('.ordi-choix-txt').fadeIn(200) + $('#refresh').fadeIn(200); 
    } else {
      return $('.bouton-ordi-ciseaux').fadeIn(1000) + $('.resultat-egalite').fadeIn(100)
      + $('.bouton-pierre').hide() + $('.bouton-feuille').hide() + $('.welcome-mess').hide()
      + $('.user-choix-txt').text("Tu as choisi :") + $('.ordi-choix-txt').text("La Pandacademy a choisi :") 
      + $('.bouton-ordi-feuille').hide() + $('.bouton-ordi-pierre').hide()
      + $('.ordi-choix-txt').fadeIn(200) + $('#refresh').fadeIn(200); 
    }
}

function playGame(userChoice, computerChoice){
  var userChoice = userInput;
  var computerChoice = getComputerChoice();
  return determineWinner(userChoice, computerChoice);
}
return getComputerChoice() + playGame();
})
