// Write your function here
function findMinLengthOfThreeWords(w1,w2,w3){
    if(w1.length<w2.length&&w1.length<w3.length){
        return w1.length;
    }
    else{
        if(w2.length<w1.length&&w2.length<w3.length){
            return w2.length;
        }
        else{
            return w3.length;
        }
    }
}


var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1