import { FaDollarSign } from "react-icons/fa"
import { FiUsers } from "react-icons/fi";




export const webDesignService = {
    header:`A well-designed website is crucial for making a strong first impression and engaging your visitors. Our web design services focus on creating intuitive, responsive, and aesthetically pleasing websites that represent your brand's essence. Whether you need a simple informational site, an e-commerce platform, or a complex web application, we've got you covered.`,
    subHeader:'What sets our Web Design Services apart?',
    service:[
        {
            title:'Customized Designs',
            text:`We understand that each business is unique, and we tailor our designs to match your specific requirements, branding, and target audience.`,
            image:''
        },
        {
            title:'User-Centric Approach',
            text:`Our user-centered design approach ensures that your website is not only visually appealing but also intuitive and easy to navigate, providing a seamless user experience.`,
            image:''
        },
        {
            title:'Responsive Design',
            text:`With the majority of internet users accessing websites on mobile devices, we ensure your site looks great and functions flawlessly on screens of all sizes.`,
            image:''
        },
        {
            title:'Search Engine Optimization (SEO)',
            text:`We incorporate SEO best practices during the design process, helping your website rank higher on search engines and drive organic traffic.`,
            image:''
        },
        {
            title:'Conversion-Oriented Design',
            text:`Our designs are strategically crafted to encourage conversions, whether it's making a purchase, signing up for a newsletter, or filling out a contact form.`,
            image:''
        },
        {
            title:'',
            text:``,
            image:''
        },
    ]
}


export const whyChooseUseData = [
    {
        title:'Comprehensive Solutions',
        text:`By offering web design, mobile app development, and graphic design services under one roof, we streamline the creative process, ensuring consistency across all your digital assets.`,
        icon:<FaDollarSign />
    },
    {
        title:'Experienced Team',
        text:`Our team comprises experienced professionals who stay updated with the latest trends, technologies, and design principles, delivering top-notch solutions for your business.`,
        icon:<FiUsers />
    },
    // {
    //     title:'Client Collaboration',
    //     text:`We believe in open communication and collaboration with our clients. Your ideas and feedback are integral to the design process, ensuring that the final product aligns perfectly with your vision.`,
    //     icon:<FaDollarSign />
    // },
    {
        title:'Results-Driven',
        text:`We are committed to delivering tangible results. Whether it's increased website traffic, higher app downloads, or improved brand recognition, we focus on achieving measurable outcomes`,
        icon:<FaDollarSign />
    },
    {
        title:'Affordable Pricing',
        text:`Our creative services are priced competitively, providing excellent value for your investment while delivering high-quality results.`,
        icon:<FaDollarSign />
    },
]

export const servicesData = [
    {
        title:'Web Design',
        text:''
    },
    {
        title:'Mobile App development',
        text:''
    },
    {
        title:'Digital Marketing',
        text:''
    },
    {
        title:'Custom App Development',
        text:''
    },
    {
        title:'SEO & Content Writing',
        text:''
    },
]

export const navigationsLinksData = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/", sublinks: servicesData },
    { text: "About", path: "/" },
    { text: "Contacts", path: "/" },
];

export const faqData = [
    {
        question:'What is socila media ads',
        text:'At Sudo Agency, we believe in the power of innovation and design to transform businesses and create exceptional digital experiences. Our dedicated team of skilled designers, developers, and creatives work collaboratively to turn your ideas into reality and help you achieve your goals.',
    },
    {
        question:'How to get started',
        text:'At Sudo Agency, we believe in the power of innovation and design to transform businesses and create exceptional digital experiences. Our dedicated team of skilled designers, developers, and creatives work collaboratively to turn your ideas into reality and help you achieve your goals.',
    },
    {
        question:'How much does it cost',
        text:'At Sudo Agency, we believe in the power of innovation and design to transform businesses and create exceptional digital experiences. Our dedicated team of skilled designers, developers, and creatives work collaboratively to turn your ideas into reality and help you achieve your goals.',
    },
    {
        question:'What is socila media ads',
        text:'At Sudo Agency, we believe in the power of innovation and design to transform businesses and create exceptional digital experiences. Our dedicated team of skilled designers, developers, and creatives work collaboratively to turn your ideas into reality and help you achieve your goals.',
    },
    {
        question:'How to get started',
        text:'At Sudo Agency, we believe in the power of innovation and design to transform businesses and create exceptional digital experiences. Our dedicated team of skilled designers, developers, and creatives work collaboratively to turn your ideas into reality and help you achieve your goals.',
    },
    {
        question:'How much does it cost',
        text:'At Sudo Agency, we believe in the power of innovation and design to transform businesses and create exceptional digital experiences. Our dedicated team of skilled designers, developers, and creatives work collaboratively to turn your ideas into reality and help you achieve your goals.',
    },
]
  
const transition = {
    duration: 0.5,
}
export const animateTopVariants = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition
    },
    exit: {
      opacity: 0,
      y: 40,
      transition
    },
};

export const animateLeftVariants = {
    initial: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition
    },
    exit: {
      opacity: 0,
      x: -40,
      transition
    },
};

export const animateRightVariants = {
    initial: {
      opacity: 0,
      x: 40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition
    },
    exit: {
      opacity: 0,
      x: 40,
      transition
    },
};