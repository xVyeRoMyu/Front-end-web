const message = () => {
    const header = "<div style='text-align:center;'><font size='7'>Personal Information</font></div>";
    const name = "Ticoalu, Alexander John";
    const age = 20;
    const status = "Taken";
    const major = "Informatics";
    const faculty = "Computer Science";
    const address = "Airmadidi Atas";
    const interest = "Game Developer, Medieval History, Psychology";

    return header + "<hr><font size='5'><ul style='list-style-type: square;'><li><strong>Name: </strong>" + name + "</li>" + 
        "<li><strong>Age : </strong>" + age + "</li>" +
        "<li><strong>Status : </strong>" + status + "</li>" +
        "<li><strong>Faculty : </strong>" + faculty + "</li>" +
        "<li><strong>Address : </strong>" + address + "</li>" +
        "<li><strong>Interests : </strong>" + interest + "</li></font></hr></ul>";
};

export default message;





