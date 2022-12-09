
  
  const sentEmail = () => {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    const servicId = "service_b20cg0a";
    const templateId = "template_k9r6hra";
  
    emailjs
      .send(servicId, templateId, params)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("message sent successfull");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("message sent failed");
        }
      )
      .catch((err) => {
        console.log(err);
      });
  };