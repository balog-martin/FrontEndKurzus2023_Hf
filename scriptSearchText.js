function Search(e)
{
    //Debug:
    console.log(e);
    let searchInput = document.getElementById("#idSearchInput").innerText;
    console.log(searchInput);

}

//document.querySelector("idSearchInput").addEventListener("change", (updateValue) => Search(updateValue))
//ocument.querySelector("#idSearchInput").addEventListener("change", updateValue);

// ----------------------

// const input = document.querySelector("#idSearchInput");
// // const log = document.getElementById("log");

// input.addEventListener("change", updateValue);

// function updateValue(e) {
//   console.log(e);
// }

//###########################
const input = document.querySelector("#idSearchInput");
const siteOriginal = document.getElementById("idArticle").innerText;


input.addEventListener("change", updateValue);

function updateValue(e) {
  console.log(e.target.value);
}
