function userCard(CreditKey) {
  const card = {
    balance: 100,
    transactionLimit: 100,
    historyLogs: [],
    key: CreditKey
  }

  function getCardOptions() {

    return this.card;
  }

  function putCredits(balance) {
    this.log('Total of credits');
    this.card.balance = this.card.balance + balance;
  }

  function takeCredits(balance) {
    const min_balance = 0;
    const new_balance = this.card.balance - balance;
    if (new_balance < min_balance) {
      console.log('You can"t take credits from the card!');
    } else {
      console.error('Withdrawall of credits');
    }
  }

  function setTransactionLimit(limit) {
    this.log('Transaction limit');
    this.card.transactionLimit = limit;
  }

  function transferCredits(amount_credits, card_recipient) {
    const min_balance = 0;
    const commision = 0.005;
    let amount_credits_commision = amount_credits * commision;
    const new_balance = this.card.balance - amount_credits_commision;

    if (new_balance < min_balance || new_balance > this.card.transactionLimit) {
      console.log('You can"t take credits from the card!');
    } else {
      console.log('Withdrawall of credits');
      this.card.balance = this.card.balance - amount_credits_commision;
      card_recipient.putCredits(amount_credits_commision);
    }
  }

  function log(type) {
    function date() {
      const now = new Date();
      const day = now.getDate();
      let month = now.getMonth();
      const year = now.getFullYear();
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const add = 10;
      if (month < add) {
        month = '0' + month;
      }

      return `${day}/${month}/${year}, ${hour}:${minutes}:${seconds}`;
    }
    let types = ['Received credits', 'Withdrawall of credits', 'Transaction limit change'];
    this.card.historyLogs.push({
      type: type,
      credits: this.card.balance,
      operationTime: date()
    });
  }

  return {
    card: card,
    getCardOptions: getCardOptions,
    putCredits: putCredits,
    takeCredits: takeCredits,
    setTransactionLimit: setTransactionLimit,
    transferCredits: transferCredits,
    log: log
  }
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.maxCardNumber = 3;
  }
  addCard(CreditKey) {
    if(this.cards.length < this.maxCardNumber) {
      this.cards.push(userCard(CreditKey));
    } else {
      console.error('You have already reached cards quantity limit');
    }
  }
  getCardByNumber(CreditKey) {
    return this.cards[CreditKey - 1];
  }
}
