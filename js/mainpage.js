var MenuItem = document.getElementById("MenuItem")

MenuItem.style.maxHeight = "0px"

function menutoggle() {
    if(MenuItem.style.maxHeight == "0px")
    {
        MenuItem.style.maxHeight = "200px"
    }
    else
    {
        MenuItem.style.maxHeight = "0px"
    }
}

//slide-image 

// var counter = 1; 
// setInterval(function(){
//     document.getElementById('slide'+couter).checked = true 
//     counter++;
//     if(counter > 8){
//         counter = 1;
//     }
// },5000)