async function getUsers(callNr) {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(`Users retrieved in ${getUsers.name}. Call-number: ${callNr}. Time in ms: ${Date.now()}`);
        console.log(users);
        return users;
}

console.log("***** Call 1 of " + getUsers.name + " (wihtout the '.then' keyword). The result will have the tpye 'Promise'");
const myUsers1 = getUsers(1);
console.log(`Use users-object after Call 1. This is no asynchron call!!! Object:`);
console.log(myUsers1);

console.log("***** Call 2 of " + getUsers.name + " (with the '.then' keyword). The result will have the type of 'Array'");
const myUsers2 = getUsers(2).then(result => {   console.log(`Use users-object after Call 2. This is an async caObject:`); 
                                                console.log(result)
                                            });



