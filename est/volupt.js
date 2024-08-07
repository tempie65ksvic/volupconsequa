function handleSubmit(formData) {
    let { name, email } = formData;
    
    if (name === undefined) {
        name = 'Anonymous';
    }
    
    if (email === undefined) {
        email = 'No email provided';
    }
    
    console.log(`Name: ${name}, Email: ${email}`);
}

const userFormData = {
    name: undefined,
    email: 'user@example.com'
};

handleSubmit(userFormData);
// Output: Name: Anonymous, Email: user@example.com
