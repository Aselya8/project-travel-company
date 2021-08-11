$(function () {
    $(".carousel").carousel({
        interval: 3000
    })

    $("#bookButton").on("click", function(){
        $("#bookModal").modal("show");

    });

});