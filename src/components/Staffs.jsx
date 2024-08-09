import React from "react";
import "../App.css";
import ceo from "../assets/CEO.jpg";
import managigDirector from "../assets/managing-director.jpg"
import doctor1 from "../assets/doctor1.jpg"
import ceo1 from "../assets/CEO1.jpg"
import sales1 from "../assets/sales1.jpg"

const Staffs = () => {
  return (
    <div class="bg-gray-100">
      {/* <!-- Staff Section --> */}
      <section class="container mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

           {/* <!-- Staff Member 4 --> */}
           <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              class="w-24 h-24 rounded-full mb-4"
              src={ceo1}
              alt="Staff Member 4"
            />
            <h3 class="text-xl font-bold mb-2">Dinya</h3>
            <p class="text-gray-600">CEO</p>
          </div>

          {/* <!-- Staff Member 1 --> */}
          <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              class="w-28 h-28 rounded-full"
              src={ceo}
              alt="Staff Member 1"
            />
            <h3 class="text-xl font-bold mb-2">Macha</h3>
            <p class="text-gray-600">CEO</p>
          </div>

          {/* <!-- Staff Member 2 --> */}
          <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              class="w-28 h-28 rounded-full"
              src={managigDirector}
              alt="Staff Member 2"
            />
            <h3 class="text-xl font-bold mb-2">Mrema David</h3>
            <p class="text-gray-600">CEO</p>
          </div>

          {/* <!-- Staff Member 3 --> */}
          <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              class="w-28 h-28 rounded-full"
              src={doctor1}
              alt="Staff Member 3"
            />
            <h3 class="text-xl font-bold mb-2">Kenneth Kisanga</h3>
            <p class="text-gray-600">Doctor</p>
          </div>

          {/* <!-- Staff Member 5 --> */}
          <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              class="w-24 h-24 rounded-full mb-4"
              src={sales1}
              alt="Staff Member 5"
            />
            <h3 class="text-xl font-bold mb-2">Asia</h3>
            <p class="text-gray-600">Sales</p>
          </div>

          {/* <!-- Staff Member 6 --> */}
          {/* <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              class="w-24 h-24 rounded-full mb-4"
              src="https://via.placeholder.com/150"
              alt="Staff Member 6"
            />
            <h3 class="text-xl font-bold mb-2">Emily Wilson</h3>
            <p class="text-gray-600">CIO</p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Staffs;
