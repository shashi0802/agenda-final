$(document).ready(function () {
    $(".activity-name").click(function () {
        $('.detail').empty();
        var $popdata = $('.detail-content').clone();
        $('.detail').html($popdata[0]);
        $(".detail").fadeIn();
        $("body").css({"overflow":"hidden"});
        console.log($popdata);
    });

    $(document).on('click', '.close', function () {
        console.log("click")
        $('.detail').fadeOut();
        $("body").css({"overflow":"scroll"});
    });

    $(document).click(function (e) {
        if (!$(e.target).hasClass("activity-name") 
            && $(e.target).parents(".detail").length === 0) 
        {
            $(".detail").fadeOut();
            $("body").css({"overflow":"scroll"});
        }
    });

    
});
