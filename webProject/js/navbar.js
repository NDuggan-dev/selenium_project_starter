(function()
 {
     $("#nav-placeholder").load("../html/navbar.html")  
 })(jQuery);

 let titleid = document.title.toLowerCase() + "-link";
 console.log(titleid);

 var checkExist = setInterval(function(){
     if($(`#${titleid}`).length) {
        let link = document.getElementById(`${titleid}`);
        console.log(link);
        link.setAttribute("class", "active");
        clearInterval(checkExist);

     }
 })


