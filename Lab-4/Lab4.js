/**  Question 1***/

function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }

/**  Question 2***/
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  }


  /**  Question 3 ***/
  function isVowel(char) {
    var vowels = "aeiouAEIOU";
    if (vowels.indexOf(char) !== -1) {
      return true;
    }
    return false;
  }
  
  /* Question 4 */
  function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }
  
  function multiply(numbers) {
    return numbers.reduce((a, b) => a * b, 1);
  }

  /* Question 5 */
  function reverse(str) {
    return str.split('').reverse().join('');
  }
  
  function findLongestWord(words) {
    var longest = 0;
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longest) {
        longest = words[i].length;
      }
    }
    return longest;
  }

  function filterLongWords(words, i) {
    return words.filter(w=>w.length > i);
  }

  const a = [1,3,5,3,3]; 
  const b = a.map(e=> e*10);
  const c = a.filter(i=>i ===3);
  const d = a.reduce((acc,cur)=>acc*cur,1);
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }


  /* max returns the maximum of 2 arguments */
   
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* max3 takes 3 numbers as arguments and returns the largest */
  
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of isVowel('a') is true  " + myFunctionTest(isVowel("i"), true));
  console.log("Expected output of sum([-1, 5, 10, 1]) is 15  " + myFunctionTest(sum([-1, 5, 10, 1]), 15));
  console.log("Expected output of multiply([-1, 5, 10, 1]) is -50  " + myFunctionTest(multiply([-1, 5, 10, 1]), -50));
  console.log("Expected output of reverse('jag testar') is ratset gaj  " + myFunctionTest(reverse("jag testar"),"ratset gaj"));
  console.log("Expected output of findLongestWord(['jag', 'testar', 'javascript']) is 10  " + myFunctionTest(findLongestWord(["jag", "testar", "javascript"]),10));
  console.log("Expected output of filterLongWords(['jag', 'testar', 'javascript'], 5) is [testar", "javascript] " + myFunctionTest(filterLongWords(["jag", "testar", "javascript"], 5).toString(), ["testar", "javascript"].toString()));
  console.log("Expected output of a.map(e=> e*10) for [1,3,5,3,3] is [10,30,50,30,30]  " + myFunctionTest("10,30,50,30,30",b.toString()));
  console.log("Expected output of a.filter(i=>i ===3) for [1,3,5,3,3] is [3,3,3]  " + myFunctionTest("3,3,3",a.filter(i=>i ===3).toString()));   
  console.log("Expected output of a.reduce((acc,cur)=>acc*cur,1) for [1,3,5,3,3] is 135 " + myFunctionTest(135,a.reduce((acc,cur)=>acc*cur,1))); 