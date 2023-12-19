const sendMail = require("../../helpers/email.helper");

const main = async (email, recoverPassCode) => {
  const emailBody = `
        <h1>Recuperación de contraseña</h1>
        <p>Utiliza el siguiente código para crear un nueva contraseña: ${recoverPassCode}</p>
        <p>Si no has sido tú ignora este email.</p>`;
  const emailSubject = "Recuperación de contraseña";

  await sendMail(email, emailSubject, emailBody);
};

module.exports = main;