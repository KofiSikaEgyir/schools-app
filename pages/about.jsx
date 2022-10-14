import React from "react";
import Image from "next/image";

function About() {
  return (
    <div>
      <section className="flex justify-center bg-white p-10 max-w-8xl mx-60 lg:max-auto mt-20">
        <div>
          <h1 className="flex justify-center text-gray-900 text-2xl font-bold  mb-5">
            About Us
          </h1>
          <p className="text-gray-900 font-semibold mb-5">
            Lorem ipsum, dolor Provident, explicabo! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Provident, explicabo! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Provident, explicabo!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Provident, explicabo! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Provident, explicabo! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Provident, explicabo! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Provident, explicabo!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Provident, explicabo! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Provident, explicabo! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Provident, explicabo! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Provident, explicabo!
          </p>
          <p className="font-semibold text-gray-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Provident, explicabo! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Provident, explicabo! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Provident, explicabo! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Provident, explicabo!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Provident, explicabo! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Provident, explicabo! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Provident, explicabo!
          </p>
        </div>
      </section>
      <div className="flex justify-center space-x-10 mt-5">
        <div className="max-w-xs bg-white rounded-3xl  shadow-md ">
          <a href="#">
            <Image
              src="/images/woode2.jpeg"
              alt="woode"
              width="1050"
              height="700"
            />
          </a>
          <div className="font-semibold mt-5 justify-center">
            <p>Philip Kofi Sika Egyir</p>
            <p>Team Lead</p>
            <p>kofisika.egyir@gmail.com</p>
            <p> +233 246 988 400</p>
          </div>
        </div>
        <div className="max-w-xs bg-white rounded-full shadow-md b">
          <a href="#">
            <Image
              src="/images/huseina.jpeg"
              alt="huseina"
              width="1050"
              height="700"
            />
          </a>
          <div className="font-semibold mt-5 justify-center">
            <p>Huseina Jamil</p>
            <p>Customer Experince Lead</p>
            <p>huseinajamil@gmail.com</p>
            <p> +233 246 988 400</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
