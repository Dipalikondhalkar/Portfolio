// typing animation

var typed = new Typed(".typing" , {
    strings: ["Full Stack Java Developer " , "UI/UX Developer !"],
    typeSpeed: 70,
    backSpeed: 20,
    loop: true 
  })

  const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_qxe5d59';


   emailjs.send("service_frvq3jq","template_qxe5d59",{
    to_name: document.getElementById("to_name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value
    });


   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Mail Sent Successfully!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

 