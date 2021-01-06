import family from "../assets/images/family.jpg";
import shokupan from "../assets/images/Shokupan.jpg";
import delivery from "../assets/images/delivery.jpg";
import mom from "../assets/images/Mom.PNG";

export const AboutData = [
  {
    head: " Mother Daughter homemade sweets",
    text:
      "We are a small local business run by a mother-daughter team. Amay, is a combination of mother May and daughter Amy’s name. Our company started from a mothers efforts to learn baking as her daughter held a love for sweets, and a daughter, who recognized her mother’s efforts and talents and wanted to celebrate her mum and share it with the rest of the world. ",
    image: `${family}`,
    pinkBg: false,
    order: true,
  },
  {
    head: "🍴 Food safe certified",
    text:
      "We are government food-safe certified as we have taken and received certification from the official government course. Furthermore, in acknowledgment with the current circumstances, we make sure to keep in line with COVID-19 protocols during pickup and delivery, so that we are not only healthy ourselves, but also keeping those who eat our sweets safe as well. ",
    image: `${shokupan}`,
    pinkBg: true,
    order: false,
  },
  {
    head: "✨ Instagram DM to order / inquire",
    text:
      "We primarily operate our business through Instagram and direct message. However, we also take orders through email as well. Please refer to the contact section of this site for the necessary links to contact us. ",
    image: `${mom}`,
    pinkBg: false,
    order: true,
  },
  {
    head: "☀️ Delivery + self pick-up available",
    text:
      "We offer both delivery and self pick-up. We are based in Richmond, BC and our delivery range goes through Richmond, Delta, Burnaby, and Vancouver, with select fees for each area. Shoot us an DM or email to discuss how we can best accommodate you! ",
    image: `${delivery}`,
    pinkBg: true,
    order: false,
  },
];
