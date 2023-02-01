const readline = require('readline').createInterface({
    input: process.stdin,
    output : process.stdout
});

const arr = [];
const getNumber = ()=>{
    readline.question("",(val)=>{
        if(val.toLowerCase() !== "stop"){
            arr.push(parseInt(val));
            getNumber();
        }
        else{
            console.log(arr.reduce((accu,curr)=> accu+curr));
            readline.close();
        }
    });
}

getNumber();