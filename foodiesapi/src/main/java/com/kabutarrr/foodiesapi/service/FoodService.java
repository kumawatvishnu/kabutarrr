package com.kabutarrr.foodiesapi.service;

import com.kabutarrr.foodiesapi.io.FoodRequest;
import com.kabutarrr.foodiesapi.io.FoodResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FoodService {
    String uploadFile(MultipartFile file);
    FoodResponse addFood(FoodRequest request, MultipartFile file);
    List<FoodResponse> readFoods();
    FoodResponse readFood(String id);
    boolean deleteFile(String fileName);
    boolean deleteFood(String id);
}
