describe("Test banned words",()=>{

    it("\"This house is not nice!\".filter(['not']) will return \"This house is nice!\"",
        ()=>{
            assert.equal("This house is not nice!".filter(['not']),"This house is nice!");
        }
    )
});

describe("Test buble sort",()=>{
    it("[6,4,0, 3,-2,1].bubbleSort() will return [-2, 0, 1, 3, 4, 6]",()=>{
        assert.deepEqual([6,4,0, 3,-2,1].bubbleSort(),[-2, 0, 1, 3, 4, 6]);
    });
});

describe("Test Teacher Object",()=>{

    it("teacher.teach(\"WAP\") will return Jhon is now teaching WAP",()=>{
        var teacher = new Teacher();
        teacher.initialize("Jhon",50);
        assert.equal(teacher.teach("WAP"),"Jhon is now teaching WAP");
    });
});