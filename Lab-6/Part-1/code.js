const sum = (args)=> args.reduce((accu,curr)=>accu+curr,0);

const multiply = (args)=>args.reduce((accu,curr)=>accu*curr,1);

const reverse =(str)=>[...str].reduce((accu,curr)=>curr+accu);

const filterLongWords = (args,len)=> args.filter(w=>w.length>len);