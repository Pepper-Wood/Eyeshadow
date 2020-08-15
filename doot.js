var scores = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
max = Math.max( ...scores );
var maxIndex = orgy_palette.reduce(function(highestIndex, element, index, array){
    return element > array[highestIndex] ? index : highestIndex;
}, 0);
console.log(scores);
console.log("Removing color at index: " + maxIndex + " with score " + scores[maxIndex]);
console.log("Max is = " + max);

