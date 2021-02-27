
// app.js :  custom javaScript goes here 
// Name : Shrikant Kale
// Student ID: 301150258
// 28/02/2021

//IIFE- immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        //alert message while performing deletion
        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }
    window.addEventListener("load",Start);

    
})();


    // function to display user entered values in an alert box and redirect to HomePage
    function displayValues()
    {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phoneNo").value;
        var message = document.getElementById("message").value;
        alert( "You entered the following data: " +"\n\n"+"Name: "+ name + "\n\n" + "Email: "+email  + "\n\n" +"Phone: " +phone+ "\n\n" + "Message: " +message);
        window.location = '/home';

    }