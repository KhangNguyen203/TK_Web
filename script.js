var index=1;
        changeImage= function(){
            var imgs= ["hello_images/image1.png","hello_images/image2.png","hello_images/image3.png",
            "hello_images/image4.png","hello_images/image5.png","hello_images/image6.png",
            "hello_images/image7.png","hello_images/image8.png","hello_images/image9.png"];
            document.getElementById("photo").src = imgs[index];
            index++;
            if(index==9){
                index=0;
            }
        }
        setInterval(changeImage,700);
        
        function enter(){
            var a=document.getElementById("table_login1").style.display = "none";
            var c= document.getElementById("arrow_right").style.display = "block";
              var yourname = document.getElementById("login").value
              alert("Welcome" + " " + yourname +" to our store. Wish you have a nice day!")
          }
          function change1(){
            var a=document.getElementById("table_login1").style.display = "none";
            var c= document.getElementById("arrow_right").style.display = "block";
          }
          function xuat(){
            var c= document.getElementById("arrow_right").style.display = "none";
            var b=document.getElementById("table_login1").style.display = "block";
          }
         
          function repear(){
            var b=document.getElementById("menu_main2").style.display = "block";
          }
          function repear1(){
            var b=document.getElementById("menu_main2").style.display = "none";
          }
          $(document).ready(function() {
            $("#arrow").hide()

            $(window).scroll(function(){
             if ($(this).scrollTop()>=100)
                 $("#arrow").show("slow")
             else
                 $("#arrow").hide()
            })
            $("#arrow").click(function(){
                  $("html, body").animate({
                   "scrollTop": "0"
                  },3000);
               })
            $(".learn_more").click(function(){
               event.preventDefault()
               alert("Thank you for your interest!")
            })
         })
         function search(){
          var sub= document.getElementById("search").style.display = "block";
        }
        function unsub(){
          var unsub= document.getElementById("search").style.display = "none";
        }

        var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}