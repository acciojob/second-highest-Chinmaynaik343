//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length <= 1) {
        return -Infinity;
    }

    let uniqueArr = [...new Set(arr)];

    if (uniqueArr.length <= 1) {
        return -Infinity;
    }

    uniqueArr.sort((a, b) => b - a);

    return uniqueArr[1];
}