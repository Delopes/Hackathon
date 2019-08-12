$(document).ready(function () {
    addListenerForm();
})

function addListenerForm() {
    $(document).on('click', '#submitBtn', function () {
        if ($('#login').val() === 'pedro' && $('#password').val() === 'pedro') {
            console.log('fuck');


            $('form').attr('action', 'index.html');
        } else {
            alert("Wrong username or password, please try again.")
            $('form').attr('action', 'login.html');
        }
    })

    $(document).on('click', '#signUp', function () {
        $('#loginForm').html(' <!------ Include the above in your HEAD tag ---------->' +

            '<div class="fullscreen-video-wrap">' +
            '<!-- video needs to start playing -->' +
            '<video src="forest.mov" autoplay="true" loop="true"></video>' +

            '</div>' +
            '<div class="header-overlay"></div>' +
            '<div class="wrapper fadeInDown">' +

            '<div id="formContent" style="text-align:center">' +

            '<!-- Login Form -->' +

            '<form method="POST">' +

            '<h1>Sign Up</h1>' +

            '<input type="text" id="firstName" class="fadeIn second" name="login" placeholder="First name">' +

            '<input type="text" id="lastName" class="fadeIn second" name="login" placeholder="Last name">' +

            '<input type="text" id="phone" class="fadeIn second" name="login" placeholder="Phone">' +

            '<input type="text" id="email" class="fadeIn second" name="login" placeholder="Email">' +

            '<input type="text" id="login" class="fadeIn second" name="login" placeholder="Username">' +

            '<input type="text" id="cname" name="cardname" placeholder="Name on card">' +

            '<input type="text" id="ccnum" name="cardnumber" placeholder="card number">' +

            '<input type="text" id="expmonth" name="expmonth" placeholder="Exp Month">' +

            '<input type="password" id="password" class="fadeIn third" name="login" placeholder="Password">' +

            '<input type="password" class="fadeIn third" name="login" placeholder="Repeat your password">' +


            '<input type="submit" id="submitBtn" class="fadeIn fourth" value="Log In">' +
            '<center><input type="submit" id="signUp" onclick=addToData() class="fadeIn fourth" value="Sign Up" style="display: block; margin-top: -4%;"></center>' +
            '</form>' +
            '</div>' +
            '</div>')
    })
}