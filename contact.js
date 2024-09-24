{/* <script> */}
        const name = document.getElementById('name');
       const email = document.getElementById('email');
       const address = document.getElementById('address');
       const order = document.getElementById('order');
        const form = document.getElementById('form');

       const name_error = document.getElementById('name_error');

       const email_error = document.getElementById('email_error');

        const address_error = document.getElementById('address_error');
        const order_error = document.getElementById('order_error');

form.addEventListener('submit',(e)=>
{  
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var status = false;
    if(name.value === '' || name.value == null)
        {
            e.preventDefault();
            name_error.innerHTML = "Name is required";
            status = false;
        }else{
            name_error.innerHTML = "";
            status= true;
        }
     if(!email.value.match(email_check))
             {
              e.preventDefault();
            email_error.innerHTML = "valid email is required";
            status = false;
          }else
          {
             email_error.innerHTML = "";
             status = true;
          }
          if(address.value === '' || address.value == null)
        {
            e.preventDefault();
            address_error.innerHTML = "address is required";
            status = false;
        }else{
            address_error.innerHTML = "";
            status= true;
        }
        if(order.value === '' || order.value == null)
        {
            e.preventDefault();
            order_error.innerHTML = "order is required";
            status = false;
        }else{
            order_error.innerHTML = "";
            status= true;
        }
         
   
    if(status == true){
        alert("your order is placed");
        window.location.assign("home.html")

    }
    else{
        alert("invalid message")
    }
})
// </script>