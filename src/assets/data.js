

export const servicesInfo = [
    {
        title:'Digital Marketing',
        text: "Navigate the digital landscape with confidence. Our digital marketing strategies are designed to boost your online visibility, attract the right audience, and drive measurable results. From SEO to social media, we've got your digital success covered.",
        image: process.env.PUBLIC_URL + "/images/digital-marketing.png",
        path: "/digital-marketing",
        isAtLeft: false,
    },
    {
        title: "Web Design",
        text: "Unlock the full potential of your online presence with our expert web design and development services. We craft visually stunning, user-friendly websites that resonate with your brand and captivate your audience.",
        image: process.env.PUBLIC_URL + "/images/Web-Design2.png",
        path: "/web-design",
        isAtLeft: true,
    },
    {
        title: "Mobile App development",
        text: "Reach your customers wherever they are. Our mobile app development services ensure that your business stays connected with users on the go. User-centric design and cutting-edge technology combine to create apps that leave a lasting impression",
        image: process.env.PUBLIC_URL + "/images/mobile-app.png",
        path: "/web-design",
        isAtLeft: true,
    },
    {
        title:'Custom App Development',
        text: "A well-designed website is crucial for making a strong first impression and engaging your visitors. Our web design services focus on creating intuitive, responsive, and aesthetically pleasing websites that represent your brand's essence. Whether you need a simple informational site, an e-commerce platform, or a complex web application, we've got you covered.",
        image: process.env.PUBLIC_URL + "/images/Web-Design.png",
        path:'/custom-app-development'
    },
    {
        title:'Graphic Design',
        text: "A well-designed website is crucial for making a strong first impression and engaging your visitors. Our web design services focus on creating intuitive, responsive, and aesthetically pleasing websites that represent your brand's essence. Whether you need a simple informational site, an e-commerce platform, or a complex web application, we've got you covered.",
        image: process.env.PUBLIC_URL + "/images/graphic-esign.png",
        path:'/custom-app-development'
    },
    {
        title:'Search Engine Optimization',
        text: "A well-designed website is crucial for making a strong first impression and engaging your visitors. Our web design services focus on creating intuitive, responsive, and aesthetically pleasing websites that represent your brand's essence. Whether you need a simple informational site, an e-commerce platform, or a complex web application, we've got you covered.",
        image: process.env.PUBLIC_URL + "/images/Web-Design3.png",
        path:'/custom-app-development'
    },
]

export const navigationsLinksInfo = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/", sublinks: servicesInfo },
    { text: "About", path: "/" },
    { text: "Contacts", path: "/" },
];


export const slogansInfo = [
    {
        title:'Web Design and Development',
        text1:"Designing Tomorrow, Developing Today.",
        text2:"Where Ideas Take Flight: Web Design, Your Way.",
        image: process.env.PUBLIC_URL + "/images/Web-Design.png",
    },
    {
        title:'Custom App Development',
        text1:"Apps Tailored to Your Vision, Code Crafted for Success.",
        text2:"Innovation Unleashed: Your App, Your Rules.",
        image:process.env.PUBLIC_URL+"/images/graphic-esign.png",
    },
    {
        title:'Digital Marketing',
        text1:"Elevate Your Brand, Expand Your Reach.",
        text2:"Digital Mastery, Marketing Excellence.",
        image:process.env.PUBLIC_URL+"/images/graphic-esign.png",
    },
    {
        title:'Mobile App Development',
        text1:"Apps that Move with Your Business",
        text2:"Empowering Your Business, One App at a Time",
        image:process.env.PUBLIC_URL+"/images/mobile-app.png",
    },
]