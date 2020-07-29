function check(event) {
   // event.preventDefault()
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
//     var alerts = ["Well done!", "That wasn't bad. Cheer up! I'm sorry, you failed!"];
// alert(alerts[0])

    console.log(correct)

    var range;
    if (correct < 1) {
        alert("I'm Sorry you failed")
    }

    else if (correct > 0 && correct < 5) {
        alert("That was not bad. Cheer up")

    }

    if (correct > 2) {
        alert("Well Done!!")
    }
    //var countDownTime = new Time("10:00").getTime();



    document.getElementById("after_submit").style.visability = "visible";
    document.getElementById("correct_answers").innerHTML = "You got " + correct + "correct."
clearInterval(interval)

        $(".timer").text(countDownTime + " - You got " + correct + " correct.")

}
var countDownTime = 20;


var interval;

interval = setInterval(function () {
    if (countDownTime > 0) {
        countDownTime--
        $(".timer").text(countDownTime)

    } else {
        clearInterval(interval)

        $(".timer").text(countDownTime + " - Game Over!")

    }

}, 1000)






