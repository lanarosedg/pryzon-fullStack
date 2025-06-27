package dto;

public class AnswerRequest {
    private String answer; // ✅ use String, not int
    private String level;

    public AnswerRequest() {
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
