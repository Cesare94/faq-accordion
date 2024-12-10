$(document).ready(function(){

    $(".btn").click(function() {
        $(".textAnswer").toggle(); 

        var currentSrc0 = $(".btn img").attr("src");

        if (currentSrc0.includes("icon-minus.svg")) {
            $(".btn img").attr("src", "./assets/images/icon-plus.svg");
        } else {
            $(".btn img").attr("src", "./assets/images/icon-minus.svg");
        }
    });
    
    
    
    
    
    $(".btnFirst").click(function() {
        $(".answerFirst").toggle(); 

        var currentSrc = $(".btnFirst img").attr("src");

        if (currentSrc.includes("icon-plus.svg")) {
            $(".btnFirst img").attr("src", "./assets/images/icon-minus.svg");
        } else {
            $(".btnFirst img").attr("src", "./assets/images/icon-plus.svg");
        }
    });

    $(".btnSecond").click(function() {
        $(".answerSecond").toggle(); 

        var currentSrc1 = $(".btnSecond img").attr("src");

        if (currentSrc1.includes("icon-plus.svg")) {
            $(".btnSecond img").attr("src", "./assets/images/icon-minus.svg");
        } else {
            $(".btnSecond img").attr("src", "./assets/images/icon-plus.svg");
        }
    });

    $(".btnThird").click(function() {
        $(".answerThird").toggle(); 

        var currentSrc2 = $(".btnThird img").attr("src");

        if (currentSrc2.includes("icon-plus.svg")) {
            $(".btnThird img").attr("src", "./assets/images/icon-minus.svg");
        } else {
            $(".btnThird img").attr("src", "./assets/images/icon-plus.svg");
        }
    });


 })
    
 