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
            }
            alpha -= 0.05;
            element.style.opacity = alpha;
        }, fadeSpeed);
}

/* Fade body in on load */
FadeIn(document.getElementById("body"), 30);

/* Get sections */
const E_Sections = 
{
    PREFACE: 0,
    ABOUT: 1,
    PROJECTS: 2,
    CONTACT: 3
};

/* Indicates where the script will automatically fade in/out elements */
var arrFaded = [ true, false, false, false, false, false, false ];
var arrSrollVals = [ 4, 8, 25, 50, 70, 85, 98 ];
var prefaceSection = document.getElementsByClassName("preface")[0];
var aboutSection = document.getElementsByClassName("about")[0];
var projectsSection_1 = document.getElementsByClassName("projects_1")[0];
var projectsSection_2 = document.getElementsByClassName("projects_2")[0];
var projectsSection_3 = document.getElementsByClassName("projects_3")[0];
var projectsSection_4 = document.getElementsByClassName("projects_4")[0];
var contactSection = document.getElementsByClassName("contact")[0];
var arrSections = [ prefaceSection, aboutSection, projectsSection_1, projectsSection_2, projectsSection_3, projectsSection_4, contactSection ];

/* Indicates where the script will automatically scroll to on button-click of nav headers */
var arrSrollTargets = [ 0, 11, 32, 99 ];

/* Scroll handler */
var scrollSpeed = 14;
var scrollPercent = 0;
var scrollTop = 0;
var lastScroll = 0;
var target = arrSrollVals[0];
function ScrollDown() 
{
    window.scrollBy(0, scrollSpeed);
    if (scrollPercent < target)
        setTimeout(ScrollDown, 1);
}
function ScrollUp() 
{
    window.scrollBy(0, -scrollSpeed);
    if (scrollPercent > target)
        setTimeout(ScrollUp, 1);
}
function GetDocHeight() 
{
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
}
function ScrollDetection() 
{
    /* Get scroll parameters */
    var winHeight= window.innerHeight || (document.documentElement || document.body).clientHeight;
    scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var trackLength = GetDocHeight() - winHeight;
    scrollPercent = Math.floor(scrollTop/trackLength * 100);

    /* Fade values */
    var fadeInSpeed = 50;
    var fadeOutSpeed = 20;

    /* Scrolling downwards */
    if (scrollTop - lastScroll > 0)
    {
        for (var i = 0; i < arrFaded.length; ++i)
        {
            if (scrollPercent >= arrSrollVals[i] && !arrFaded[i])
            {
                FadeIn(arrSections[i], fadeInSpeed);
                arrFaded[i] = true;
                if (i - 1 >= 0)
                {
                    FadeOut(arrSections[i - 1], fadeOutSpeed);
                    arrFaded[i - 1] = true;
                }
                break;
            }
        }
    }

    /* Scrolling upwards */
    else
    {
        for (var i = arrFaded.length - 1; i > 0; --i)
        {
            if (scrollPercent <= arrSrollVals[i] && arrFaded[i])
            {
                FadeOut(arrSections[i], fadeOutSpeed);
                arrFaded[i] = false;
                if (i - 1 >= 0)
                {
                    FadeIn(arrSections[i - 1], fadeInSpeed);
                    arrFaded[i - 1] = true;
                }
                break;
            }
        }
    }

    lastScroll = scrollTop;
}
window.addEventListener("scroll", ScrollDetection, false);

/* Nav bar click events */
var navBarListItems = document.querySelectorAll("nav li.clickable");
function NavBarClickHandler()
{
    if (this.innerHTML === "About")
        target = arrSrollTargets[E_Sections.ABOUT];
    else if (this.innerHTML === "Projects")
        target = arrSrollTargets[E_Sections.PROJECTS];
    else if (this.innerHTML === "Contact")
        target = arrSrollTargets[E_Sections.CONTACT];
    
    if (target - scrollTop > 0)
        ScrollDown();
    else
        ScrollUp();
}
for (var i = 0; i < navBarListItems.length; ++i)
    navBarListItems[i].addEventListener("click", NavBarClickHandler);

/* External links */
var linkedInElement = document.getElementsByClassName("linkedin")[0];
linkedInElement.addEventListener("click", 
function() {
    window.open("https://www.linkedin.com/in/weixiang-lim/");
});

/* Download links */
var MindOverMatterElem = document.getElementsByClassName("MindOverMatter")[0];
MindOverMatterElem.addEventListener("click", 
function() {
    window.open("https://games.digipen.edu/games/mind-over-matter");
});
var FishieProteccElem = document.getElementsByClassName("FishieProtecc")[0];
FishieProteccElem.addEventListener("click", 
function() {
    window.open("https://games.digipen.edu/games/fishieprotecc");
});
var IllanElem = document.getElementsByClassName("Illan")[0];
IllanElem.addEventListener("click", 
function() {
    window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=507636802");
});
var MemorieElem = document.getElementsByClassName("Memorie")[0];
MemorieElem.addEventListener("click", 
function() {
    window.open("https://play.google.com/store/apps/details?id=com.neeuro.memoriemobile&hl=en_SG&gl=US");
});
