import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Azer Naghiyev",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Nurana Isayeva",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Rashid Behdudov",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];
function Testimotional() {
  // slider hissesi
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <div className="py-10">
      <div className="container">
        {/* header hissesi */}
        <div
          data-aos="slide-up"
          className="text-center mb-10 max-w-[600px] mx-auto"
        >
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What our customer says
          </p>
          <h1 className="text-3xl font-bold">Testimotional</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis delectus architecto error nesciunt,
          </p>
        </div>
        {/* card hissesi */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 
                mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div>
                    <img
                      className="rounded-full w-[80px] object-cover "
                      src={data.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <div>
                      <p className="text-gray-500 text-sm py-4">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                    </div>
                  </div>
                  <p className="text-gray-500 text-9xl text-black/20 absolute z-10 top-0 right-0 font-serif ">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimotional;
