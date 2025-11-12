function getFormvalue(event) {
    event.preventDefault(); // stops form from submitting / page reload

    const firstName = document.forms["form1"]["fname"].value;
    const lastName = document.forms["form1"]["lname"].value;

    alert(firstName + " " + lastName);
}

