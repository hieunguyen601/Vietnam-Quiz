document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting
  
    const correctAnswers = {
      answer1: {
        value: "Ha Noi",
        explanation: "Ha Noi is the capital of Vietnam."
      },
      answer2: {
        value: "Pho",
        explanation: "Pho is a traditional Vietnamese noodle soup."
      },
      answer3: {
        value: "Ho Chi Minh",
        explanation: "Ho Chi Minh declared Vietnam's independence from France in 1945."
      },
      answer4: {
        value: "Red with a yellow star in the center",
        explanation: "Vietnam’s national flag is red with a yellow star in the center."
      }
    };
  
    let score = 0;
    let total = Object.keys(correctAnswers).length;
  
    // Reset label styles
    document.querySelectorAll("label").forEach(label => {
      label.style.backgroundColor = "";
      label.style.padding = "";
    });
  
    // Remove previous explanations
    document.querySelectorAll(".explanation").forEach(el => el.remove());
  
    for (let key in correctAnswers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      const correct = correctAnswers[key].value;
      const explanation = correctAnswers[key].explanation;
  
      let explanationEl = document.createElement("p");
      explanationEl.className = "explanation";
      explanationEl.style.marginTop = "5px";
      explanationEl.style.fontStyle = "italic";
  
      if (selected) {
        const selectedLabel = document.querySelector(`label[for="${selected.id}"]`);
        if (selected.value === correct) {
          score++;
          selectedLabel.style.backgroundColor = "#d4edda"; // green
          explanationEl.textContent = `✅ Correct! ${explanation}`;
        } else {
          selectedLabel.style.backgroundColor = "#f8d7da"; // red
          explanationEl.textContent = `❌ Incorrect. The correct answer is: ${correct}. ${explanation}`;
  
          // Highlight correct answer
          const correctInput = [...document.querySelectorAll(`input[name="${key}"]`)]
            .find(input => input.value === correct);
          const correctLabel = document.querySelector(`label[for="${correctInput.id}"]`);
          correctLabel.style.backgroundColor = "#d4edda";
        }
        selectedLabel.style.padding = "5px";
      } else {
        explanationEl.textContent = `⚠️ You didn’t select an answer. The correct answer is: ${correct}. ${explanation}`;
      }
  
      // Append explanation below the question
      const questionDiv = document.querySelector(`.${key.replace("answer", "question-")}`);
      questionDiv.appendChild(explanationEl);
    }
  
    // Display score
    const scoreText = document.querySelector(".Score");
    scoreText.textContent = `You got ${score}/${total} correct.`;
  
    // Add feedback
    let feedback = "";
    if (score === total) feedback = "🎉 Excellent! You're a Vietnam expert!";
    else if (score >= 3) feedback = "👍 Great job! You know quite a bit about Vietnam.";
    else if (score >= 1) feedback = "🙂 Not bad, keep learning!";
    else feedback = "😢 Don’t worry—try again and learn something new!";
  
    scoreText.textContent += " " + feedback;
    scoreText.style.fontWeight = "bold";
    scoreText.style.marginTop = "20px";
  });
  
  