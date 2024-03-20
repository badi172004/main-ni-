import { sectwoDiv } from "./card.js"
import { rightDiv } from "./image.js"
import { leftDiv } from "./info.js"

const dataOne = {
    title:      "TIRADA YA WA LAGI",
    para:       "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    button:     "Contact me",
    image:      "gun.png"
}

const dataTwo = {
    title2:     "MY THANG",

    image1:     "stussy.jpg",
    para1:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button1:    "View",

    image2:     "stussy1.jpg",
    para2:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button2:    "View",

    image3:     "stussy2.jpg",
    para3:      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, minus maiores! Incidunt, voluptate velit libero saepe maxime perspiciatis enim et illo possimus deserunt hic adipisci dolor at repudiandae! Ad, cumque.",
    button3:    "View"
}

const {title, para, button, image} = dataOne
const {title2, image1, image2, image3, para1, para2, para3, button1, button2, button3} = dataTwo

sectionOne.append(leftDiv(title, para, button))
sectionOne.append(rightDiv(image))
sectionTwo.append(sectwoDiv(title2, image1, image2, image3, para1, para2, para3, button1, button2, button3))