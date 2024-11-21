"use client";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import Counter from "../component/Counter";

const page = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
 
  const counter1 = (end) => {
    if (isVisible) {
      let currentCount = 0;
      const interval = setInterval(() => {
        if (currentCount < end) {
          currentCount += 1;
          setCount1(currentCount);
        } else {
          clearInterval(interval);
        }
      }, 0.1); // Her 20ms'de bir rakamı artırıyoruz
      return () => clearInterval(interval); // Temizleme
    }
  };

  useEffect(() => {
    counter1(5210);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Eğer bölüm göründüyse animasyonu başlat
        }
      },
      { threshold: 0.5 } // Yarı görünür olduğunda başlasın
    );

    const element = document.getElementById("counter-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="w-full text-black">
      
      <div className="w-full about-bg flex items-center">
      <div className="container mx-auto">
          <h1 className="text-white text-6xl font-bold mt-10">Hakkımızda</h1>
        </div>
      </div>
      <div className="w-full bg-white py-36">
        <div className="container mx-auto grid grid-cols-2 gap-x-28">
          <div className="pr-10">
            <img className="w-full" src="about-info-1.png" />
          </div>
          <div className="pr-20">
            <div className="border-b pb-10 border-gray-400">
              <p className="text-4xl font-bold">
                Küçük ve büyük paketler için güvenli kurye
              </p>
              <p className="mt-5 text-gray-500 text-lg">
                Küçük ve büyük tüm paketleriniz için güvenli taşımacılık
                sağlıyoruz. Yeni model araç filomuz ve deneyimli şoförlerimizle,
                her teslimatın güvenli ve sorunsuz bir şekilde varış noktasına
                ulaşmasını garanti ediyoruz
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-10 group">
              <div className="w-14 h-14 bg-[#F7C600] rounded-full flex justify-center items-center rotate-0 group-hover:rotate-90 duration-500">
                <FaPlus />
              </div>
              <div>
                <p className="text-sm font-bold">View More</p>
                <p className="text-sm font-bold">about our service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full about-info ">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <FaQuoteLeft size={50} color="white" />
          <p className="text-5xl text-white font-bold mt-7">
            Güvenle Taşıyoruz,
          </p>
          <p className="text-5xl text-white font-bold mt-3 mb-7">
            Zamanında Ulaştırıyoruz
          </p>
          <FaQuoteRight size={50} color="white" />
        </div>
      </div>
      <div className="w-full py-36 bg-[#F7C600]">
        <div className="container mx-auto grid grid-cols-4 gap-x-6">
          <div id="counter-section" className="border-l border-black pl-10">
            <p className="text-sm text-black">Teslim Edilen Paketler </p>

            <Counter start={0} end={7255} id="counter1" />
          </div>

          <div className="border-l border-black pl-10">
            <p className="text-sm text-black">Aylık KM</p>
            <Counter start={0} end={5348} id="counter2" />
          </div>

          <div className="border-l border-black pl-10">
            <p className="text-sm text-black">Tonlarca Mal</p>
            <Counter start={0} end={8500} id="counter3" />
          </div>

          <div className="border-l border-black pl-10">
            <p className="text-sm text-black">Memnun Müşteriler</p>
            <Counter start={0} end={3125} id="counter4" />
          </div>
        </div>
      </div>
      <div className="w-full py-20 bg-white">
        <div className="container mx-auto grid grid-cols-6">
          <div className="col-span-3 border-black">
            <div className="w-4/5 border-r border-black h-full">
              <div className="w-full border-b border-black py-20 pr-10">
                <p className="text-4xl font-bold">
                  Başından sonuna kadar tüm ihtiyaçlarınız bizde
                </p>
                <p className="mt-5 text-gray-500">
                  Fabrikalarınızın yüklerini güvenle ve zamanında başka
                  şehirlere taşıyoruz. Her aşamada profesyonel hizmet sunuyoruz.
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-6 group">
                <div className="w-14 h-14 bg-[#F7C600] rounded-full flex justify-center items-center rotate-0 group-hover:rotate-90 duration-500">
                  <FaPlus />
                </div>
                <div>
                  <p className="text-sm font-bold">View More</p>
                  <p className="text-sm font-bold">about our service</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex justify-center">
            <img className="w-auto" src="about-img-2.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
