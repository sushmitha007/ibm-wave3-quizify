package com.stackroute.quizify.recommendationservice.serviceImpl;

import com.stackroute.quizify.recommendationservice.domain.LikesTopic;
import com.stackroute.quizify.recommendationservice.domain.Topics;
import com.stackroute.quizify.recommendationservice.domain.Users;
import com.stackroute.quizify.recommendationservice.repository.LikesTopicRelationshipRepository;
import com.stackroute.quizify.recommendationservice.service.LikesTopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikesTopicServiceImpl implements LikesTopicService {
    private LikesTopicRelationshipRepository likesTopicRelationshipRepository;

    @Autowired
    public LikesTopicServiceImpl(LikesTopicRelationshipRepository likesTopicRelationshipRepository) {
        this.likesTopicRelationshipRepository = likesTopicRelationshipRepository;
    }

    @Override
    public List<LikesTopic> getAllRelationships() {
        return likesTopicRelationshipRepository.getAllRelationships();
    }


    @Override
    public LikesTopic createRelationship(Users user) {
        Topics topic=user.getTopics();
        long topicId=topic.getId();
        long userId=user.getUserId();
        return likesTopicRelationshipRepository.createRelationship(userId,topicId);
//        return null;
    }

}
