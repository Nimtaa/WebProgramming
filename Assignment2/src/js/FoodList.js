$(function() {
    $.ajax({
        type: "get",
        url: "http://demo2469824.mockable.io/foods",
        dataType: "xml",
        success: function(data) {
            foodList = data;
            RenderSection5_Grid_Container(data);
            RenderMoreFoods(data);
        },
        error: function(xhr, status) {
            /* handle error here */
        }
    });
});

function RenderSection5_Grid_Container(data){
    var index = 3;
    
    $(".section5_grid_container").children().each(function(){
        var item = data.documentElement.getElementsByTagName("food")[index];
        $(this).children(".section5_text").children('p').html(item.firstElementChild.innerHTML + " رستوران فعال");
        $(this).children(".section5_text").children('h1').html(RenderNames(item.lastElementChild.innerHTML));
        // $(this).children("#sec5_input").css('background','url(' + data.documentElement.getElementsByTagName("imgUrl")[index] + ')');
        $(this).children("#sec5_input").css('background', "url(" + data.documentElement.getElementsByTagName("imgUrl")[index].innerHTML + ")");
        index--;
    });
}

function RenderNames(data){
    switch(data){
        case "kebab":
            return "کباب";
        case "pizza":
            return "پیتزا";
        case "burger":
            return "برگر";
        case "sandwich":
            return "ساندویچ";
        case "iranian":
            return "ایرانی";
        case "soup":
            return "سوپ";
        case "steak":
            return "استیک";
        case "fish":
            return "ماهی";
        case "juice":
            return "آبمیوه طبیعی";                
        case "breakfast":
            return "صبحانه";        
        case "salad":
            return "سالاد";
        case "pasta":
            return "پاستا";
        
        
            
        
        
    }
}
function RenderMoreFoods(data){
    var index = 0;
    $('.more_foods').children().each(function(){
        $(this).html(RenderNames(data.documentElement.getElementsByTagName("name")[index].innerHTML));
        index ++;
    });
}