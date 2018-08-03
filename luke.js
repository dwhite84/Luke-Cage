$(document).ready(function(){

    var lukeCage = $(".luke-cage");

    var themeSong = document.createElement("audio");
    themeSong.setAttribute("src", "assets/themeMusic.mp3");

    $("#musicControls").on("click", ".theme-button", function () {
        themeSong.play();
    }).on("click", ".pause-button", function(){
        themeSong.pause();
    });



    $("#sizeControls").on("click", ".normal-button", function(){
        
        lukeCage.animate({height: "400px"});
    }).on("click",".grow-button", function(){
        lukeCage.animate({height: "500px"});
    }).on("click", ".shrink-button", function(){
        lukeCage.animate({height: "100px"});
    });

    $("#visibilityControls").on("click", ".vis-button", function(){
        lukeCage.animate({opacity: "1"});
    }).on("click", "invis-button", function(){
        lukeCage.animate({opacitiy: "0.05"});
    });
    $(".vis-button").on("click", function(){
        lukeCage.animate({opacity: "1"});
    });

    $(".invis-button").on("click", function(){
        lukeCage.animate({opacity: "0.05"});
    });

    $("#stretchControls").on("click", ".stretch-btn", function(){
        lukeCage.animate({height: "1000px", width: "200px"});
    }).on("click", ".unstretch-btn", function(){
        lukeCage.animate({height: "300px", width: "450px"});
    });

    $("#moveControls").on("click",".up-button", function(){
        lukeCage.animate({top: "-=200px"}, "normal");
    }).on("click", ".down-button", function(){
        lukeCage.animate({top: "+=200px"}, "normal");
    }).on("click", ".left-button", function(){
        lukeCage.animate({left: "-=200px"}, "normal");
    }).on("click", ".right-button", function(){
        lukeCage.animate({left: "+=200px"}, "normal");
    }).on("click", ".back-button", function(){
        lukeCage.animate({top: "50px", left: "80px"}, "fast");
    });

// Keyboard moves
    $(document).keyup(function(e){
        switch(e.which){
            // move button down
            case 40: lukeCage.animate({top: "+=200px"}, "normal");
            break;
            // move button right
            case 39: lukeCage.animate({ left: "+=200px"}, "normal");
            break;

            case 38: lukeCage.animate({ top: "-=200px"}, "normal");
            break;

            case 37: lukeCage.animate({left: "-=200px"}, "normal");
            break;

            default: break;
        }
    })

});