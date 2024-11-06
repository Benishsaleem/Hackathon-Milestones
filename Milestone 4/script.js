// Get references to the form and display area
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
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3><b>Education:</b></h3>\n    <p contenteditable=\"true\">").concat(education, "</span>></p>\n\n    <h3><b>Experience:</b></h3>\n    <p contenteditable=\"true\">").concat(experience, "</span></p>\n\n    <h3><b>Skills:</b></h3>\n    <p contenteditable=\"true\">").concat(skills, "</span></p>\n   ");
    //display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
