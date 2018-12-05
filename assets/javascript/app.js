//get document ready to run JS. create empty strings for answers
$(document).ready(function () {
    var types = ""
    var shatter = ""
    var science = ""
    var lethal = ""
    var correctAnswers = 0;
    var inCorrectAnswers = 0;
    var unAnswered = 0;
    var resultCalculator = function () {
    }
    // console.log('ready');

    // conditional logic for user answers 
    if (types === "All") {
        correctAnswers++
    } else if (types === "") {
        unAnswered++
    } else {
        inCorrectAnswers++
    };
    console.log(types);
    // console.log('inCorrect');

    if (shatter === "A term for cannabis concentrate") {
        correctAnswers++
    } else if (shatter === "") {
        unAnswered++
    } else {
        inCorrectAnswers++
    };
    console.log(shatter);

    if (science === "Cannabis Satvia") {
        correctAnswers++
    } else if (science === "") {
        unAnswered++
    } else {
        inCorrectAnswers++
    };
    console.log(science);


    if (lethal === "None") {
        correctAnswers++
    } else if (lethal === "") {
        unAnswered++
    } else {
        inCorrectAnswers++
    };
    console.log(lethal);

    $("input[type=radio]").click(function () {
        var formName = $(this).closest("form").attr('name')
        if (formName == "types") {
            location = $(this).val();
            console.log(location);
        } else if (formName == "shatter") {
            toy = $(this).val();
            console.log(toy);
        } else if (formName == "science") {
            itch = $(this).val();
            console.log(itch);
        } else if (formName == "none") {
            holiday = $(this).val();

            console.log(science);
            console.log(formName);

        }

        // set varible for time to count down
        var count = 15
        timer = setInterval(function () {
            $("#counter").html(count--);
            if (count == -1) {
                clearInterval(timer);
            };
        }, 1500);

    });
});


