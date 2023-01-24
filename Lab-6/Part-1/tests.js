describe("Test Sum And Multiply",()=>{

   it("Sum of [1,2,3,4,5] is 15",()=>{
        assert.equal(sum([1,2,3,4,5]),15);
   }),

   it(" Multiplication of [2,3,4,5] is 120",()=>{
        assert.equal(multiply([2,3,4,5]),120);
   })
});

describe("Reverse",()=>{
    it("Reverse of abcde is edcba",()=>{
        assert.equal(reverse("abcde"),"edcba");
    })
});

describe("Longer words",()=>{
    it("Filter of longer words of ['abc','dfgh','ijklm'] are [dfgh,ijklm]",()=>{
        assert.equal(filterLongWords(["abc","dfgh","ijklm"],3).toString(),"dfgh,ijklm");
    });
});