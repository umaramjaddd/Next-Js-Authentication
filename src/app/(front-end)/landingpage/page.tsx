import React from "react";
// import no from "@/src/Images/Purple And White Smartphone Playful Facebook Cover .webp";
// import no from '@/src/Images/d3bdd64a66509287c367f354383b8a85_t.jpeg';
import no from "../../../Images/d3bdd64a66509287c367f354383b8a85_t.jpeg";

export default function page() {
  const items = Array.from({ length: 100 });
  console.log(no);

  return (
    <>
      {/* Header */}
      <div
        className="bg-red-400  min-w-[280px] max-w-none h-[300px]"
        className="flex flex-wrap justify-between items-center gap-x-10 gap-y-3 bg-blue-300 p-4"
      >
        <p className="text-3xl font-bold">Spotify</p>
        <div className="flex space-x-6  items-center hidden mobile:flex">
          <p className="font-medium hover:text-blue-500 font-bold">Premium</p>
          <p className="font-medium hover:text-blue-500 font-bold">Support</p>
          <p className="font-medium hover:text-blue-500 font-bold">Download</p>
          <div className="flex space-x-6 items-center hidden sm:flex">
            <button className="font-medium text-white rounded bg-blue-500 border py-2 px-3 border-blue-600 font-bold   hover:text-blue-500 hover:bg-white ">
              Create free account
            </button>
            <button className="font-medium text-blue-500 rounded bg-white border py-2 px-7 border-blue-600 font-bold   hover:text-white hover:bg-blue-500 ">
              Login
            </button>
          </div>
          <p className="sm:hidden">toggle</p>
        </div>
      </div>

      {/* Body */}

      <div className="flex flex-col bg-gray-300 min-h-[calc(100vh-74px)]">
        {/* First Section Row */}
        <div className="flex bg-red-500 flex-wrap justify-around gap-x-8 gap-y-8 p-8">
          <div className="min-w-[280px] max-w-none bg-pink-500 flex flex-col  justify-center items-center flex-1 gap-x-8 gap-y-5 p-4">
            <p className="text-blue-500 bg-red-500 text-center text-4xl font-mono">
              Real Estate Made
            </p>
            <p className="text-blue-900 text-4xl text-center font-bold font-mono">
              Simplere
            </p>
            <p className="text-blue-500 text-4xl text-center font-mono">
              for everyone!
            </p>

            <p className="text-black bg-red-400 self-auto text-2xl font-mono text-center ">
              Try it yourself. Download App now
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-3 justify-center">
              <img
                src="https://static.wixstatic.com/media/84770f_eb358dba3c764099b17fd5241d42c715~mv2.png/v1/fill/w_137,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Download_on_the_App_Store_Badge.png"
                alt=""
              />
              <img
                src="https://static.wixstatic.com/media/84770f_75b1345329464348876e3c99f0c1833f~mv2.png/v1/fill/w_140,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Google_Play_Store_badge_EN.png"
                alt=""
              />
            </div>
          </div>

          <img
            className="min-w-[280px] aspect-square  flex-1 object-contain"
            src="https://static.wixstatic.com/media/af36fd_aa44f336d2984902a3df264c89721c42~mv2.png/v1/fill/w_832,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Purple%20And%20White%20Smartphone%20Playful%20Facebook%20Cover%20.png"
            alt="okkk"
          />
        </div>

        {/* 2nd Section Row */}
        <div className="flex bg-red-500 flex-wrap justify-around gap-x-8 gap-y-8 p-8">
          <div className="min-w-[280px] max-w-none bg-pink-500 flex flex-col items-center justify-center flex-1 gap-x-8 gap-y-5 p-4">
            <div className="w-70p">
              <p className="text-blue-900 bg-red-500  text-4xl font-mono">
                One App.
              </p>
              <p className="text-blue-900 text-4xl   font-mono">
                Multiple Functions,
              </p>
              <p className="text-blue-900 text-4xl  font-mono">
                Many Solutions
              </p>
            </div>
          </div>

          <div className="min-w-[280px] max-w-none bg-orange-500  flex flex-col  justify-center flex-1 gap-x-8 gap-y-5 p-4">
            <div className="w-full bg-blue-500 space-y-5 md:w-70p ">
              <div className=" md:px-8">
                <p className="text-blue-900 bg-red-500  text-2xl font-mono">
                  Join thousands of happy property seekers and sellers
                </p>
              </div>

              <p className=" text-justify text-xl   font-mono md:pl-8">
                Looking for your dream property in Malta? Have a property
                portfolio or want to sell or rent your property directly? Join
                thousands of happy property seekers and sellers who have found
                success with our reliable and trustworthy real estate app.
                Yitaku provides tailored solutions to meet your goals and ensure
                a seamless experience from start to finish. Let us help you find
                your perfect match and achieve your property goals. Download the
                app today to get started!
              </p>

              <button className="font-medium text-blue-500 rounded bg-white border py-2 px-7 border-blue-600 font-bold   hover:text-white hover:bg-blue-500 ">
              Download the app
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
