package com.devops.learn_devops_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class LearnDevopsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearnDevopsBackendApplication.class, args);
	}

}


@RestController()
@CrossOrigin(origins = "*")
class HelloController{
    @GetMapping("/hello")
    public String hello(){
        return "Hello, Aakash!";
    }
}
