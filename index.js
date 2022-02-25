var numberofbuttons = document.querySelectorAll(".qwe").length;
for(var i = 0 ; i < numberofbuttons ; i++){
    document.querySelectorAll(".qwe")[i].addEventListener("click",function(){
        
                var audio = new Audio();
                audio.preload = 'auto';
                audio.src = 'siu.mp3';
                audio.play();
               
           
    });
};
addEventListener("keypress",function(e){
   if(e.key === "Enter"){
       alert("Click on button to play phrase");
   }
   
})
addEventListener("mouseover",function(){
    console.log(); 
    
 })
 