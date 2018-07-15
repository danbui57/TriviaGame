

//the function is made to hide the html on the page and display the <p> tags 
function intro () {
var opener = "<p id = 'line1'>Are you ready to play?</p>" +
"<p id = 'line2'> Answer all the questions</p>" + "<p id = 'line3'>before time runs out</p>" +
"<p id='begin'> Begin </p>"

//this Jquery function will grab an element with the "intro" id and append the "opener" variable
$("#intro").append(opener);

// this Jquery function will grab an element with the "trivia" id and hide it from the existing page
$("#trivia").hide();
}

// this function will determine if the user chose the  
//correct or incorrect answers or left any blank answers
function test(responses, answers) {

    // console.log(responses);
    // console.log(answers);

    var correctAnswers = 0;

    var wrongAnswers = 0;

    var unAnswered = 0;
    

    // a for loop to loop through my array of answers 
    for (var i = 0; i < answers.length; i++) {

// if any of the indexes in my response array are equal to 0
//then that means that the question was left unanswered
        if (responses[i].length == 0){
            unAnswered++;

//but if the indexes in the respones array are equal to the indexes
//in the answers array then the user answered correctly   
        } else if (answers[i] == responses[i]) {
            correctAnswers++;

//and if the conditions above are not met then the answer is wrong
        } else {
        
            wrongAnswers++;
            console.log(responses[i])
        }
    };


    return [correctAnswers, wrongAnswers, unAnswered, responses];


    
}



function process() {

// an array of the correct responses
    var responses = [
        document.trivia.questionOne.value,
        document.trivia.questionTwo.value,
        document.trivia.questionThree.value,
        document.trivia.questionFour.value,
        document.trivia.questionFive.value,
        document.trivia.questionSix.value,
        document.trivia.questionSeven.value,
        document.trivia.questionEight.value];

        // an array of correct answers   
    var answers = [
        "Karl Benz",
        "Charles Babbage",
        "Alexander Graham Bell",
        "Lil Wayne",
        "Abner Doubleday",
        "Migos",
        "Albert Einstein",
        "Professor Philip Brainard"
    ];

// a function to hide the html on the page and replace it with the <p> tags inside
// the "final" variable
    var final = test(responses, answers);


    var input = "<p class='input'>All Done!</p>" +
        "<p class='input'>Correct Answers:" + final[0] + "</p>" +
        "<p class='input'>Incorrect Answers:" + final[1] + "</p>" +
        "<p class='input'> Unanswered:" + final[2] + "</p>" 
        //  + "<p class='input'> Here are the wrong answers you chose:" + final[3] + "</p>"


    $('#result').html(input);
    $('#trivia').hide(3000);
};
