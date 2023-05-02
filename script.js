const word = "bedplant";
  const newWord = "epiphany";
  
  function checkAnswer() {
    const answerInput = document.getElementById("answerInput");
    const feedback = document.getElementById("feedback");
    const answer = answerInput.value.trim().toLowerCase();
    
    if (answer === word) {
      feedback.textContent = "Congratulations! You have solved the first clue.";
      saveAnswer("Question 1", answer);
      answerInput.value = "";
      answerInput.placeholder = "Enter the new word here";
      answerInput.setAttribute("data-validation", "newWord");
    } else if (answer === newWord) {
      feedback.textContent = "Congratulations! You have solved the puzzle.";
      saveAnswer("Question 14", answer);
      answerInput.disabled = true;
      answerInput.style.display = "none";
    } else if (answerInput.getAttribute("data-validation") === "newWord") {
      if (answer === newWord) {
        feedback.textContent = "Correct! You have solved the puzzle.";
        saveAnswer("Question 9", answer);
        answerInput.disabled = true;
        answerInput.style.display = "none";
      } else {
        feedback.textContent = "Incorrect. Keep trying!";
      }
    } else {
      feedback.textContent = "Incorrect. Keep trying!";
    }
  }
