// forgetpasswordpage-script.js

$(document).ready(function () {
    $('body').addClass('gray-bg')

    $("#register").validate({
        errorClass: "text-danger",
        errorPlacement: function (error, element) {
            var errorElement = $("#" + element.attr("id") + "-error");
            errorElement.html(error);
        },
        rules: {
            email: {
                required: true,
                email: true,
            }
        },
        messages: {
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address",
            },
        },
    });
});