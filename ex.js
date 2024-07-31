class MyClass {
    value = m => m.valid;
}

// Usage:
const instance = new MyClass();
const result = instance.value(someObject);
console.log(result); // Output: the value of someObject.valid
