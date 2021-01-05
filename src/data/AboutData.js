import family from "../assets/images/family.jpg";
import shokupan from "../assets/images/Shokupan.jpg";
import delivery from "../assets/images/delivery.jpg";
import instagram from "../assets/images/instagram.JPG";

export const AboutData = [
  {
    head: "🤍 Mother Daughter homemade sweets",
    text:
      "We are a small family, mother and daughter, business local to Vancouver that loves to create homemade sweets.",
    image: `${family}`,
    pinkBg: false,
    order: true,
  },
  {
    head: "🍴 Food safe certified",
    text:
      "In acknowledging these current circumstances, we make sure ourselves to keep in line with COVID-19 protocols so that not only are we ourselves safe but others who eat our homemade sweets as well are too.",
    image: `${shokupan}`,
    pinkBg: true,
    order: false,
  },
  {
    head: "✨ Instagram DM to order / inquire",
    text:
      "We are primarily a business that operates on Instagram and prefer direct messages through as such. Email is also an option as well. Please refer to the contact section of this site for the necessary links to contact us.",
    image: `${instagram}`,
    pinkBg: false,
    order: true,
  },
  {
    head: "☀️ Delivery + self pick-up available",
    text:
      "Delivery + self pick-up options are available only to Vancouver residents! Shoot us a DM or an email and we will work with you to ensure you get your homemade sweets.",
    image: `${delivery}`,
    pinkBg: true,
    order: false,
  },
];
