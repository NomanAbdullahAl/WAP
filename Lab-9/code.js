String.prototype.filter = function(bannedWords) {
  var string = this;
  bannedWords.forEach(function(word) {
      string = string.replace(new RegExp(word, 'gi'), "");
  });
  return string.trim().replace("  "," ");
};

console.log("This house is not nice!".filter(['not'])); 
// Output: "This house is nice!"


Array.prototype.bubbleSort = function(){
  let arr = this;
  let isAnyChange = false;
  for(let i =0; i<arr.length;i++){
    for(let j =1; j< arr.length-i; j++){

      if(arr[j-1]>arr[j]){
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j]=temp;
        isAnyChange = true;
      }
    }
    if(!isAnyChange) break;
  }
  return arr;
}

console.log([6,4,0, 3,-2,1].bubbleSort());

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}

var Teacher = function(){};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject){
 return this.name +  " is now teaching " + subject;
}

var teacher = new Teacher();
teacher.initialize("Jhon",50);
console.log(teacher.teach("WAP"));