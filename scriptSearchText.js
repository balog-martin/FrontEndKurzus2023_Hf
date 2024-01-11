function Search(e)
{
    //Debug:
    console.log(e);
    let searchInput = document.getElementById("#idSearchInput").innerText;
    console.log(searchInput);
}

//document.querySelector("idSearchInput").addEventListener("change", (updateValue) => Search(updateValue))
//ocument.querySelector("#idSearchInput").addEventListener("change", updateValue);

//###########################
const input = document.querySelector("#idSearchInput");
const siteOriginal = document.getElementById("idArticle").innerHTML;


input.addEventListener("change", updateValue);

function updateValue(e) {
    let txtToSearch = e.target.value; 
    console.log(txtToSearch);

    let txtHighlighted = "<span class=searchHighlight>" + txtToSearch + "</span>";
    let siteHighlighted = siteOriginal.replace(txtToSearch, txtHighlighted);

    console.log(txtHighlighted);
    console.log(siteHighlighted);

    document.getElementById("idArticle").innerHTML = siteHighlighted;
}

function highlightFoundText()
{
    let siteHighlighted = siteOriginal;
    
}