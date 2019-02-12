// Your code goes here
let play = true;
let userNumber = null;
let Round;
let Round2;
let WinPrize = 0;
let WinPrize2 = 0;
let MaxPrize = 10;
let MaxPrize2 = 30;
let MaxNumber = 5;
let MaxNumber2 = 10;
let maxPrize = MaxPrize;
let currentPrize = maxPrize;
let maxPrize2 = MaxPrize2;
let currentPrize2 = maxPrize2;
let randomNumber;
let maxRandomNumber = MaxNumber;
let maxRandomNumber2 = MaxNumber2;
let userWinned;

if (confirm('Do you want to play a game?')) {
  while (play) {
    randomNumber = Math.floor(Math.random() * maxRandomNumber);
    Round = 3;
    userWinned = false;
    for (let i = 0; i < 3; i++) {
      userNumber = prompt(
        `Enter a number from 0 to ${maxRandomNumber}
        Attempts left: ${Round}
        Total prize: ${WinPrize}$
        Possible prize on current attempt: ${currentPrize}$`
      );
      if (!userNumber) {
        break;
      }
      if (Number.parseFloat(userNumber) === randomNumber) {
        userWinned = true;
        WinPrize += currentPrize;
        play = confirm(`
          Congrftulation! Your prize is ${WinPrize}$.Do you want to continue?
        `);
        maxPrize *= 3;
        currentPrize = maxPrize;
        maxRandomNumber *= 2;
        break;
      }
      currentPrize = Math.floor(currentPrize / 2);
      Round--;
    }
    if (!userWinned) {
      play = alert(`Thank you for a game. Your prize is: ${WinPrize}$.`);
      play = confirm(`Do you want to play again?`)
      WinPrize = 0;
      maxPrize = MaxPrize;
      currentPrize = MaxPrize;
      maxRandomNumber = MaxNumber;
    }
    if (userWinned && !play) {
      play = confirm(`
		Thank you for a game. Your prize is: ${WinPrize}$. Do you want to play again?
	  `);
    }
  }
  for (let i = 0; i < 3; i++) {
    userNumber = prompt(
      `Enter a number from 0 to ${maxRandomNumber2}
    Attempts left: ${Round2}
    Total prize: ${WinPrize2}$
    Possible prize on current attempt: ${currentPrize2}$`
    );
    if (!userNumber) {
      break;
    }
    if (Number.parseFloat(userNumber) === randomNumber) {
      userWinned = true;
      WinPrize2 += currentPrize2;
      play = confirm(`
      Congrftulation! Your prize is ${WinPrize2}$.Do you want to continue?
    `);
      maxPrize2 *= 3;
      currentPrize2 = maxPrize2;
      maxRandomNumber2 *= 2;
      break;
    }
    currentPrize2 = Math.floor(currentPrize2 / 2);
    Round2--;
  }
  if (!userWinned) {
    play = alert(`Thank you for a game. Your prize is: ${WinPrize2}$.`);
    play = confirm(`Do you want to play again?`)
    WinPrize2 = 0;
    maxPrize2 = MaxPrize2;
    currentPrize2 = MaxPrize2;
    maxRandomNumber2 = MaxNumber2;
  }
  if (userWinned && !play) {
    play = confirm(`
Thank you for a game. Your prize is: ${WinPrize2}$. Do you want to play again?
`);
  }
} else {
  alert(`'You did not become a millionaire, but can.`);
}