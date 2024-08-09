import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div class="bg-[#000033]">
      <footer class="bg-[#000033] text-gray-200">
        <div class="container mx-auto px-4 py-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-[#009900] font-bold mb-4">Dimam Pharmagro Co LTD</h3>
              <p class="mb-4">
                Let's keep livestock together and maximize profit.
              </p>
              <p class="mb-4">&copy; 2024 DIMAM. All rights reserved.</p>
            </div>
            <div>
              <h3 class="text-[#009900] font-bold mb-4">Quick Links</h3>
              <ul>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Home
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#about" class="hover:underline">
                    About Us
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#services" class="hover:underline">
                    Services
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#contact" class="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-[#009900] font-bold mb-4">Contact Us</h3>
              <p class="mb-2">TANZANIA, Kilimanjaro, Moshi-Kiborloni & Mbuyuni</p>
              <p class="mb-2">Email: dimamtanzania@gmail.com</p>
              <p class="mb-2">Phone: +255 755 334 117</p>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-2xl hover:text-gray-400">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#" class="text-2xl hover:text-gray-400">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="text-2xl hover:text-gray-400">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="text-2xl hover:text-gray-400">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script
        src="https://kit.fontawesome.com/a076d05399.js"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};

export default Footer;
