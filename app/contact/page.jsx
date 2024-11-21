import React from "react";
import { IoBoatOutline } from "react-icons/io5";
import { GiRailRoad } from "react-icons/gi";
import { FiTruck } from "react-icons/fi";
import { IoAirplaneOutline } from "react-icons/io5";
const page = () => {
  return (
    <div className="w-full bg-white">
      <div className="h-[700px] flex items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98139.24319000589!2d30.462414354647233!3d39.76544582233534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc3e08220c0e5f%3A0xbc89395938049a08!2sEski%C5%9Fehir!5e0!3m2!1str!2str!4v1732021645233!5m2!1str!2str"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            style={{ border: 0 }}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
      <div className="container mx-auto py-20 grid grid-cols-4 text-black">
        <div className="flex flex-col items-center px-6">
          <IoBoatOutline size={40} />
          <p className="text-xl font-bold mt-5">Okyanus Taşımacılığı</p>
          <p className="text-center mt-3 text-gray-500">
            Dünya genelinde geniş rota ağımızla büyük hacimli yüklerinizi
            güvenli ve ekonomik bir şekilde taşıyoruz
          </p>
        </div>
        <div className="flex flex-col items-center">
          <GiRailRoad size={40} />
          <p className="text-xl font-bold mt-5">Demiryolu Taşımacılığı</p>
          <p className="text-center mt-3 text-gray-500">
            Demiryolu altyapısının gücüyle ağır ve büyük yüklenizi çevre dostu
            bir şekilde taşırız
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FiTruck size={40} />
          <p className="text-xl font-bold mt-5">Kara Taşımacılığı</p>
          <p className="text-center mt-3 text-gray-500">
            Modern filomuzla her türlü karayolu ihtiyacınızı hızlı ve güvenilir
            şekilde taşıyoruz
          </p>
        </div>
        <div className="flex flex-col items-center">
          <IoAirplaneOutline size={40} />
          <p className="text-xl font-bold mt-5">Hava Taşımacılığı</p>
          <p className="text-center mt-3 text-gray-500">
            Acil ve değerli gönderileriniz için hızlı ve etkin hava taşımacılığı
            çözümleri sunuyoruz
          </p>
        </div>
      </div>

      <div className="container mx-auto px-10 py-20 grid grid-cols-2">
        <div className=" text-black">
          <p className="text-4xl font-bold">Bizimle iletişime geçin</p>
          <p className="text-gray-500 mt-7 leading-6">
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am aliqu
            am, velit rutrum dictum lobortis, turpis justo auc tor quam, a
            auctor lorem odio in nunc innteger.
          </p>
          <p className="text-gray-500 text-sm mt-10">Destek Merkezi 7/24</p>
          <p className="text-4xl font-bold mt-3">0222 000 00 00</p>
          <div className="mt-5 flex space-x-10">
            <div className="space-y-3">
              <p className="text-gray-500 text-sm">Konumumuz</p>
              <p className="font-bold">Eskişehir / Tepebaşı</p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-500 text-sm">Bize Yazın</p>
              <p className="font-bold">globefarer@transport.com</p>
            </div>
          </div>
        </div>
        <div>
          <input
            className="w-full py-2 bg-transparent border-b border-gray-400 outline-none"
            placeholder="İsim"
          />
          <input
            className="w-full py-2 bg-transparent border-b border-gray-400 mt-6 outline-none"
            placeholder="Email"
          />
          <textarea
            className="w-full h-40 bg-transparent border-b border-gray-400 mt-6 outline-none"
            placeholder="Mesaj"
          ></textarea>
          <button className="mt-7 bg-[#F7C600] px-8 py-4 font-bold">
            + Mesaj Gönder
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
