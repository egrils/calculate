function calculate_median(arr) {
    var evenNumArray = buildEvenNumArray(arr);
    var average = calculateAverage(evenNumArray);

    return average;
}

function buildEvenNumArray(numArray) {
    var flag = 1;
    var evenNumArray = [];

    numArray.forEach(function (element) {
        if (flag % 2 == 0)
            evenNumArray.push(element);
        flag ++;
    });

    return evenNumArray;
}

function calculateAverage(evenNumArray) {
    var count = 0 ,sum = 0,average;

    evenNumArray.forEach(function (element) {
        sum += element;
        count ++;
    });
    average = sum / count;

    return average;
}

module.exports = calculate_median;
