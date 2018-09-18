$(document).ready(function () {
    $(".author-name").click(function () {
        $('.detail').empty();
        var $popdata = $(this).parents('.row').next('.detail-content').clone();
        $('.detail').html($popdata);
        $(".detail").fadeIn();
        $("body").css({"overflow":"hidden"});
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
