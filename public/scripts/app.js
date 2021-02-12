//IIFE- immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");
    }
    window.addEventListener("load",Start);

    
})();


    
    function displayValues()

    {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phoneNo").value;
        var message = document.getElementById("message").value;
        alert( "You entered the following data: " +"\n\n"+"Name: "+ name + "\n\n" + "Email: "+email  + "\n\n" +"Phone: " +phone+ "\n\n" + "Message: " +message);
        window.location = '/home';

    }