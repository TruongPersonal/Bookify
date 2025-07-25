package com.truongpersonal.bookify.controller;

import com.truongpersonal.bookify.requestmodels.ReviewRequest;
import com.truongpersonal.bookify.service.ReviewService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("https://bookify.truongpersonal.vercel.app")
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController (ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/secure/user/book")
    public Boolean reviewBookByUser(@AuthenticationPrincipal Jwt jwt,
                                    @RequestParam Long bookId) throws Exception {
        String userEmail = jwt.getClaim("email");

        if (userEmail == null) {
            throw new Exception("User email is missing");
        }
        return reviewService.userReviewListed(userEmail, bookId);
    }

    @PostMapping("/secure")
    public void postReview(@AuthenticationPrincipal Jwt jwt,
                           @RequestBody ReviewRequest reviewRequest) throws Exception {
        String userEmail = jwt.getClaim("email");
        if (userEmail == null) {
            throw new Exception("User email is missing");
        }
        reviewService.postReview(userEmail, reviewRequest);
    }
}
