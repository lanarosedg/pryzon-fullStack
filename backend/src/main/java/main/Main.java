package main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(exclude = { org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration.class })
@ComponentScan(basePackages = { "main", "controller", "dto" })
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
