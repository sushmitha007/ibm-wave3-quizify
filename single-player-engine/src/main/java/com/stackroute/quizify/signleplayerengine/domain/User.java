package com.stackroute.quizify.signleplayerengine.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data

public class User {

    @Id
    private String userId;
    private String password;
    private String role;


}
