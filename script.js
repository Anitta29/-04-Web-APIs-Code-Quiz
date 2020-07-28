function check() {
    var question1 = document.quiz.question1.value
    var question2 = document.quiz.question2.value
    var question3 = document.quiz.question3.value
    var question4 = document.quiz.question4.value
    var question5 = document.quiz.question5.value
    var correct = 0;

    if (question1 == "Kyiv") {
        correct++;
    }
    if (question2 == "Kiwi") {
        correct++;
    }

    if (question3 == "Mediterranian Sea") {
        correct++;
    }

    if (question4 == "none of the above") {
        correct++;
    }

    if (question5 == "Valentina Tereshkova") {
        correct++;
    }
    var alerts = ["Well done!", "That wasn't bad. Cheer up! I'm sorry, you failed!"];

    var range;
    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 5) {
        range = 1;

    }

    if (correct > 2) {
        range = 0;
    }
    var countDownTime = new Time("10:00").getTime();

    




    document.getElementById("after_submit").style.visability = "visible";
    document.getElementById("correct_answers").innerHTML = "You got " + correct + "correct."

}