function getFormvalue(event) {
    event.preventDefault();

    // Get input values
    const firstName = document.forms["form1"]["fname"].value.trim();
    const lastName = document.forms["form1"]["lname"].value.trim();

    if (!firstName && !lastName) {
        alert("Please enter your name.");
        return;
    }

    alert(firstName + " " + lastName);
}
