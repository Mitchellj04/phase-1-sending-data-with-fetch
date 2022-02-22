// Add your code here
// const nameAndEmail = {
//     name : "Steve",
//     email: "steve@steve.com"
// };
function submitData(firstName, email){
    const configObj = {
       method: "POST",
       headers: {
           "Content-Type" : "application/json",
           Accept: "application/json"
       },
       body: JSON.stringify({
          "name": firstName, 
           "email": email
       })
    };
    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(newContact)
        .catch(catchFunction)
 
    
}
function newContact(newID){
    document.body.innerHTML = newID.id
}
function catchFunction(error){
    document.body.innerHTML = error.message
}

console.log(submitData("Steve", "steve@steve.com"))

