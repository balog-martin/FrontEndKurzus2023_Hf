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

    // ***** Add info into unsorted list *****
    let ul = document.querySelector('#idAuthorUnsortedList');
    addAuthorInfoToUnorderedList(ul, "Név",    user.name, false);
    addAuthorInfoToUnorderedList(ul, "Email",  user.email, true);
    addAuthorInfoToUnorderedList(ul, "Tel.",   user.phone, false);
    addAuthorInfoToUnorderedList(ul, "Cégnév", user.company.name, false);
    ul.classList.add("authorInfo");

    // ***** Add info into table *****
    let table = document.querySelector('#idTableAuthor');
    addAuthorInfoToTable(table, "Név",    user.name, false);
    addAuthorInfoToTable(table, "Email",  user.email, true);
    addAuthorInfoToTable(table, "Tel.",   user.phone, false);
    addAuthorInfoToTable(table, "Cégnév", user.company.name, false);
}

function addAuthorInfoToUnorderedList(ul, tagListItem, contentListItem, isEmail)
{
    let li = document.createElement('li');

    if(isEmail)
    {
        let link = document.createElement("a");
        link.setAttribute("href", "mailto:" + contentListItem);
        link.appendChild(document.createTextNode(contentListItem));
        
        li.appendChild(document.createTextNode(tagListItem + ": "));
        li.appendChild(link);
    }
    else
    {
        li.appendChild(document.createTextNode(tagListItem + ": " + contentListItem));
    }

    ul.appendChild(li);
}

function addAuthorInfoToTable(table, header, content, isEmail)
{
    let tr = document.createElement('tr'); // table row
    let th = document.createElement('th'); // table header
    let td = document.createElement('td'); // table data

    th.appendChild(document.createTextNode(header + ":"));
    th.classList.add("authorTableHeader");

    if(isEmail)
    {
        let link = document.createElement("a");
        link.setAttribute("href", "mailto:" + content);
        link.appendChild(document.createTextNode(content));  
        td.appendChild(link);
    }
    else
    {
        td.appendChild(document.createTextNode(content));
    }

    td.classList.add("authorTableData");
    tr.appendChild(th);
    tr.appendChild(td);
    table.appendChild(tr);
}

getUsers().then(users => addUserInfoToArticle(users[Math.floor(Math.random() * 10)]));
