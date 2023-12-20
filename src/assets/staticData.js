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
        title:'Digital Marketing',
        text: "In the age of social connectivity, we'll help you make your mark. Our social media mavens craft personalized strategies to elevate your brand on platforms like Facebook, Instagram, Twitter, and LinkedIn. From content creation to community engagement, we've got the social side covered.",
        image: process.env.PUBLIC_URL + "/images/social-media.png",
        path: "/digital-marketing",
        isAtLeft: false,
    },
    {
        title: "Web & Mobile App development",
        text: "Your online presence starts with a captivating website. Our developers blend creativity with technical proficiency to build websites that not only look stunning but also deliver seamless user experiences. Whether it's a corporate site, an e-commerce platform, or a portfolio, we've got the expertise to make it happen.",
        image: process.env.PUBLIC_URL + "/images/ux.png",
        path: "/web-design",
        isAtLeft: true,
    },
    {
        title:'Custom App Development',
        text: "A well-designed website is crucial for making a strong first impression and engaging your visitors. Our web design services focus on creating intuitive, responsive, and aesthetically pleasing websites that represent your brand's essence. Whether you need a simple informational site, an e-commerce platform, or a complex web application, we've got you covered.",
        image: process.env.PUBLIC_URL + "/images/pexels-anna-nekrashevich-6802048.jpg",
        path:'/custom-app-development'
    },
    {
        title:'Domain and Hosting',
        text: "Your digital journey starts with the right domain. Our experts guide you through the domain registration process, ensuring you find the perfect online identity. And when it comes to hosting, our reliable and secure services guarantee your website is always accessible to your audience.",
        image: process.env.PUBLIC_URL + "/images/web.png",
        path: "/domain-and-hosting",
        isAtLeft: true,
    },
    {
        title:'CCTV installation',
        text: "Your digital journey starts with the right domain. Our experts guide you through the domain registration process, ensuring you find the perfect online identity. And when it comes to hosting, our reliable and secure services guarantee your website is always accessible to your audience.",
        image: process.env.PUBLIC_URL + "/images/undraw_Surveillance_re_8tkl.png",
        path: "/domain-and-hosting",
        isAtLeft: true,
    },
    {
        title:'Computer Gadgets',
        path:'/mobile-app-development',
        text: "Your digital journey starts with the right domain. Our experts guide you through the domain registration process, ensuring you find the perfect online identity. And when it comes to hosting, our reliable and secure services guarantee your website is always accessible to your audience.",
        image: process.env.PUBLIC_URL + "/images/pexels-anna-nekrashevich-6802049.jpg",
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


const slogans = [
    {
        title:'Web Design and Development',
        text1:"Designing Tomorrow, Developing Today.",
        text2:"Where Ideas Take Flight: Web Design, Your Way."
    },
    {
        title:'Custom App Development',
        text1:"Apps Tailored to Your Vision, Code Crafted for Success.",
        text2:"Innovation Unleashed: Your App, Your Rules."
    },
]

/*


3. **Digital Marketing:**
   - "Elevate Your Brand, Expand Your Reach."
   - "Digital Mastery, Marketing Excellence."

4. **Mobile App Development:**
   - "Apps that Move with Your Business."
   - "Empowering Your Business, One App at a Time."

5. **CCTV Installation:**
   - "Watchful Eyes, Secure Business."
   - "Securing Tomorrow, Today."
*/