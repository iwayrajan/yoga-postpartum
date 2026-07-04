const WHATSAPP_NUMBER = "919999999999";
const DEFAULT_MESSAGE =
  "Hi Anamika, I would like to know about your postpartum yoga plans and pricing.";

const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

document.querySelectorAll("#whatsappLink, #floatingWhatsapp").forEach((link) => {
  link.href = whatsappUrl;
});
