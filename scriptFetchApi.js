async function getUsers(callNr) {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    return users;
}

async function addUserInfoToArticle(user)
{
    let divAuthor = document.querySelector("#idAuthor");
    let h2 = document.createElement('h2');
    h2.innerHTML += "Szerző";
    divAuthor.prepend(h2);

    let ul = document.querySelector('#idAuthorUnsortedList');
    addListItemToUnorderedList(ul, "Név",    user.name, false);
    addListItemToUnorderedList(ul, "Email",  user.email, true);
    addListItemToUnorderedList(ul, "Tel.",   user.phone, false);
    addListItemToUnorderedList(ul, "Cégnév", user.company.name, false);

    ul.classList.add("authorInfo");
}

function addListItemToUnorderedList(ul, tagListItem, contentListItem, isEmail)
{
    let li = document.createElement('li');

    if(isEmail)
    {
        let link = document.createElement("a");
        link.setAttribute("href", "mailto:" + contentListItem);
        link.appendChild(document.createTextNode(tagListItem + ": " + contentListItem));
        ul.appendChild(link);
    }
    else
    {
        li.appendChild(document.createTextNode(tagListItem + ": " + contentListItem));
        ul.appendChild(li);
    }
}

getUsers().then(users => addUserInfoToArticle(users[Math.floor(Math.random() * 10)]));
