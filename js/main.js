(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);


var num=0;
var nam=0;
var sbjt=0;
var cnty=0;
var msgs=0;
var mail=0
// function validateform(e){
//     event.preventDefault();
  
// if(num!=0&&mail!=0&&cnty!=0&&msgs!=0&&sbjt!=0)
// {    event.preventDefault();
   
// }
// else{
//     alert(" Please check your entries");

    
// }



//}


  



function validatefm(){
   
    var text=document.getElementById("name").value;
    var regx=/^[a-zA-Z ]+$/;
    if(regx.test(text))
    {
        nam=1;
        document.getElementById("labelname").innerHTML="Valid";
        document.getElementById("labelname").style.visibility="visible";
        document.getElementById("labelname").style.color="green";
    }
    else{
        nam=0;
        document.getElementById("labelname").innerHTML="In-Valid Entry";
        document.getElementById("labelname").style.visibility="visible";
        document.getElementById("labelname").style.color="red";

    }

}

function validateemail(){
   
    var text1=document.getElementById("eemail").value;
    var regx=/^([a-zA-Z0-9\.-_ ]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,20})(.[a-zA-Z]{2,5})$/;
    if(regx.test(text1))
    {console.log("cnty"+cnty)
        mail=1;
        document.getElementById("labelemail").innerHTML="Valid";
        document.getElementById("labelemail").style.visibility="visible";
        document.getElementById("labelemail").style.color="green";
    }
    else{
        mail=0;
        document.getElementById("labelemail").innerHTML="In-Valid Entry";
        document.getElementById("labelemail").style.visibility="visible";
        document.getElementById("labelemail").style.color="red";

    }

}
function validatenum(){
    
    var text2=document.getElementById("mobnum").value;
    var regx=/^[0-9]+$/;
    if(regx.test(text2))
    {console.log("num"+num)
       num=1;
        document.getElementById("labelnum").innerHTML="Valid";
        document.getElementById("labelnum").style.visibility="visible";
        document.getElementById("labelnum").style.color="green";
    }
    else{
        num=0;
        document.getElementById("labelnum").innerHTML="In-Valid Entry";
        document.getElementById("labelnum").style.visibility="visible";
        document.getElementById("labelnum").style.color="red";

    }

}


function validatecty(){
    
    var text3=document.getElementById("cty").value;
    var regx=/^[a-zA-Z ]+$/;
    if(regx.test(text3))
    { console.log("cnty"+cnty)
        cnty=1;
        document.getElementById("labelcty").innerHTML="Valid";
        document.getElementById("labelcty").style.visibility="visible";
        document.getElementById("labelcty").style.color="green";
    }
    else{
        cnty=0;
        document.getElementById("labelcty").innerHTML="In-Valid Entry";
        document.getElementById("labelcty").style.visibility="visible";
        document.getElementById("labelcty").style.color="red";

    }

}
function validatesjt(){
   
    var text4=document.getElementById("subject").value;
    var required=5;
    var leng=required-text4.length;
    if(leng<=0)
    {
        sbjt=1;
        console.log(sbjt)
        document.getElementById("labelsjt").innerHTML="Done";
        document.getElementById("labelsjt").style.visibility="visible";
        document.getElementById("labelsjt").style.color="green";
    }
    else{
        sbjt=0;
        document.getElementById("labelsjt").innerHTML="more characters required";
        document.getElementById("labelsjt").style.visibility="visible";
        document.getElementById("labelsjt").style.color="red";

    }
}
    function validatemsg(){
                var text5=document.getElementById("message").value;
        var required=30;
        var leng=required-text5.length;
        if(leng<=0)
        {msgs=1;
            document.getElementById("labelmsg").innerHTML="Done";
            document.getElementById("labelmsg").style.visibility="visible";
            document.getElementById("labelmsg").style.color="green";
        }
        else{
            msgs=0;
            document.getElementById("labelmsg").innerHTML="more characters required";
            document.getElementById("labelmsg").style.visibility="visible";
            document.getElementById("labelmsg").style.color="red";
    
        }
    }
    // var submitError = document.getElementById('btnError')
    // function validateForm(){
    //     if(!validatemsg() ||!validatesjt() || !validatenum() || !validateemail() ||!validatefm()){
    //         submitError.style.display = 'block';
    //         submitError.innerHTML = 'Please fix error to submit'
    //         setTimeout(function(){submitError.style.display = 'none';}, 3000);
    //         return false;
    //     }
    // }
    function validateForm(){
        validatecty();
        validateemail();
        validatefm();
        validatemsg();
        validatenum();
        validatesjt();

        if(num==1&&mail==1&&cnty==1&&msgs==1&&sbjt==1&&nam==1)
        {


               num=0;
               nam=0;
               sbjt=0;
               cnty=0;
               msgs=0;
            return true;
            
        }
        else{
            document.getElementById("btnerror").innerHTML="please check again";
            document.getElementById("btnerror").style.visibility="visible";
            document.getElementById("btnerror").style.color="red";
            return false;
        }
    }