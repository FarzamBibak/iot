// loginpage-script.js

$(document).ready(function () {
    $('body').addClass('gray-bg')

    $("#register").validate({
        errorClass: "text-danger",
        errorPlacement: function (error, element) {
            var errorElement = $("#" + element.attr("id") + "-error");
            errorElement.html(error);
        },
        rules: {
            userNameOrEmail: "required",
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            userNameOrEmail: "Please enter your user name or email address",
            password: {
                required: "Please enter your password",
                minlength: "Password must be at least 8 characters long"
            }
        },
    });
});