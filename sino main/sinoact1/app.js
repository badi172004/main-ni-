import { leftDiv } from "./info.js"
import { right } from "./image.js"

const data = {
    title1 : "Cute",
    title2 : "Dog",
    para1 : " Dogs serve various roles in human society, including companionship, working (such as herding, guarding, hunting, and assistance tasks), therapy and emotional support, and as service animals for people with disabilities.",
    para2 : "Dogs communicate through a combination of vocalizations (such as barking, whining, and growling), body language (like tail wagging, ear positioning, and facial expressions), and scent marking.",
    Btn1 : "Contact us",
    Btn2: "About us",
    Btn3: "Learn More",
    Btn4: "Profile",
   
    myImage : "dog.jpg"
}

const { title1,title2,para1,para2, Btn1, Btn2, Btn3, Btn4, myImage } = data

let container = document.getElementById("container")

container.append(leftDiv(title1,title2,para1,para2, Btn1, Btn2, Btn3, Btn4))
container.append(right(myImage))
