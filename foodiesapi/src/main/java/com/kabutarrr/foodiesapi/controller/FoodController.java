package com.kabutarrr.foodiesapi.controller;

import com.kabutarrr.foodiesapi.io.FoodRequest;
import com.kabutarrr.foodiesapi.io.FoodResponse;
import com.kabutarrr.foodiesapi.service.FoodService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("api/foods")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class FoodController {

    private final FoodService foodService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public FoodResponse addFood(@RequestPart("food") FoodRequest request,
                                @RequestPart("file")MultipartFile file){
        System.out.println(request);
        System.out.println(file.getOriginalFilename());
        FoodResponse response = foodService.addFood(request, file);
        return response;
    }

    @GetMapping
    public List<FoodResponse> readFoods(){
        return foodService.readFoods();
    }

    @GetMapping("/{id}")
    public FoodResponse readFood(@PathVariable String id){
        return foodService.readFood(id);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean deleteFood(@PathVariable String id){
        return foodService.deleteFood(id);
    }
}
