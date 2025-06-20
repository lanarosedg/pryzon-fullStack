package com.answers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/answer")
public class MathLevel {
    @PostMapping("/check")
    public boolean checkAnswer(@RequestBody AnswerRequest answerRequest) {
        String userAnswer = answerRequest.getAnswer().trim();
        String correctAnswer = "42";

        return userAnswer.equalsIgnoreCase(correctAnswer);
    }

    public static class AnswerRequest {
        private String answer;

        public String getAnswer() {
            return answer;
        }

        public void setAnswer(String answer) {
            this.answer = answer;
        }
    }
}
