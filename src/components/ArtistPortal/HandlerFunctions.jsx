

const handleNameChange = (event) => {
    const newName = event.target.value;
    if (newName.length <= 20) {
        setSelectName(newName);
    } else {
        alert('The name must be 20 characters or less.');
    }
}