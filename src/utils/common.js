import { whatsappPhoneNumber, whatsappSupportMessage } from "./constants.js";

export const whatsappHandler = (messageProp = null) => {
  const phoneNumber = whatsappPhoneNumber; // ❗ NO +, NO spaces
  // const phoneNumber = "919834101034"; // ❗ NO +, NO spaces
    const message = messageProp ?? whatsappSupportMessage;
    console.log({messageProp, message,whatsappSupportMessage});
  const encodedMessage = encodeURIComponent(message);

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  let whatsappURL;

  if (isMobile) {
    // Mobile app
    whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    console.log("[WhatsApp] Opening mobile app");
  } else {
    // Desktop web
    whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    console.log("[WhatsApp] Opening web version");
  }

  console.log("[WhatsApp] Phone:", phoneNumber);
  console.log("[WhatsApp] Message:", message);
  console.log("[WhatsApp] URL:", whatsappURL);

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
};
