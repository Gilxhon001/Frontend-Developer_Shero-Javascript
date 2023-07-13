let user = {
    first_name: "John",
    last_name: "Smith",
    age: "38",
    department: "Software"
};

// Print the object's properties
console.log("\n1) Properties of the object:");
for (let key in user) {
    console.log(key + ": " + user[key]);
}

// Delete the second property
console.log("\n2) Properties of the object after deleting the second property:");
let secondProperty = Object.keys(user)[1];
delete user[secondProperty];
for (let key in user) {
    console.log(key + ": " + user[key]);
}


// Get the object's length
let length = Object.keys(user).length;
console.log("\n3) Object's length: " + length);