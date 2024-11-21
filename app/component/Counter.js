import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ start, end, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(start);

  // Rakamın animasyonunu başlatma
  useEffect(() => {
    if (isVisible) {
      let currentCount = start;
      const interval = setInterval(() => {
        if (currentCount < end) {
          currentCount += 100;  // Sayıyı 100'er artırıyoruz
          if (currentCount > end) currentCount = end; // Bitmişse son değeri ayarlıyoruz
          setCount(currentCount);
        } else {
          clearInterval(interval);
        }
      }, 10); // Her 100ms'de bir 100 artırıyoruz
      return () => clearInterval(interval); // Temizleme
    }
  }, [isVisible, start, end]);

  // IntersectionObserver ile bölüm göründüğünde animasyonu başlatma
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Eğer bölüm göründüyse animasyonu başlat
        }
      },
      { threshold: 0.5 } // Yarı görünür olduğunda başlasın
    );

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id]);

  return (
    <div
      id={id}
      className=""
    >
      <motion.div
        className="text-7xl text-black font-bold mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {count}
      </motion.div>
    </div>
  );
};

export default Counter;
