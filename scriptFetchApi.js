async function getUsers(callNr) {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    return users;
}

async function addUserInfoToArticle(user)
{
    let divAuthor = document.querySelector("#idAuthor");
    let h2 = document.createElement('h2');
    h2.innerHTML += "Szerzö";
    divAuthor.prepend(h2);

    let ul = document.querySelector('#idAuthorUnsortedList');
    addListItemToUnorderedList(ul, "Név: "    + user.name);
    addListItemToUnorderedList(ul, "Email: "  + user.email);
    addListItemToUnorderedList(ul, "Tel.: "   + user.phone);
    addListItemToUnorderedList(ul, "Cégnév: " + user.company.name);
}

function addListItemToUnorderedList(ul, contentListItem)
{
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(contentListItem))
    ul.appendChild(li);
}

getUsers().then(users => addUserInfoToArticle(users[Math.floor(Math.random() * 10)]));
