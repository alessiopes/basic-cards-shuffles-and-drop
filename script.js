//? Sviluppare un programma per pescare 5 carte da un mazzo francese dopo averlo mischiato. Se si pesca il jolly, rimetterlo nel mazzo e pescarne un'altra.

let cards = [];
let randomCards = [];

/////////////////////////////////

function generateCards() {
  // create an array within numbers and suits
  const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const suits = ["spades", "hearts", "diamonds", "clubs"];

  // loop through cardValues and suits, pushing ORDERED cards into the cards array
  for (let i = 0; i < cardValues.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      cards.push({
        value: cardValues[i],
        suit: suits[j],
      });
    }
  }

  // add jolly to the cards array
  cards.push({
    value: "Jolly",
    suit: null,
  });

  console.log("Generating cards...");
  console.log(cards); // ordered cards array
}

/////////////////////////////////

function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  console.log("Shuffling cards...");
}

/////////////////////////////////

function dropRandomCards(qty) {
  console.log(`Dropping ${qty} random cards...`);

  for (let i = 0; i < qty; i++) {
    // generate random number as index to get a random card
    let randomIndex = Math.floor(Math.random() * cards.length);

    // push the random card into the randomCards array
    randomCards.push(cards[randomIndex]);

    // remove that card from the cards array
    cards.splice(randomIndex, 1);

    console.log(`${randomCards[i].value} of ${randomCards[i].suit}`); // random cards array
  }

  // if jolly is in the randomCards array, remove it and get another random card that is not in the randomCards array
  for (let i = 0; i < randomCards.length; i++) {
    if (randomCards[i].value === "Jolly") {
      console.log(
        "Ops! You dropped Jolly card! Removeing it and getting another random card..."
      );
      randomCards.splice(i, 1);

      // check same card is not in the randomCards array yet
      // while the random card is not in the randomCards array push the random card into the randomCards array

      let randomIndex = Math.floor(Math.random() * cards.length);
      randomCards.push(cards[randomIndex]);

      console.log(
        `Your new card is ${cards[randomIndex].value} of ${cards[randomIndex].suit}`
      );
      console.log(randomCards);
    }
  }
}

/////////////////////////////////

function showDeckCards() {
    console.log("Your deck:");
/*     for (let i = 0; i < cards.length; i++) {
      console.log(`${cards[i].value} of ${cards[i].suit}`);
    } */
    console.log(cards);
}

/////////////////////////////////

function showHandCards() {
    console.log("Your hand:");
    console.log(randomCards);
}

//////////////////////////////////

/* function showHandCards(randomCards) {
  console.log("Your hand:");
  console.log(randomCards);
  for (let i = 0; i < randomCards.length; i++) {
    console.log(`${randomCards[i].value} of ${randomCards[i].suit}`);
  }
} */

generateCards();

dropRandomCards(10); // set how many cards you want to drop

shuffleCards();

showDeckCards();

showHandCards();
