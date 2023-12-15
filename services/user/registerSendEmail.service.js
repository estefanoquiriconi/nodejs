const sendMail = require("../../helpers/email.helper");

const main = async (email, registrationCode) => {
  const emailBody = `
        <h1>Bienvenido al sistema de registro de usuarios</h1>
        <p>Para completar el proceso de registro de un nuevo usuario haga click en el siguiente enlace:</p>
        <p><a href="http://localhost:8080/users/validate/${registrationCode}">Activar mi cuenta</a></p>`;
  const emailSubject = "Bienvenido a HorizonX";

  await sendMail(email, emailSubject, emailBody);
};

module.exports = main;
