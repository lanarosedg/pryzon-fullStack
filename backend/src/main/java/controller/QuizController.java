package controller;

import dto.AnswerRequest;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class QuizController {

    // Store correct answers by level ID (e.g., "M1", "M2")
    private final Map<String, Integer> correctAnswers = Map.of(
            "M1", 4,
            "M2", 9,
            "M3", 12);

    @PostMapping("/check-answer")
    public boolean checkAnswer(@RequestBody AnswerRequest request) {
        String level = request.getLevel();
        int answer = request.getAnswer();

        // Check if the answer matches the correct one for the given level
        return correctAnswers.getOrDefault(level, -1) == answer;
    }
}
