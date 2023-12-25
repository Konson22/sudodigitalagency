

export const servicesInfo = [
    {
        title: "Web Design",
        text: "Unlock the full potential of your online presence with our expert web design and development services. We craft visually stunning, user-friendly websites that resonate with your brand and captivate your audience.",
        image: process.env.PUBLIC_URL + "/images/Web-Design2.png",
        path: "/web-design",
        slogan:"Designing Tomorrow, Developing Today.",
    },
    {
        title:'Digital Marketing',
        text: "Navigate the digital landscape with confidence. Our digital marketing strategies are designed to boost your online visibility, attract the right audience, and drive measurable results. From SEO to social media, we've got your digital success covered.",
        image: process.env.PUBLIC_URL + "/images/Digital-Marketing-PNG-Transparent-Picture.png",
        path: "/digital-marketing",
        slogan:"Elevate Your Brand, Expand Your Reach.",
    },
    {
        title:'Graphic Design',
        text: "Whether you're establishing a new brand identity or refreshing an existing one, our team brings innovation and expertise to every project. Choose excellence, choose distinction – let our graphic design services bring your vision to life with unparalleled creativity and precision.",
        image: process.env.PUBLIC_URL + "/images/graphic-design2.png",
        path:'/graphic-design',
        slogan: "Designing Dreams, Creating Realities: Where Vision Meets Aesthetic Brilliance!.",
        // slogan:"Digital Mastery, Marketing Excellence.",
    },
    {
        title: "Mobile App development",
        text: "Reach your customers wherever they are. Our mobile app development services ensure that your business stays connected with users on the go. User-centric design and cutting-edge technology combine to create apps that leave a lasting impression",
        image: process.env.PUBLIC_URL + "/images/mobile-app2.png",
        path: "/mobile-app-development",
        slogan:"Apps that Move with Your Business",
    },
    {
        title:'Search Engine Optimization',
        text: "Elevate your online presence with our powerful SEO services. Our expert team optimizes your website for higher visibility and organic traffic. From strategic keyword placement to technical enhancements, we tailor our approach for lasting success in the competitive digital landscape. Choose excellence, choose results – choose our SEO services for a standout online presence.",
        image: process.env.PUBLIC_URL + "/images/seo.png",
        path:'/seo',
        slogan:"Unlocking Success in Every Search: SEO Mastery for Your Digital Triumph!.",
    },
    {
        title:'Custom App Development',
        text: "We specialize in turning your unique ideas into powerful, user-friendly applications that resonate with your audience. From concept to deployment, our experienced team brings innovation and technical expertise to every project. Whether you're launching a new app or enhancing an existing one, we tailor our solutions to meet your specific needs. Choose seamless functionality, choose intuitive design",
        image: process.env.PUBLIC_URL + "/images/mobile.png",
        slogan:"let our custom app development services bring your digital vision to life with precision and excellence.",
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
        image:process.env.PUBLIC_URL+"/images/Digital-Marketing-PNG-Transparent-Picture.png",
    },
    {
        title:'Mobile App Development',
        text1:"Apps that Move with Your Business",
        text2:"Empowering Your Business, One App at a Time",
        image:process.env.PUBLIC_URL+"/images/mobile-app.png",
    },
]