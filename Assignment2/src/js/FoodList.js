$(function() {
    $.ajax({
        type: "get",
        url: "http://demo2469824.mockable.io/foods",
        dataType: "xml",
        success: function(data) {
            RenderSection5_Grid_Container(data);
            RenderMoreFoods(data);
        },
        error: function(xhr, status) {
            /* handle error here */
        }
    });
});

function RenderSection5_Grid_Container(data){
    var index = 0;
    $(".section5_grid_container").children().each(function(){
        $(this).children(".section5_text").children('h1').html(data['restaurants'][index].imgUrl);
        
        index++;

    });
}
function RenderMoreFoods(data){

}