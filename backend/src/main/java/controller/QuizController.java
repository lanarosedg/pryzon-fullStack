package controller;

import dto.AnswerRequest;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class QuizController {

    private final Map<String, String> correctAnswers = Map.ofEntries(
            Map.entry("M1", "4"),
            Map.entry("M2", "9"),
            Map.entry("M3", "H"),
            Map.entry("M4", "0"),
            Map.entry("M5", "4"),
            Map.entry("M6", "AC"),
            Map.entry("M7", "256"),
            Map.entry("M8", "30"),
            Map.entry("M9", "16"),
            Map.entry("M10", "36"),
            Map.entry("M11", "12"),
            Map.entry("M12", "CF"),

            Map.entry("L1", "C"),
            Map.entry("L2", "C"),
            Map.entry("L3", "B"),
            Map.entry("L4", "A"),
            Map.entry("L5", "C"),
            Map.entry("L6", "B"),
            Map.entry("L7", "B"),
            Map.entry("L8", "C"));

    @PostMapping("/check-answer")
    public boolean checkAnswer(@RequestBody AnswerRequest request) {
        String level = request.getLevel();
        String answer = request.getAnswer().trim();

        return correctAnswers.getOrDefault(level, "").equalsIgnoreCase(answer);
    }

}
