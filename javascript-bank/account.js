/* exported Account */
function Account(number, holder){
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}


Account.prototype.deposit = function(amount) {
  if(amount > 0){
    let deposit = new Transaction("deposit", amount);
    this.transactions.push(deposit);
    return true;
  }
  return false;
}

Account.prototype.withdraw = function(amount) {
  if (amount > 0) {
    let withdrawal = new Transaction("withdraw", amount);
    this.transactions.push(withdrawal);
    return true;
  }
  return false;
}

Account.prototype.getBalance = function() {
  let balance = 0;
  if(this.transactions.length === 0){
    return 0;
  }
  for(transaction of this.transactions){
    if (transaction.type === "withdraw"){
      balance -= transaction.amount;
    }
    else if(transaction.type === "deposit"){
      balance += transaction.amount;
    }
  }
  return balance;
}
