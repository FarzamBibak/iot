// registerpage-script.js

$(document).ready(function () {
    $('body').addClass('gray-bg')
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $("#register").validate({
        errorClass: "text-danger",
        errorPlacement: function (error, element) {
            var errorElement = $("#" + element.attr("id") + "-error");
            errorElement.html(error);
        },
        rules: {
            userName: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            },
            agreeTerms: "required"
        },
        messages: {
            userName: "Please set your user name",
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter a password",
                minlength: "Password must be at least 8 characters long"
            },
            confirmPassword: {
                required: "Please confirm your password",
                equalTo: "Passwords do not match"
            },
            agreeTerms: "Please agree to the terms and policy"
        },
    });
});
