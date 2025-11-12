function getFormvalue(event) {
	
    //Write your code here

	event.preventDefault();

	const firstName=document.forms["form1"]["fname"].value;
	const lastname=document.forms["form2"]["lname"].value;

	alert(firstName+" "+lastname);
	


}
