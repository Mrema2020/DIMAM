import React from "react";
import { services } from "../constants";
import { logo } from "../assets";
import "../App.css";

const Services = () => {
  return (
    <div class="bg-gray-100 pt-10">
      {/* <!-- Services Section --> */}
      <section class="container mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold text-center mb-12 text-[#000033]">
          Our Services
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Service Item 1 --> */}
          <div class="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ETGZUCRhEzZ2mppRWvKSX6XZVA36aFlf9w&s"
              alt="Service 1"
              class="w-full h-64 object-cover rounded-lg"
            />
            <div class="absolute inset-0 bg-[#009900] opacity-80 rounded-lg"></div>
            <div class="absolute inset-0 flex flex-col justify-center items-center p-4 text-start">
              <h3 class="text-xl font-bold mb-4 text-[#FFFFFF]">
                Veterinary products
              </h3>
              <ul class="text-[#FFFFFF]">
                <li>Drugs</li>
                <li>Chemical</li>
                <li>Vaccines</li>
                <li>Instruments</li>
              </ul>
            </div>
          </div>

          {/* <!-- Service Item 2 --> */}
          <div class="relative">
            <img
              src="https://agriculturepost.com/wp-content/uploads/2019/04/Monsoon-2019-Farm-input-companies-seem-optimistic.jpg"
              alt="Service 2"
              class="w-full h-64 object-cover rounded-lg"
            />
            <div class="absolute inset-0 bg-[#3377ff] opacity-70 rounded-lg"></div>
            <div class="absolute inset-0 flex flex-col justify-center items-center p-4 text-start">
              <h3 class="text-xl font-bold mb-4 text-[#FFFFFF]">
                Agricultural inputs
              </h3>
              <ul class="text-[#FFFFFF] ">
                <li>Seeds</li>
                <li>Pesticides</li>
                <li>Fertilizers</li>
                <li>Knapsack</li>
                <li>Instruments</li>
              </ul>
            </div>
          </div>

          {/* <!-- Service Item 3 --> */}
          <div class="relative">
            <img
              src="https://img2.exportersindia.com/product_images/bc-full/dir_22/632635/animal-feed-supplement-1522323025-3756636.jpeg"
              alt="Service 3"
              class="w-full h-64 object-cover rounded-lg"
            />
            <div class="absolute inset-0 bg-[#1a000d] opacity-80 rounded-lg"></div>
            <div class="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
              <h3 class="text-xl font-bold mb-4 text-[#FFFFFF]">
                {" "}
                Animal feeds and nutritional suppliments
              </h3>
            </div>
          </div>

          {/* <!-- Service Item 4 --> */}
          <div class="relative">
            <img
              src="https://ccafs.cgiar.org/sites/default/files/blog/pictures/PicMonkey%20Collage.jpg"
              alt="Service 3"
              class="w-full h-64 object-cover rounded-lg opacity-40"
            />
            <div class="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
              <h3 class="text-xl font-bold mb-4 text-[#000033]">
                {" "}
                Training on livestock keeping and crop production
              </h3>
            </div>
          </div>

          {/* <!-- Service Item 5 --> */}
          <div class="relative">
            <img
              src="https://i5.walmartimages.com/seo/Large-Metal-Chicken-Coop-Walk-in-Poultry-Cage-Chicken-Cages-for-Outside-with-Waterproof-Cover-Spire-Shaped-Coop-9-8-Lx19-7-Wx-6-6-H_978d6e10-c2c9-40bf-b9b7-fe1eb8d16e2b.a52cd7661a70682067b809bfd837f524.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
              alt="Service 3"
              class="w-full h-64 object-cover rounded-lg opacity-40"
            />
            <div class="absolute inset-0 bg-[#b3b300] opacity-50 rounded-lg"></div>
            <div class="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
              <h3 class="text-xl font-bold mb-4 text-[#000033]">
                Greenhouse and Poultry cages installation
              </h3>
            </div>
          </div>

          {/* <!-- Service Item 6 --> */}
          <div class="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhP0yGp15fjHsVbBVCfvJrVcjbYGmB6kjMWuceIVpv5BcNpSwbjKgX7hZJ3FRPeKc8rHE&usqp=CAU"
              alt="Service 3"
              class="w-full h-64 object-cover rounded-lg opacity-40"
            />
            <div class="absolute inset-0 bg-[#669999] opacity-50 rounded-lg"></div>
            <div class="absolute inset-0 flex flex-col justify-center items-center p-4 text-start">
              <h3 class="text-xl font-bold mb-4 text-[#000033]">
                Veterinary Services
              </h3>
              <ul class="text-[#000033] ">
                <li>Disease diagnosis and treatment.</li>
                <li>Vaccination and animal management.</li>
                <li>Artificial Insemination (Cattle and pig).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
