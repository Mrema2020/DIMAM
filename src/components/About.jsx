import React, { useState } from "react";
import "../App.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="about pt-10" id="about">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="bg-[#000033] text-white p-6 flex-1 rounded-lg flex items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                <div className={`overflow-hidden ${isExpanded ? "" : "max-h-[15rem]"} transition-all duration-500 relative`}>
                  <p className={`${isExpanded ? "line-clamp-none" : "line-clamp-15"} text-left`}>
                    Dimam Pharmagro Company Limited, we blend passion with precision to cultivate a sustainable future for agriculture and animal sector. With a steadfast commitment to nurturing crops, animal Environment and communities, we embody innovation and excellence in every facet of our operations. At Dimam Pharmagro Company Limited, we understand that agriculture and animal keeping is not just a livelihood; it's a way of life. That's why we strive to provide comprehensive solutions tailored to the unique needs of farmers, Animal keepers, and agribusinesses. From cutting-edge of high-quality veterinary products, Agricultural inputs, nutritional supplements, training, and fumigation services. We empower our customers to optimize productivity and enhance the well-being of their livestock, Environment, and crops. Driven by a deep-rooted ethos of integrity, customer satisfaction, and expertise, we prioritize environmental sustainability and animal welfare in all our endeavors. Through continuous research and partnering with trusted and reliable dealers, we harness the latest advancements in agro-science to deliver products that are not only effective but also environmentally conscious. As a trusted partner in agriculture and animal keeping, we are dedicated to fostering enduring relationships with our customers, built on trust, transparency, and mutual respect. With a team of experienced professionals and a network of strategic partnerships, we are poised to lead the way towards a greener, more prosperous future for generations to come. Join us at Dimam Pharmagro Company Limited, where innovation meets tradition, and together, let's cultivate success, one harvest at a time...
                  </p>
                </div>
                <button onClick={toggleReadMore} className="mt-4 bg-[#009900] text-white py-2 px-4 rounded-full hover:bg-[#009900] transition duration-300">
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>

            <div className="flex-1 flex items-center">
              <img
                src="https://ruforum.wordpress.com/wp-content/uploads/2021/07/image-10.png?w=289"
                alt="About Us"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
