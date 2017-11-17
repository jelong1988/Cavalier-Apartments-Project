var x = document.getElementById("info_form");
var createform = document.createElement('form');
createform.setAttribute("action", "");
createform.setAttribute("method", "post");
x.appendChild(createform);

var heading = document.createElement('h2');
heading.innerHTML = "Contact Us";
createform.appendChild(heading);

var line = document.createElement('hr');
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label');
namelabel.innerHTML = "Your Name : ";
createform.appendChild(namelable);

var inputelement = document.createElement('input');
inputelement.setAttributre("type", "text");
inputelement.setAttribute("name", "name")
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label');
emaillabel.innerHTML = "Your Email: ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input');
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "email");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(eamilbreak);

var messagelabel = document.createElement('label');
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelable);

var textareaelement = document.createElement('textarea');
textareaelement.setAttribute("name", "message");
createform.appendChild(textareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input');
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "submit");
submitelement.setAttribute("value", "submit");
createform.appendChild(submitelement);
