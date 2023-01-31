class CheckingAccount extends Account{

    constructor({number,overdraft}){
        super(number);
        this._overdraft = overdraft;
    }

    getOverdraft(){
        return this._overdraft;
    }

    setOverdraft(val){
        this._overdraft = val;
    }

    withdraw(amount){
       if(amount<0) throw new RangeError("Amount can't be negative");
       let overdraft = this.getBalance() - amount < 0 ? this.getBalance() - amount : 0;
       this.updateOverdraft(overdraft);
       super.withdraw(amount - overdraft);
       return this.getBalance();
    }

    updateOverdraft(amount){
        if(amount < 0) throw new RangeError("Amount isn't valid");
        if(amount > this._overdraft) throw new Range("Insuffient balance");
        this._overdraft-=amount;
    }

    toString(){
        return super.toString() + ":Overdraf "+this._overdraft;
    }
}