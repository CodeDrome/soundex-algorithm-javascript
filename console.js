const writeToConsole = function(Text, id)
{
    var ExistingText = document.getElementById(id).innerHTML
    var NewText = "";

    if (arguments.length > 0)
    {
        if (ExistingText != "")
        {
            NewText = ExistingText;
        }

        NewText += Text;
    }
    else
    {
        NewText = ExistingText + "<br />";
    }

    document.getElementById(id).innerHTML = NewText;
}


const clearConsole = function(id)
{
    document.getElementById(id).innerHTML = "";
}
