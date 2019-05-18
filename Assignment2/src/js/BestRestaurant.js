

$.getJSON('http://demo2469824.mockable.io/best-restaurants', function(data) {
    //data is the JSON string
    RenderBestinMonth(data);
    RenderGoodRestaurants(data);
});

function RenderBestinMonth(data){
    var index = 0;
    $(".top_restaurant_div").each(function(){
       $( this ).children('img').attr('src',data['restaurants'][index].imgUrl);
       $( this ).children('h2').html(data['restaurants'][index].name);
       $( this ).children('#top_restaurant_rateSpan').html("("+data['restaurants'][index].numOfRates+")");
       $( this ).children('.orange_rating').html("&nbsp;"+data['restaurants'][index].rate);
       $( this ).children('#top_restaurant_address').html(data['restaurants'][index].address);
       $( this ).children('.orange_rating').before(RenderStars(data['restaurants'][index].rate));
       $( this ).children('#top_restaurant_food').html(RenderFoods(data['restaurants'][index].foods));

       index ++;
    })
}

function RenderFoods(listOfFood){
    var persianList = new Array();
    for(let i = 0; i < listOfFood.length; i++){
        switch(listOfFood[i]){
            case "pizza":
                persianList.push("پیتزا");
                persianList.push("&bull;");
                break;
            case "fastfood":
                persianList.push("قست‌فود");
                persianList.push("&bull;");
                break;
            case "sandwich":
                persianList.push("ساندویج");
                persianList.push("&bull;");
                break;
            case "burger":
                persianList.push("برگر");
                persianList.push("&bull;");
                break;
        }
    }
    persianList.pop();
    return persianList;
}

function RenderStars(rate){
    var stars = new Array();
    natural_rate = Math.floor(rate);
    for (i=0;i<natural_rate;i++){
        // create checked star
        var span = $('<span />').addClass('fa fa-star checked');
        stars.push(span);
    }
    if(rate - natural_rate){
        var span = $('<span />').addClass('fa fa-star-half-full halfchecked');
        stars.push(span);
    }
    var unchecked = 5 - Math.ceil(rate);
    for(i=0;i<unchecked;i++){
        //create unchecked star
        var span = $('<span />').addClass('fa fa-star-o unchecked');
        stars.push(span);
    }

    return stars;
    
}


function RenderGoodRestaurants(data){
    var index = 3;
    $(".grid_container").children().each(function(){
        $(this).children(".section5_text").attr('src',data['restaurants'][index].imgUrl);
        $(this).children('input').after(data['restaurants'][index].name);
        index++;

    });
    
    

}