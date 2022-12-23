/*
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    if(s.length % 2 !== 0) {
        return -1;
    }
    
    let count = 0;
    let leftS = s.slice(0, s.length/2);
    let rightS = s.slice(s.length/2); 
    
    //map letters of leftS
    const leftMap = {};
    for(let letter = 0; letter < leftS.length; letter++) {
        if(!leftMap[leftS[letter]]) {
            leftMap[leftS[letter]] = 1;
        } else {
            leftMap[leftS[letter]]++
        }
    }
    
    //subtracct letters from rightS
    for(let rLetter = 0; rLetter < rightS.length; rLetter++) {
        if(Object.hasOwnProperty.call(leftMap, rightS[rLetter])) {
            leftMap[rightS[rLetter]]--;
        }
    }

    //letters not zeroed out are the difference between two str, add count up
    for(const val in leftMap) {
        if(leftMap[val] > 0) {
            count +=leftMap[val]
        }
    }
    
    console.log(count);
    return count;
}
