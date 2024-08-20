//your JS code here. If required.
const student = {
  name: "Satish Gautam"
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage
console.log(student.getKeys());