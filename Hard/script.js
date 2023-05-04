// Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all.

//First we need to create this pii object inside of a function to keep it private
function customer() {
  // Next we will create the pii object
  const pii = {
    name: "Aubrey",
    socialSecurityNumber: "000-00-0000",
    address: "5035 Stevens Mill Rd.",
    phone: "000-000-0000",

    //Now we will create a function within this fuction to make only the name accessable
    displayName() {
      return this.name;
    },
  };

  // Now we will need to return an object with a method that can access the pii object's displayName method
  return {
    displayName: function () {
      return pii.displayName();
    },
  };
}

// Now if we call on customer and the display name method we created inside the function, we can access it, but nothing else
console.log(customer().displayName());
