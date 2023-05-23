// confirmcodepage-script.js

$(document).ready(function () {
    $('body').addClass('gray-bg')

    $("#register").validate({
        errorClass: "text-danger",
        errorPlacement: function (error, element) {
            var errorElement = $("#" + element.attr("id") + "-error");
            errorElement.html(error);
        },
        rules: {
            confirmCode: {
                required: true,
                Number: true
            }
        },
        messages: {
            email: "Your entered code is not match!"
        },
    });
});