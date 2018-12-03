$(document).ready(function () {
    var types = ""
    var shatter = ""
    var science = ""
    var lethal = ""
    var correctAnswers = 0;
    var inCorrectAnswers = 0;
    var unAnswered = 0;
    var resultcalculator = function () {
    }
    // console.log('ready');


    if (types === "All") {
        correctAnswers++
    } else if (types === "") {
        unAnswered++
    } else {
        inCorrectAnswers++
    };

    if (shatter === "A term for cannabis concentrate") {
        correctAnswers++
    } else if (shatter === "") {
        unAnswered++
    } else {
        inCorrectAnswers++
    };

    if (science === "Cannabis Satvia") {
        correctAnswers++
    } else if (science === "") {
        unAnswered++
    } else {
        inCorrectAnswers++
    };

    if (lethal === "None") {
        correctAnswers++
    } else if (lethal === "") {
        unAnswered++
    } else {
        inCorrectAnswers++

        var resultString = ""
        resultString += " <h2> Correct Answers: " + correctAnswers + "</h2>"
        resultString += " <h2> Incorrect Answers: " + inCorrectAnswers + "</h2>"
        resultString += " <h2> Unnswered: " + unAnswered + "</h2>"

        $("body").replaceWith(resultString);

    }
});

