function calcReadTime()
{ 
    let text = document.getElementById("idArticle").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length; // \s+: It's a regular expression that splits the string with \s matching single whitespace characters and \s+ matching one or more whitespace characters.
    const timeMin = Math.ceil(words / wpm);

    return timeMin;
}

function updateReadTime()
{
    document.getElementById("idReadTimeValue").innerText = calcReadTime();
}

updateReadTime();
