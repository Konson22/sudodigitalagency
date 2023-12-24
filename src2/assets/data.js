

export const servicesInfo = [
    {
        title:'Digital Marketing',
        text: "Navigate the digital landscape with confidence. Our digital marketing strategies are designed to boost your online visibility, attract the right audience, and drive measurable results. From SEO to social media, we've got your digital success covered.",
        image: process.env.PUBLIC_URL + "/images/service/app-development.png",
        path: "/digital-marketing",
        isAtLeft: false,
    },
    {
        title: "Web Design",
        text: "Unlock the full potential of your online presence with our expert web design and development services. We craft visually stunning, user-friendly websites that resonate with your brand and captivate your audience.",
        image: process.env.PUBLIC_URL + "/images/ux.png",
        path: "/web-design",
        isAtLeft: true,
    },
    {
        title: "Mobile App development",
        text: "Reach your customers wherever they are. Our mobile app development services ensure that your business stays connected with users on the go. User-centric design and cutting-edge technology combine to create apps that leave a lasting impression",
        image: process.env.PUBLIC_URL + "/images/smartphone.png",
        path: "/web-design",
        isAtLeft: true,
    },
    {
        title:'Custom App Development',
        text: "A well-designed website is crucial for making a strong first impression and engaging your visitors. Our web design services focus on creating intuitive, responsive, and aesthetically pleasing websites that represent your brand's essence. Whether you need a simple informational site, an e-commerce platform, or a complex web application, we've got you covered.",
        image: process.env.PUBLIC_URL + "/images/service/illustration.png",
        path:'/custom-app-development'
    },
    {
        title:'Graphic Design',
        text: "A well-designed website is crucial for making a strong first impression and engaging your visitors. Our web design services focus on creating intuitive, responsive, and aesthetically pleasing websites that represent your brand's essence. Whether you need a simple informational site, an e-commerce platform, or a complex web application, we've got you covered.",
        image: process.env.PUBLIC_URL + "/images/service/graphic-designer.png",
        path:'/custom-app-development'
    },
    {
        title:'Search Engine Optimization',
        text: "A well-designed website is crucial for making a strong first impression and engaging your visitors. Our web design services focus on creating intuitive, responsive, and aesthetically pleasing websites that represent your brand's essence. Whether you need a simple informational site, an e-commerce platform, or a complex web application, we've got you covered.",
        image: process.env.PUBLIC_URL + "/images/service/seo.png",
        path:'/custom-app-development'
    },
]

export const navigationsLinksInfo = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/", sublinks: servicesInfo },
    { text: "About", path: "/" },
    { text: "Contacts", path: "/" },
];
