package controller;

import dto.AnswerRequest;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class QuizController {

    private final int correctAnswerM1 = 4;

    @PostMapping("/check-answer")
    public boolean checkAnswer(@RequestBody AnswerRequest request) {
        return request.getAnswer() == correctAnswerM1;
    }
}
