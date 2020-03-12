const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navLinks = document.querySelectorAll("a");
navLinks[0].innerText = siteContent.nav['nav-item-1'];
navLinks[1].innerText = siteContent.nav['nav-item-2'];
navLinks[2].innerText = siteContent.nav['nav-item-3'];
navLinks[3].innerText = siteContent.nav['nav-item-4'];
navLinks[4].innerText = siteContent.nav['nav-item-5'];
navLinks[5].innerText = siteContent.nav['nav-item-6'];

const navColor = document.querySelectorAll("a")
navColor.forEach(element => {
  element.style.color = "green";
});

// navLinks.style.color = "green"

const startButton = document.querySelector("button");
startButton.textContent = "Get Started";

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

const largeText = document.querySelector("h1");
largeText.textContent = siteContent["cta"]["h1"];

const contentH4 = document.getElementsByTagName('h4');
contentH4[0].textContent = siteContent["main-content"]["features-h4"];
contentH4[1].textContent = siteContent["main-content"]["about-h4"];
contentH4[2].textContent = siteContent["main-content"]["services-h4"];
contentH4[3].textContent = siteContent["main-content"]["product-h4"];
contentH4[4].textContent = siteContent["main-content"]["vision-h4"];
contentH4[5].textContent = siteContent["contact"]["contact-h4"];

const contentParagraph = document.getElementsByTagName("p");
contentParagraph[0].textContent = siteContent["main-content"]["features-content"];
contentParagraph[1].textContent = siteContent["main-content"]["about-content"];
contentParagraph[2].textContent = siteContent["main-content"]["services-content"];
contentParagraph[3].textContent = siteContent["main-content"]["product-content"];
contentParagraph[4].textContent = siteContent["main-content"]["vision-content"];
contentParagraph[5].textContent = siteContent["contact"]["address"];
contentParagraph[6].textContent = siteContent["contact"]["phone"];
contentParagraph[7].textContent = siteContent["contact"]["email"];
contentParagraph[8].textContent = siteContent["footer"]["copyright"];

const largeImg = document.getElementById("middle-img");
largeImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const navStart = document.createElement("a")
navStart.textContent = "Start"
const navi = document.querySelector("nav")
navi.prepend(navStart);
navStart.style.color = "red"

const navEnd = document.createElement("a")
navEnd.textContent = "End"
// const naviTwo = document.querySelector("nav")
navi.appendChild(navEnd)
navEnd.style.color = "red"