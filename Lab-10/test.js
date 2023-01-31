
describe("SavingAccounts", function(){
    it("Saving Accounts", function(){
        let number = 123;
        let interest = 2;
        let savingAccount = new SavingsAccount({number, interest});
        savingAccount.deposit(102.5);
        let actual = savingAccount.addInterest();
        let expected = 104.55;
        assert.equal(actual,expected);
    })
})

describe("CheckingAccounts", function(){
    it("should withdraw amount from account", function(){
        let number = 123;
        let overdraft = 50;
        let checkingAccount = new CheckingAccount({number, overdraft});
        checkingAccount.deposit(100);
        let actual = checkingAccount.withdraw(10);
        let expected = 90;
        assert.equal(actual,expected);
    })   
})

describe("Bank", function(){
    it("add Account", function(){
        let bank = new Bank();        
        let actual = bank.addAccount();
        assert.equal(actual,1);
    })
    it("add Savings Account", function(){
        let bank = new Bank();        
        let actual = bank.addSavingsAccount(2);
        assert.equal(actual,1);
    })
    it("add Checking Account", function(){
        let bank = new Bank();        
        let actual = bank.addCheckingAccount(12);
        assert.equal(actual,1);
    })
    it("close Account", function(){
        let bank = new Bank();        
        let actual = bank.closeAccount(1);
        assert.equal(actual,0);
    })    
})


