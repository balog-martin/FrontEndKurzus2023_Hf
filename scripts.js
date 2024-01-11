function calcReadTime()
{ 
    let text = document.getElementById("idArticle").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const timeMin = Math.ceil(words / wpm);

    return timeMin;
}

function updateReadTime()
{
    document.getElementById("idReadTimeValue").innerText = calcReadTime();
}

updateReadTime();
