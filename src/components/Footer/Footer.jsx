import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">عمورضا کافه</h1>
            <p className="text-sm max-w-[300px]">
              قهوه‌ات را بنوش و باور کن من به فنجان تو نمی گنجم دیده ام در جهان
              نما چشمی که به تکرار می‌کشد فالم محمد علی بهمنی
            </p>
            <div>
              <p className="flex items-center gap-2 mt-2">
                <FaPhone />
                09303232109
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation />
                جنت آباد مرکزی شاهین شمالی خ بهار
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">لینک های سریع</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>خانه</li>
                  <li>درباره ما</li>
                  <li>تماس با ما</li>
                  <li>حریم شخصی</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">دنبال کنید</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
          </motion.div>
        </div>
        <p className="text-white text-center mt-10 border-t-2">
          copyRight &copy; 2024 AmirHoseinDeldar All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
