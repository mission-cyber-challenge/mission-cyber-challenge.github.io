var nav = 0;
//welcome


//navigation buttons
function navPlus()
{
    nav++;
    switchScreens();

}
function navBack()
{
    nav--;
    switchScreens();
}

function tryAgain()
{
    nav = 3;
    switchScreens();
}


//display screen based on nav#
function switchScreens()
{
    //screen 1 (welcome)
    if (nav == 0)
    {
        document.getElementById("game-text-2").innerHTML = "Welcome to Mission Cyber!";
       
    }
    //screen 2 (purpose)
    if (nav==1)
    {
        document.getElementById("game-text-2").innerHTML = "At Mission Cyber, we keep the planet safe by making good online choices!";
        
    }

    //screen 3 (level 1 info)
    if (nav == 2)
    {
        document.getElementById("game-text-2").innerHTML = "The first level of defense is creating a good password";
        document.getElementById("game-text-3").style.visibility = "visible";
        document.getElementById("game-text-3").innerHTML = "Try creating a strong password and see how well it stands up to enemy attacks!";
        
    }
    //screen 4 (level 1)
    if (nav == 3)
    {

        
        
        document.getElementById("game-text-2").style.display = "none";
        document.getElementById("game-text-2").innerHTML = "";
        document.getElementById("back-button").style.display = "none";
        document.getElementById("next-button").style.display = "none";
        document.getElementById("password-test").style.display = "block";
        document.getElementById("SubmitButton").style.display = "block";
        document.getElementById("navigation").style.display = "none";
        //begin game 1 here
        document.getElementById("password-inputs").style.display = "block";
        document.getElementById("game-text-3").innerHTML = "Please limit your password to 20 characters. "
        document.getElementById("password-test").style.display = "block";
        document.getElementById("SubmitButton").style.display = "block";
        

        
    }
    //screen 5 (results)

    if (nav == 4)
    {
        passTest();
        document.getElementById("game-text-3").style.display = "none";
        document.getElementById("game-text-2").innerHTML = result;
        document.getElementById("try-again").style.display = "block";
        document.getElementById("next-button").style.display = "none";
        


    }
}



//game 1: password strength
var capitals = 0;
var lowers = 0;
var nums = 0;
var symbols = 0;

var score = 0;
var strength = "";
var components = 0;


window.onload = (function () {
    var password = document.getElementById("password-test").value;
    
});


function getPassScore()
{
    resetValues();
    var password = document.getElementById("password-test").value;
    

    for (var i = 0; i < password.length; i++)
    {
        var code = password.charCodeAt(i);
        
        getCharType(code);
        

    }
    

    //calculate score
    calculateScore(password);
    
    document.getElementById("password-inputs").style.display = "none";
    document.getElementById("SubmitButton").style.display = "none";
    document.getElementById("password-test").style.display = "none";
    document.getElementById("next-button").style.display = "block";
    document.getElementById("game-text-3").style.display = "none";




    document.getElementById("game-text-1").innerHTML = ("Score: " + score);
    document.getElementById("game-text-1").style.display = "block";
    document.getElementById("game-text-2").innerHTML = ("Strength: " + strength);
    document.getElementById("game-text-2").style.display = "block";
    document.getElementById("navigation").style.display = "block";
    document.getElementById("next-button").style.display = "block";
    document.getElementById("next-button").style.width = "200px";
    document.getElementById("next-button").style.marginLeft = "-5%";

    document.getElementById("next-button").innerHTML = "Test Password!";
    document.getElementById("try-again").style.display = "none";
    


    
}

function resetValues()
{
    //reset values to 0 in case there was an error in submitting previously or values were stored from defaults
    capitals = 0;
    lowers = 0;
    nums = 0;
    symbols = 0;
}

function getCharType(char)
{
    

    //capitals
    if (char >= 65 && char <= 90)
    {
        capitals++;
    }
     //lowers   
    else if (char >= 97 && char <=122)
    {
        lowers++;
    }
    //numbers
    else if (char >= 48 && char <= 57)
    {
        nums++;
    }
    //symbols
    else if ((char >= 33 && char <= 47) || (char >= 58 && char <= 64) || (char >= 91 && char <= 96) || (char >= 123 && char <= 126))
    {
        symbols++;
    }
    else
    {
        window.alert("There was an illegal character in your password. Please limit passwords to capital and lowercase letters, numbers, and symbols. Check you password and try again.");

    }
        

}

function calculateScore(password)
{
    var multiplier = 0;
    if (capitals >0)
    {
        multiplier+= 26;
        components++;

    } 
    if (lowers > 0)
    {
        multiplier += 26;
        components++;
    }  
    if (nums > 0)
    {
        multiplier += 10;
        components++;
    }
    if (symbols > 0)
    {
        multiplier += 32;
        components++;
    }
    if (password.length >= 8)
        components++;
        
    score = password.length * multiplier;
    
   if (score > 1000)
        strength = "Strong";
    else if (score > 700)
        strength = "Medium";
    else
        strength = "Weak";



}

//testing password
var result = ""
function passTest()
{
    if (score > 1000)
        result = "Your password was strong enough to keep enemies out!";
    else 
        result = "Looks like your password wasn't strong enough...";
}
