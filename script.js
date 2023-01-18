(function()
{
      
         let  img = document.querySelectorAll('li img');
         let   text = document.querySelector('.text');
         let  card = document.querySelector('.card' );
      
         for (let i =0; i< img.length; i++){
             img[i].addEventListener('click', function(){
                
                text.style.display ="none";

                card.style.background = "url(" +this.getAttribute("src") + ") no-repeat top center";
               card.style.backgroundSize = "cover";
               card.style.height = "100vh "
              });
        
         }
           
})();
 

