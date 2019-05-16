

$.getJSON('http://demo2469824.mockable.io/best-restaurants', function(data) {
    //data is the JSON string
    
    RenderBestinMonth(data);
});

function RenderBestinMonth(data){
    var index = 0;
    $(".top_restaurant_div").each(function(){
       $( this ).children('img').attr('src',data['restaurants'][index].imgUrl);
       $( this ).children('h2').html(data['restaurants'][index].name);
       $( this ).children('#rateSpan').html("("+data['restaurants'][index].numOfRates+")");
       index ++;
    })
}