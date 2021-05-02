/* Variables */
var mainText = document.getElementsByClassName("mainText");
var i = 0, fadeInSpeed = 14, fadeOutSpeed = 40;

function FadeIn(element, fadeSpeed)
{
    var alpha = 0;
    element.style.opacity = alpha;

    /* Set interval will call the fn every specified ms until
       clearInterval() is called. */
    var timer = setInterval(
        function() 
        {
            if (element.style.opacity >= 0.95)
            {
                element.style.opacity = 1.0;

                /* Iterative fading */
                if (i + 1 < mainText.length)
                    FadeIn(mainText[++i], fadeInSpeed);
                else
                    FadeOut(document.getElementById("body"), fadeOutSpeed);
                    
                clearInterval(timer);
            }
            alpha += 0.05;
            element.style.opacity = alpha;
        }, fadeSpeed);
}

function FadeOut(element, fadeSpeed)
{
    var alpha = 1.0;
    element.style.opacity = alpha;

    /* Set interval will call the fn every specified ms until
       clearInterval() is called. */
    var timer = setInterval(
        function() 
        {
            if (element.style.opacity <= 0.05)
            {
                element.style.opacity = 0;
                clearInterval(timer);
                window.location.replace("Site/landing.html");
            }
            alpha -= 0.05;
            element.style.opacity = alpha;
        }, fadeSpeed);
}

/* Fade in first text on load */
//FadeIn(mainText[0], fadeInSpeed);
 window.location = "https://weixianglim.github.io/home";
