var myQuestions = [
    {
        question: "What movie does Owen Wilsong and Lary the Cable Guy star in together?",
        answers: {
            a : "Finding Nemo",
            b : "Cars",
            c : "A Bugs Life",
            d : "Up",
        },
        correctAnswer: "b"
    },
    {
        question: "What movie was mad on November 14, 1998?",
        answers: {
            a : "Toy Story",
            b : "Finding Nemo", 
            c : "A Bugs Life",
            d : "Coco", 
        },
        correctAnswer: "c", 
    },
    {
        question: "what movie has made the most money?",
        answers: {
            a : "Wall-E",
            b : "Brave",
            c : "Ratatouille",
            d : "Finding Dory",
        },
        correctAnswer: "d"
    },
    {
        question: "According to Vox.com, which Pixar movie is the very best?",
        answers: {
            a : "The Incredibles",
            b : "Toy Story", 
            c : "Up",
            d : "Monsters Inc.", 
        },
        correctAnswer: "a", 
    },
    {
        question: "Which movie has the most sequels??",
        answers: {
            a : "Toy Stoy",
            b : "Cars",
            c : "The Incredibles",
            d : "Finding Nemo",
        },
        correctAnswer: "a"
    },
    {
        question: "Which movie was the 22nd movie that Pixar made?",
        answers: {
            a : "Monsters Inc.",
            b : "Coco", 
            c : "Ratatouille",
            d : "Finding Nemo", 
        },
        correctAnswer: "c", 
    },
  
 

]
console.log("https://www.filmsite.org/pixaranimations.html");
console.log("https://www.vox.com/2015/11/25/9797714/pixar-movies-rankings");

// function showQuestion(questions, quizContainer) {
//     var output = [];
//     var answers;

//     for (var i = 0; i < questions.length; i++){
//         answers = [];

//         for (letters in questions[i].answers){
//             answer.push(
//                 $("button")
//             )
//         }
//     }

// }
// function setup() {
//     var googleSheetLink = "https://docs.google.com/spreadsheets/d/1TpuYn-FcSx9WVFvSOFHsS4l6RCIZ9mV2hgS8xUBOk4g/edit?usp=sharing";
//     trivia.loadGoogleSheet(googleSheetLink).then(displayWelcome); 
//   }
  //Loops continously for background effects and animations. (p5.js)
//   function draw() {
//     if (trivia.state == "welcome") ;
//     else if (trivia.state == "question") ;
//     else if (trivia.state == "correct") ;
//     else if (trivia.state == "incorrect");
//     else if (trivia.state == "thankyou") ;
//   }
  function displayWelcome() {
    $(".screen").hide();
    $("#welcome-screen").show();
  }
  function onClickedStart() {
    displayQuestion();
  }
  function displayQuestion() {
    $(".screen").hide();
    $("#question-screen").show();
    $("#display").text("00:30");
    //  $("#correctAnswer").removeClass("highlight");
    $("#feedback").hide();
    myQuestions.insertQuestionInfo();
    myQuestions.shuffleAnswers();
    console.log(displayQuestion);
  }
  
    function onClickedAnswer(correctAnswer) {
    if (correctAnswer) $("#feedback").html(`That is correct!`).show();
    else $("#feedback").html(`Correct answer is:` + correctAnswer).show();
    // $("#correctAnswer").addClass("highlight"); //highlight right answer
    setTimeout(myQuestions.gotoNextQuestion, 3000); //wait 3 secs...next question
        console.log(onClickedAnswer);
}

  function displayThankyou() {
    $(".screen").hide();
    $("#thankyou-screen").show();
    $("#game-results").html(`You got ${trivia.totalCorrect} of ${trivia.totalAnswered} correct.`);
  }

//   setting up a timer
  var intervalId;
  var clockRunning = false;
  var time = 0;

  function reset() {

    time = 0;
    $("#display").text("00:30");
  }

  function start() {

   
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
          
    }
  console.log(start);
}function countDown() {
    time--;
    var converted = timeConverter(time);
    $("display").text(converted);
}

function timeConverter(t) {
    var seconds = Math.floor(t / 30);
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (seconds === 0) {
        $("#feedback").show();
    }
}

