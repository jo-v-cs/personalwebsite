const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    console.log("Form submitted");
    let visitorName = document.getElementById('visitorName').value;
    /* These values never used!
    let visitorEmail = document.getElementById('visitorEmail').value;
    let visitorPhone = document.getElementById('visitorPhone').value;
    */
    console.log(visitorName);
    document.getElementById('userInput').innerHTML = "<p>Thanks for reaching out, " + visitorName + "!</p>";
});