package controller;

import dto.AnswerRequest;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class QuizController {

    private final Map<String, String> correctAnswers = Map.of(
            "M1", "4",
            "M2", "9",
            "M3", "H",
            "M4", "0",
            "M5", "4",
            "M6", "AC",
            "M7", "256",
            "M8", "30");

    @PostMapping("/check-answer")
    public boolean checkAnswer(@RequestBody AnswerRequest request) {
        String level = request.getLevel();
        String answer = request.getAnswer().trim();

        return correctAnswers.getOrDefault(level, "").equalsIgnoreCase(answer);
    }

}
