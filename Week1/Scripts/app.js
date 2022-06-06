//IIFE Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function

(function()
{
    //named function
    function Start()
    //let Start = () =>
    {
        console.log("App Started!...")
    }
    window.addEventListener("load", Start);
})();

