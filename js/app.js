let cardMatches = [];
let initialCards = [];
let finalCards =[];

document.getElementsByClassName("container")[0].addEventListener("click", function(e){
  //checks to see if a card is clicked
  if(e.target.parentElement.classList.contains("card")
      //checks that the card isn't already flipped
      && !e.target.parentElement.classList.contains("flip")
      //prevents another card from being clicked if theres 2 being matched
      && cardMatches.length < 2){
    const card = e.target.parentElement;

    card.classList.toggle("flip");
    cardMatches.push(card);
    checkForMatch(cardMatches);
  }
});

function checkForMatch(cards){
  //only called when 2 cards have been clicked
  if(cardMatches.length >=2){
    //doesn't check to see if the cards match until the flip animation is over
    setTimeout(function(){
      if(cards[0].dataset.number==cards[1].dataset.number){
      cards[0].children[1].classList.toggle("correct");
      cards[1].children[1].classList.toggle("correct");
      //slow the match message a bit for better timing with correct color change
      setTimeout(function(){alert("they matched");},500);
    } else{
      cards[0].children[1].classList.toggle("incorrect");
      cards[1].children[1].classList.toggle("incorrect");
      //slow the match message a bit for better timing with correct color change
      setTimeout(function(){
      cards[0].classList.toggle("flip");
      cards[1].classList.toggle("flip");
      alert("they didnt match");
      cards[0].children[1].classList.toggle("incorrect");
      cards[1].children[1].classList.toggle("incorrect");},500);
    }
    cardMatches = [];
  },1000);
  }
}
