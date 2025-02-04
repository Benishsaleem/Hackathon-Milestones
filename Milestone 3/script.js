// Get references to the form
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page relaod
    // collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n\n    <h3><b>Education:</b></h3>\n    <p>").concat(education, "</p>\n\n    <h3><b>Experience:</b></h3>\n    <p>").concat(experience, "</p>\n\n    <h3><b>Skills:</b></h3>\n    <p>").concat(skills, "</p>\n   ");
    //display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
