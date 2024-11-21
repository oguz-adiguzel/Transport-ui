import React from 'react'

const Footer = () => {
  return (
    <div className="w-full pt-20 bg-[#1B1B1B]">
    <div className="container mx-auto grid grid-cols-6 pb-10">
      <div className="col-span-2">
        <img className="w-56" src="logo-white.svg" />
      </div>
      <div className="col-span-4 grid grid-cols-4">
        <div>
          <p className="text-white font-bold">Bölümlerimiz</p>
          <p className="mt-6 text-gray-400">Anasayfa</p>
          <p className="mt-3 text-gray-400">Hakkımızda</p>
          <p className="mt-3 text-gray-400">Hizmetlerimiz</p>
          <p className="mt-3 text-gray-400">İletişim</p>
        </div>
        <div>
          <p className="text-white font-bold">Şirket Hizmeti</p>
          <p className="mt-6 text-gray-400">Hizmetlerimiz</p>
          <p className="mt-3 text-gray-400">Ne Yapıyoruz</p>
          <p className="mt-3 text-gray-400">Bir Nakliye Talebinde Bulunun</p>
          <p className="mt-3 text-gray-400">Hava Taşımacılığı</p>
          <p className="mt-3 text-gray-400">Demiryolu Taşımacılığı</p>
          <p className="mt-3 text-gray-400">Deniz Taşımacılığı</p>
        </div>
        <div>
          <p className="text-white font-bold">Bize Ulaşın</p>
          <p className="mt-6 text-gray-400">Bizi Burada Bulun</p>
          <p className="mt-3 text-gray-400">İletişime Geçin</p>
          <p className="mt-3 text-gray-400">SSS Sayfası</p>
          <p className="mt-3 text-gray-400">Küresel Ağ</p>
          <p className="mt-3 text-gray-400">7/24 Destek</p>
        </div>
        <div>
          <p className="text-white font-bold">Son Haberler</p>
          <p className="mt-6 text-gray-400">Uzman İpuçları</p>
          <p className="mt-3 text-gray-400">Sürdürülebilir Bir Gelecek</p>
          <p className="mt-3 text-gray-400">Yeni Başlangıç</p>
          <p className="mt-3 text-gray-400">Temiz Alanlar</p>
          <p className="mt-3 text-gray-400">İpuçları ve Stratejiler</p>
        </div>
      </div>
    </div>
    <div className="w-full py-10 border-t border-gray-600">
      <p className="text-center text-gray-400 text-sm">© 2024 Adıgüzel Teknoloji, Tüm Hakları Saklıdır</p>
    </div>
  </div>
  )
}

export default Footer