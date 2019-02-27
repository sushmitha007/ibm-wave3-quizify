package com.stackroute.quizify.recommendationservice.domain;

import com.stackroute.quizify.kafka.domain.User;
import lombok.Data;
import org.neo4j.ogm.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Data
@RelationshipEntity(type = "LikesGenre")
public class LikesGenre {
    @Id
    @GeneratedValue
    private String id;

    @StartNode
    private User user;
    @EndNode
    private Genre genre;
}