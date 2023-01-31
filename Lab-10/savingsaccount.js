class SavingsAccount extends Account{

    /**
     * 
     * @param {number} number the account number
     * @param {number} interest interest rate
     */
    constructor({number,interest}){
        super(number);
        this._interest = interest;
    }

    /**
     * 
     * @returns {number} account number
     */
    getInterest(){
        return this._interest;
    }
    /**
     * 
     * @param {number} val the interset rate
     * @throws {RangeError} if interest rate is negative
     * @returns {undefined}
     */
    setInterest(val){
        if(val<0) throw new RangeError("Interst rate can't be negative");
         this._interest = val;
    }

    /**
     * @return {number}
     */
    addInterest(){
        let balance = this.getBalance();
        let interestAmount = balance *  this._interest * 0.01;
        this.deposit(interestAmount);
        return this.getBalance();
    }

    /**
     * @returns {string}
     */
    toString(){
        return super.toString() + ":Interest "+this._interest;
    }
}