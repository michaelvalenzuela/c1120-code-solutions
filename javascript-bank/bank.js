/* exported Bank */
function Bank(){
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function(holder, balance){
  if(balance > 0){
    let acc = new Account(this.nextAccountNumber, holder);
    acc.deposit(balance);
    this.accounts.push(acc);
    this.nextAccountNumber++;
    return acc.number;
  }
  return null;
}


Bank.prototype.getAccount = function(number) {
  for(account of this.accounts){
    if(account.number === number){
      return account;
    }
  }
  return null;
}

Bank.prototype.getTotalAssets = function(){
  let total = 0;
  for(account of this.accounts){
    total += account.getBalance();
  }
  return total;
}
