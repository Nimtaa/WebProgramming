

const Restaurant = require('../models/restaurant');
const Address = require('../models/address');
const Comment = require('../models/comments');
const Food = require('../models/food');
const Category = require('../models/category');


exports.create = function(req,res){
    var newRestaurant = new Restaurant();
    newRestaurant.id = req.body.id;
    newRestaurant.name = req.body.name;
    newRestaurant.logo = req.body.name;
    newRestaurant.openingTime = req.body.openingTime;
    newRestaurant.closingTime = req.body.closingTime;
    newRestaurant.averageRate = req.body.averageRate;
    
    var newAddress = new Address();
    newAddress.id = req.body.address.id;
    newAddress.city = req.body.address.city;
    newAddress.area = req.body.address.area;
    newAddress.addressLine = req.body.address.addressLine;


    var FoodsArray = new Array();
    req.body.foods.forEach(f => {
        var newFood = new Food();
        newFood.id = f.id;
        newFood.name =f.name;
        newFood.price = f.price;
        newFood.description = f.description;
        newFood.foodSet = f.foodSet;
        FoodsArray.push(newFood);
        newRestaurant.foods.push(newFood);
    });
    
    

    var categoriesArray = new Array();
    req.body.categories.forEach(c => {
        var newCategory = new Category();
        newCategory.id = c.id;
        newCategory.name = c.name;
        categoriesArray.push(newCategory);
        newRestaurant.categories.push(newCategory);
    });
    newRestaurant.address = newAddress;
    
    newAddress.save(function(err){
        if(err){
            console.log(err);
            res.status(400).send('Unable to save Address to database');
        }else{
            categoriesArray.forEach(c => {
                c.save(function(err){
                    if(err){
                        console.log(err);
                        res.status(400).send('Problem with category');
                    }
                })
            });
            FoodsArray.forEach(f => {
                f.save(function(err){
                    if(err){
                        console.log(err);
                        res.status(400).send('Problem with Foods');
                    }
                })
            });
            newRestaurant.save(function(err){
                if(err){
                    console.log(err);
                    res.status(400).send('Unable to save Restaurant to database');
                }
                else{
                    console.log('Restaurant Added to the DataBase');
                }
            })
        }
    })
};