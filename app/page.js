"use client";
import { CiPhone } from "react-icons/ci";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="w-full pt-1 pb-12 text-black bg-[#E5E5E5]">
      <div className="w-[90%] mx-auto flex justify-between">
        <img className="" src="logo-light.svg" />
        <div className="flex items-start relative z-30 top-7 border-t border-gray-400 pt-8 pr-20">
          <div className="flex items-center mr-20 space-x-2">
            <CiPhone size={20} />
            <p className="text-sm">0222 000 00 00</p>
          </div>
          <div className="flex items-center mr-96 space-x-2">
            <PiPaperPlaneTiltLight size={20} />
            <p className="text-sm">globefarer@transport.com</p>
          </div>
          <div className="ml-7 text-gray-700 font-bold">
            <ul className="space-y-2">
              <li className='cursor-pointer' onClick={()=>router.push('/')}>Anasayfa</li>
              <li className='cursor-pointer' onClick={()=>router.push('/about')}>Hakkımızda</li>
              <li className='cursor-pointer' onClick={()=>router.push('/services')}>Hizmetlerimiz</li>
              <li className='cursor-pointer'>İletişim</li>
              <li className="">
                <button className="border-[#F7C600] border px-5 py-1">
                  Giriş
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-36 pb-80 grid grid-cols-2 px-10">
        <div>
          <p className="text-6xl font-bold">Yeni fikirler</p>
          <div style={{}}>
            <div className="animatedText">Yolda</div>
          </div>
          {/* <p className="text-6xl font-bold bg-[#F7C600] inline-block mt-2 }">
            Yolda
          </p> */}
          <p className="text-gray-500 mt-5">Dijitalleşen dünyada,</p>
          <p className="text-gray-500">
            Nakliye şirketlerini teknoloji ile buluşturuyoruz.
          </p>
          <button className="bg-[#F7C600] text-gray-700 font-bold px-6 py-3 mt-5">
            + Daha Fazla
          </button>
        </div>

        <motion.div
          initial={{ y: "-100%" }} // İlk başta ekranın üst dışında başlar
          animate={{ y: "0" }} // `isOpen` durumuna göre hareket eder
          transition={{ type: "spring", stiffness: 100, damping: 100 }} // Geçiş animasyonu
          className="absolute top-0 right-56"
        >
          <img className="" src="coming-soon-img.png" />
        </motion.div>

        {/* <div>
          <img className="absolute top-0 right-56" src="coming-soon-img.png" />
        </div> */}
      </div>
      <div className="container mx-auto py-40 grid grid-cols-4 px-10">
        <div className="border-l border-black pl-7">
          <p className="text-gray-700 text-sm font-bold">Kalan Gün</p>
          <p className="font-bold text-6xl mt-2">00</p>
        </div>
        <div className="border-l border-black pl-7">
          <p className="text-gray-700 text-sm font-bold">Kalan Saat</p>
          <p className="font-bold text-6xl mt-2">00</p>
        </div>
        <div className="border-l border-black pl-7">
          <p className="text-gray-700 text-sm font-bold">Kalan Dakika</p>
          <p className="font-bold text-6xl mt-2">00</p>
        </div>
        <div className="border-l border-black pl-7">
          <p className="text-gry-700 text-sm font-bold">Kalan Saniye</p>
          <p className="font-bold text-6xl mt-2">00</p>
        </div>
      </div>
      <div className="container mx-auto px-10 py-20 grid grid-cols-2">
        <div className="">
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
}
