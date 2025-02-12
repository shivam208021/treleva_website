// import React from "react";
// import iconOne from "../assets/iconOne.png";
// import iconTwo from "../assets/iconTwo.png";

// const ServicesSection = () => {
//   return (
//     <div id="services" className="container mx-auto mt-8">
//       <h2 className=" text-center text-3xl font-bold text-gray-800 mb-6">
//         {" "}
//         our services
//       </h2>
//       <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[336px] w-full mx-auto">
//           <div className="flex flex-col items-center p-6">
//             <img
//               src={iconOne}
//               alt="Javascript Development"
//               className="w-16 h-16"
//             />
//             <h2 className="text-[#001F3E] text-center font-inter text-[25px] font-bold leading-[33.25px] mt-4">
//               Website Development
//             </h2>
//             {/* <p className="text-[#717171] text-center font-inter text-[15px] font-medium leading-[23.145px] mt-4">
//               Lockdown exams with advanced security measures to prevent
//               cheating.
//             </p> */}
//             <ul className="mt-4 text-center  ">
//               <li className="text-[#717171] text-center font-inter text-[15px] font-medium leading-[23.145px]">
//                 Custom-built, scalable websites tailored to your business needs.
//               </li>
//               <li className="text-[#717171] text-center font-inter text-[15px] font-medium leading-[23.145px] mt-2">
//                 Secure, scalable cloud solutions for seamless business
//                 operations
//               </li>
//               <li className="text-[#717171] text-center font-inter text-[15px] font-medium leading-[23.145px] mt-2">
//                 Custom, responsive websites designed to boost your online
//                 presence
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[336px] w-full mx-auto">
//           <div className="flex flex-col items-center p-6">
//             <img src={iconTwo} alt="Java Development" className="w-16 h-16" />
//             <h2 className="text-[#001F3E] text-center font-inter text-[25px] font-bold leading-[33.25px] mt-4">
//               Mobile App Development
//             </h2>
//             <ul className="mt-4 text-center  ">
//               <li className="text-[#717171] text-center font-inter text-[15px] font-medium leading-[23.145px]">
//                 Scalable and user-friendly mobile apps for iOS and Android.
//               </li>
//               <li className="text-[#717171] text-center font-inter text-[15px] font-medium leading-[23.145px] mt-2">
//                 Tailor-made software solutions to streamline your business
//                 operations
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[336px] w-full mx-auto md:col-span-2 lg:col-span-1 lg:w-full md:w-1/2 ">
//           <div className="flex flex-col items-center p-6">
//             <img
//               src={iconThree}
//               alt="Mobile Development"
//               className="w-16 h-16"
//             />
//             <h2 className="text-[#001F3E] text-center font-inter text-[25px] font-bold leading-[33.25px] mt-4">
//               IT Bussiness Consulting
//             </h2>
//             {/* <p className="text-[#717171] text-center font-inter text-[15px] font-medium leading-[23.145px] mt-4">
//               Lockdown exams with advanced security measures to prevent
//               cheating.
//             </p> */}
//             <ul className="mt-4">
//               <li className="text-[#717171] text-center font-inter text-[15px] font-medium leading-[23.145px] mt-2">
//                 Expert guidance to optimize and scale your IT strategy for
//                 success.
//               </li>
//               <li className="text-[#717171] text-center font-inter text-[15px] font-medium leading-[23.145px] mt-2">
//                 {" "}
//                 Reliable IT support and upkeep to ensure seamless business
//                 continuity.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImg from "../assets/webdev.jpg";
import custom from "../assets/custom.jpg";
import websitedev from "../assets/websitedev.png";
import ai from "../assets/aisol.webp";
import cloud from "../assets/cloud.webp";
import mobile from "../assets/mobile.webp";
import itcon from "../assets/itcon.webp";
import maintain from "../assets/main.webp";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-600 h-8 w-8 hover:bg-gray-500 p-2 rounded-full absolute md:right-[-40px] sm:right-3 top-1/2 transform -translate-y-1/2 cursor-pointer max-w-full`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-600 h-8 w-8  p-2 rounded-full absolute md:right-[-40px] hover:bg-gray-500 sm:right-3 top-1/2 transform -translate-y-1/2 cursor-pointer`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function Appp() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (name) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const resetExpand = () => {
    setExpanded({});
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: resetExpand,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="services" className="max-w-6xl m-auto px-10">
      <h1 className="text-3xl text-center mt-20 md:text-4xl font-bold text-gray-800 mb-6">
        Services
      </h1>
      <p className="text-[#334C65] text-center font-inter text-[18px] font-medium leading-[25px] mt-4text-lg">
        With expertise in Digital, Engineering and Cloud, we deliver solutions
        that fulfill the traditional, transformational and future needs of
        clients across the globe.
      </p>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white mx-3  text-black rounded-xl shadow-lg p-4 h-[500px] lg:w-[400px]  sm:w-[350px] flex flex-col"
            >
              <div className="h-56  bg-gray-200 flex justify-center items-center rounded-t-xl">
                <img
                  src={d.img}
                  alt={d.name}
                  className="h-44 w-40 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4 flex-grow">
                <p className="text-xl font-semibold text-center">{d.name}</p>
                <p className="text-center text-sm md:text-base">{d.review}</p>
                {expanded[d.name] && (
                  <p className="text-center text-sm md:text-base">
                    {d.details}
                  </p>
                )}
                <button
                  className=" text-primary text-lg px-6 py rounded-xl transition duration-300 "
                  onClick={() => toggleExpand(d.name)}
                >
                  {expanded[d.name] ? "Learn Less" : " Learn More"}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Web Development`,
    img: heroImg,
    review: `Custom-built, scalable websites tailored to your business needs.`,
    details: `We create dynamic, responsive, and SEO-friendly websites that drive engagement and conversions.`,
  },
  {
    name: `AI Solutions`,
    img: ai,
    review: `Intelligent automation and data-driven insights to enhance efficiency.`,
    details: `Our AI-powered solutions help businesses automate processes, analyze data, and optimize decision-making.`,
  },
  {
    name: `Cloud Computing`,
    img: cloud,
    review: `Secure, scalable cloud solutions for seamless business operations.`,
    details: `We offer cloud storage, migration, and management solutions to ensure secure and efficient operations.`,
  },
  {
    name: `Website Development`,
    img: websitedev,
    review: `Custom, responsive websites designed to boost your online presence.`,
    details: `Our team builds user-friendly, visually appealing websites that improve brand recognition and engagement.`,
  },
  {
    name: `Mobile App Development`,
    img: mobile,
    review: `Scalable and user-friendly mobile apps for iOS and Android.`,
    details: `We develop custom mobile applications that enhance user experience and increase business reach.`,
  },
  {
    name: `Custom Software for Business`,
    img: custom,
    review: `Tailor-made software solutions to streamline your business operations.`,
    details: `We design and develop software tailored to your business needs, improving productivity and efficiency.`,
  },
  {
    name: `Maintenance and Support for IT Services`,
    img: maintain,
    review: `Reliable IT support and upkeep to ensure seamless business continuity.`,
    details: `Our IT maintenance services include troubleshooting, updates, and security patches for smooth operations.`,
  },
  {
    name: `IT Business Consulting`,
    img: itcon,
    review: `Expert guidance to optimize and scale your IT strategy for success.`,
    details: `Our IT consulting services help businesses implement the latest technologies and improve operational efficiency.`,
  },
];

export default Appp;
