"use client";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { IoBoatOutline } from "react-icons/io5";
import { GiRailRoad } from "react-icons/gi";
import { FiTruck } from "react-icons/fi";
import { IoAirplaneOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className="w-full bg-white">
      <div className="services-bg flex items-center">
        <div className="container mx-auto">
          <h1 className="text-white text-6xl font-bold mt-10">Hakkımızda</h1>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="container mx-auto py-20 grid grid-cols-2 gap-x-4">
          <div className="pr-10">
            <img src="services-img-1.jpg" />
          </div>
          <div className="border-l border-gray-500 flex flex-col justify-center">
            <div className="pl-10 pr-7 border-b border-gray-500 pb-6">
              <p className="text-black text-4xl font-bold pr-20">
                Hızlı ve profesyonel nakliye hizmetleri
              </p>
              <p className="text-gray-500 mt-5">
                Fabrikalarınızın yüklerini güvenle ve zamanında başka şehirlere
                taşıyoruz. Her aşamada profesyonel hizmet sunuyoruz.
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-12 group pl-10">
              <div className="w-14 h-14 bg-[#F7C600] rounded-full flex justify-center items-center rotate-0 group-hover:rotate-90 duration-500">
                <FaPlus color="black" />
              </div>
              <div className="text-black">
                <p className="text-sm font-bold">View More</p>
                <p className="text-sm font-bold">about our service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="container mx-auto border-t">
          <Accordion className="py-3" elevation={0}>
            <AccordionSummary
              expandIcon={
                <div className="w-11 h-11 rounded-full bg-[#F7C600] flex justify-center items-center">
                  <FaPlus color="black" />
                </div>
              }
              aria-controls="panel1-content"
              id="panel1-header"
              className=""
            >
              <Typography
                className="font-bold text-lg"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                Şeffaf Fiyatlandırma
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Adil ve açık fiyatlandırma
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="w-full flex justify-center">
                <p className="w-3/4 text-lg text-gray-500">
                  Müşterilerimize en adil ve açık fiyatlandırmayı sunuyoruz. Tüm
                  hizmet maliyetlerimiz, herhangi bir gizli ücret olmadan şeffaf
                  bir şekilde belirlenir. Taşımacılık sürecinizin her adımında
                  net bilgi ile güven sağlarız.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className="py-3" elevation={0}>
            <AccordionSummary
              expandIcon={
                <div className="w-11 h-11 rounded-full bg-[#F7C600] flex justify-center items-center">
                  <FaPlus color="black" />
                </div>
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                className="font-bold text-lg"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                Güvenli Taşımacılık
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Güvenlik her zaman ön planda
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="w-full flex justify-center">
                <p className="w-3/4 text-lg text-gray-500">
                  Yüklerinizin güvenliğini her zaman ön planda tutuyoruz. Modern
                  araç filomuz ve uzman ekibimizle taşımacılık sürecini
                  titizlikle yönetiyoruz. Ürünlerinizi hasarsız ve zamanında
                  teslim etmek en büyük önceliğimizdir.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className="py-3" elevation={0}>
            <AccordionSummary
              expandIcon={
                <div className="w-11 h-11 rounded-full bg-[#F7C600] flex justify-center items-center">
                  <FaPlus color="black" />
                </div>
              }
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography
                className="font-bold text-lg"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                Gerçek Zamanlı Takip
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Sürekli takip
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="w-full flex justify-center">
                <p className="w-3/4 text-lg text-gray-500">
                  {" "}
                  Taşımacılık sürecini anbean takip etme imkanı sunuyoruz.
                  Gelişmiş takip sistemlerimiz sayesinde yüklerinizin nerede
                  olduğunu her an görebilirsiniz. Şeffaf iletişim ve anlık
                  güncellemelerle içiniz raha olsun.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className="py-3" elevation={0}>
            <AccordionSummary
              expandIcon={
                <div className="w-11 h-11 rounded-full bg-[#F7C600] flex justify-center items-center">
                  <FaPlus color="black" />
                </div>
              }
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography
                className="font-bold text-lg"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                Kolay Ödeme Yöntemleri
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Pratik ödeme seçenekleri
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="w-full flex justify-center">
                <p className="w-3/4 text-lg text-gray-500">
                  {" "}
                  Hizmetlerimiz için hızlı ve pratik ödeme seçenekleri
                  sunuyoruz. İster online ister alternatif yöntemlerle,
                  işletmenizi güvenli ve zahmetsiz bir şekilde
                  tamamlayabilirsiniz. Müşteri memnuniyetini her adımda
                  önemsiyoruz.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className="py-3" elevation={0}>
            <AccordionSummary
              expandIcon={
                <div className="w-11 h-11 rounded-full bg-[#F7C600] flex justify-center items-center">
                  <FaPlus color="black" />
                </div>
              }
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography
                className="font-bold text-lg"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                Lojistikte Yeni Nesil Çözümler
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Hızlı, güvenli ve verimli
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="w-full flex justify-center">
                <p className="w-3/4 text-lg text-gray-500">
                  {" "}
                  Modern teknolojiler ve müşteri odaklı yaklaşımımızla lojistik
                  süreçlerinizi daha hızlı, güvenli ve verimli hale getiriyoruz.
                  Şeffaf fiyatlandırmadan gerçek zamanlı takibe kadar sunduğumuz
                  yenilikçi hizmetlerle taşımacılıkta fark yaratıyoruz.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="w-full h-[800px] mt-10">
        <img className="w-full h-full object-cover" src="services_img.png" />
      </div>
      <div className="container mx-auto mt-10 py-20 grid grid-cols-4 text-black">
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
      <div className="container mx-auto grid grid-cols-8 pb-20">
        <div className="col-span-3 border-r border-gray-600">
          <p className="text-black text-4xl font-bold pr-36">
            Tüm yükleriniz için hızlı ve güvenli taşımacılık
          </p>
          <p className="text-gray-500 mt-6 pr-12">
            Lorem ipsum dolor sit amet, iracundia tincidunt vix an possim audiam
            liber.
          </p>
        </div>
        <div className="col-span-5 flex flex-col items-end">
          <img className="w-5/6" src="water-img-1.jpg" />
          <div className="w-full flex justify-end border-b border-gray-600">
            <div className="w-5/6 flex justify-between items-center py-16">
              <p className="text-6xl font-bold text-black">1294</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, con sectetur elit sed laoreet nec
                tel.
              </p>
              <div className="w-14 h-14 rounded-full bg-[#F7C600] flex justify-center items-center">
                <FaPlus color="black" />
              </div>
            </div>
          </div>
          <div className="w-5/6 flex justify-between items-center py-16">
              <p className="text-6xl font-bold text-black">7951</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, con sectetur elit sed laoreet nec
                tel.
              </p>
              <div className="w-14 h-14 rounded-full bg-[#F7C600] flex justify-center items-center">
                <FaPlus color="black" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
