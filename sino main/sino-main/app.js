import { sectwoDiv } from "../sino-main/card.js"
import { rightDiv } from "../sino-main/image.js"
import { leftDiv } from "../sino-main/info.js"

const dataOne = {
    title:      "TIRADA YA WA LAGI",
    para:       "As a BSIT i learn a lot of this topic also html and programming, software development, database management, networking, .",
    button:     "Contact me",
    image:      "gun.png"
}

const dataTwo = {
    title2:     "MY THANG",

    image1:     "stussy.jpg",
    para1:      "The logo defining the brand started in the early 1980s, when he scrawled his surname on handcrafted boards with a simple broad-tipped marker. He then used the logo on T-shirts, shorts and caps that he sold out of his car around Laguna Beach, California.",
    button1:    "View",

    image2:     "stussy1.jpg",
    para2:      "The logo defining the brand started in the early 1980s, when he scrawled his surname on handcrafted boards with a simple broad-tipped marker. He then used the logo on T-shirts, shorts and caps that he sold out of his car around Laguna Beach, California.",
    button2:    "View",

    image3:     "stussy2.jpg",
    para3:      "The logo defining the brand started in the early 1980s, when he scrawled his surname on handcrafted boards with a simple broad-tipped marker. He then used the logo on T-shirts, shorts and caps that he sold out of his car around Laguna Beach, California.",
    button3:    "View"
}

const {title, para, button, image} = dataOne
const {title2, image1, image2, image3, para1, para2, para3, button1, button2, button3} = dataTwo

sectionOne.append(leftDiv(title, para, button))
sectionOne.append(rightDiv(image))
sectionTwo.append(sectwoDiv(title2, image1, image2, image3, para1, para2, para3, button1, button2, button3))