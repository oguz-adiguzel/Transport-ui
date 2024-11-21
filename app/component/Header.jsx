"use client";
import React, { useState } from "react";
import { CiPhone } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiFlagLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { useParams, usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [rightBar, setRightBar] = useState(false);

  const nav = [
    {
      title: "Anasayfa",
      path: "/",
    },
    {
      title: "Hakkımızda",
      path: "/about",
    },
    {
      title: "Hizmetlerimiz",
      path: "/services",
    },
    {
      title: "İletişim",
      path: "/contact",
    },
  ];

  const path = usePathname()
  const router = useRouter()

  return (
    <div className={`w-full absolute ${path === '/contact' ? 'bg-white' : 'bg-transparent'}`}>
      <motion.div
        initial={{ x: "100%" }} // İlk başta ekranın dışında (sağda) başlar
        animate={{ x: rightBar ? 0 : "100%" }} // `isOpen` durumuna göre hareket eder
        transition={{ type: "spring", stiffness: 300, damping: 30 }} // Geçiş animasyonu
        className="fixed top-0 right-0 h-full w-1/4 bg-[#1B1B1B] shadow-lg z-50 p-4"
      >
        <button
          onClick={() => setRightBar(false)}
          className="text-white absolute right-5 top-5"
        >
          <MdClose size={30} />
        </button>

        <div className="w-full py-20 mt-20 px-14">
          <img className="w-44" src="logo-white.svg" />
          <p className="text-[#979797] mt-5 text-lg">
            Lojistik işletmenizin ihtiyaç duyduğu her şey burada! GlobeFarer,
            nakliye hizmeti veren şirketlere özel bir tema.
          </p>
          <p className="text-xs text-gray-500 mt-16">Destek Merkezi 7/24</p>
          <p className="text-3xl text-white mt-2">0222 000 0000</p>
          <div className="w-full flex justify-between space-x-4 mt-7">
            <div>
              <p className="text-xs text-gray-500">
                Bizi burada bulabilirsiniz
              </p>
              <p className="text-white font-bold mt-4 text-sm">Türkiye</p>
              <p className="text-white font-bold text-sm">Eskişehir</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Bizimle iletişime geçin</p>
              <p className="text-white font-bold mt-4 text-sm">
                globefarer@transport.com
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className={`w-full py-2  px-10 flex justify-between items-center ${path === '/contact' ? 'bg-black' : 'bg-gray-900'}`}>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <CiPhone size={20} color="white" />
            <p className="text-white text-xs font-extralight">0222 000 0000</p>
          </div>
          <div className="flex items-center space-x-2">
            <PiPaperPlaneTiltLight size={20} color="white" />
            <p className="text-white text-xs font-extralight">
              globefarer@transport.com
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <TfiHeadphoneAlt size={20} color="white" />
            <p className="text-white text-xs font-extralight">7/24 Destek</p>
          </div>
          <div className="flex items-center space-x-2">
            <RiFlagLine size={20} color="white" />
            <p className="text-white text-xs font-extralight">
              Takip ve İzleme
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  relative flex items-center">
        <div className="w-full border-b border-white h-20 top-0 pl-10 flex justify-between items-center">
          <img src={`${path === '/contact' ? 'logo-light.svg' : 'logo-white.svg'}`} />
          <div className="h-full flex space-x-5">
            {nav.map((item, index) => (
              <div key={index} className={`h-full ${path === item.path ? 'border-[#FACD0A] border-t-4' :''} text-white px-5 flex items-center font-bold`}>
                <p onClick={()=>router.push(item.path)} className={`cursor-pointer ${path === '/contact' ? 'text-black' : ''}`}>{item.title}</p>
              </div>
            ))}
            <div
              onClick={() => setRightBar(true)}
              className={`h-full border-l border-white text-white px-5 flex items-center font-bold hover:bg-[#F7C600] duration-500 cursor-pointer ${path === '/contact' ? 'bg-black' :''}`}
            >
              <IoIosMenu size={40}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
