import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../assets/client1.png";
import client2 from "../assets/Ellipse.png";
import client3 from "../assets/client3.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-600 h-8 w-8 p-2 rounded-full absolute right-[-40px] hover:bg-gray-500 top-1/2 transform -translate-y-1/2 cursor-pointer`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} p-2 rounded-full h-8 w-8 bg-gray-600 hover:bg-gray-500 absolute left-[-40px] top-1/2 transform -translate-y-1/2 cursor-pointer`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const ClientTestimonials = () => {
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="clients" className="max-w-6xl pb-10  m-auto px-10">
      <h1 className="text-3xl text-center mt-20 md:text-4xl font-bold text-gray-800 mb-6">
        Testimonial
      </h1>
      <p className="text-gray-600 mb-6 text-center text-lg">
        See how our solutions have helped businesses and individuals achieve
        success.
      </p>
      <div className="mt-10">
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white mx-[20px] text-black rounded-xl shadow-lg p-4 h-[500px] lg:w-[400px] sm:w-[350px] flex flex-col items-center"
            >
              <img
                src={t.img}
                alt={t.name}
                className="h-24 mx-auto w-24 rounded-full object-cover border-4 border-primary mt-4"
              />
              <div className="flex flex-col items-center justify-center gap-4 p-4 flex-grow">
                <p className="text-xl font-semibold text-center">{t.name}</p>
                <p className="text-sm text-gray-500">{t.position}</p>
                <p className="text-center text-sm md:text-base">{t.review}</p>
                {expanded[t.name] && (
                  <p className="text-center text-sm md:text-base">
                    {t.details}
                  </p>
                )}
                <button
                  className=" text-primary text-lg px-6 py-1 rounded-xl transition duration-300 "
                  onClick={() => toggleExpand(t.name)}
                >
                  {expanded[t.name] ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Sarah Jones",
    position: "Medical Student",
    img: client1,
    review:
      "Your trusted partner in secure online assessments. With cutting-edge AI-powered proctoring and unparalleled security measures, we ensure exam integrity.",
    details:
      "ProctorTech helped me take exams securely from anywhere. It’s reliable and easy to use!",
  },
  {
    name: "Dr. David Lee",
    position: "Dean of Academics, State University",
    img: client2,
    review:
      "Since implementing Proctor Tech, we've seen a significant decrease in cheating concerns and a boost in student confidence.",
    details:
      "The platform's analytics have been invaluable in improving our assessments and student outcomes.",
  },
  {
    name: "Maria Garcia",
    position: "Head of Training & Development, Global Tech Company",
    img: client3,
    review:
      "ProctorTech has revolutionized our employee certification process. We can now deliver secure assessments remotely.",
    details:
      "It's an efficient and secure solution that saves time and resources while ensuring compliance.",
  },
];

export default ClientTestimonials;
