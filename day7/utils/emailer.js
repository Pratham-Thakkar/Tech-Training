const sgMail = require("@sendgrid/mail");
const { TEMPLATE_IDS, FROM_MAIL } = require("../config/sendGridConfig");

require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendResetPasswordMail = async (
  email,
  displayName,
  resetPaswordLink
) => {
  try {
    const msg = {
      to: email,
      from: FROM_MAIL,
      template_id: TEMPLATE_IDS.FORGOT_PASSWORD_TEMPLATE_ID,
      dynamicTemplateData: {
        NAME: displayName,
        RESET_PASSWORD_LINK: resetPaswordLink,
      },
    };
    await sgMail.send(msg);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

exports.sendWelcomeMail = async (email, displayName) => {
  try {
    const msg = {
      to: email,
      from: FROM_MAIL,
      template_id: TEMPLATE_IDS.WELCOME_EMAIL_TEMPLATE_ID,
      dynamicTemplateData: {
        NAME: displayName,
      },
    };
    await sgMail.send(msg);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
