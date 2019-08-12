$(document).ready(function(){
    
    addListenerForm();
})

function addListenerForm(){
    $(document).on('click', '#logoutLi',function(){
        
        if($('#logoutLi').text() === 'Login'){
            window.location.href = "login.html";
        } else{
            $('#logoutLi').text('Login');
        }
        
        
    })
}