import WorldMap from "../../assets/world-map.png";
import { motion } from "framer-motion";

const WhereToBuy = () => {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-darkGray font-serif"
          >
            محصولات مارو از کل ایران بخرید
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="اسم"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="email"
              placeholder="ایمیل"
              className="input-style w-full "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="کشور"
              className="input-style w-full"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="primary-btn w-full"
          >
            همین الان سفارش بدید!
          </motion.button>
        </div>
      </div>
      <div className="col-span-2">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src={WorldMap}
          alt=""
          className="w-full sm:w-[500px] mx-auto"
        />
      </div>
    </div>
  );
};

export default WhereToBuy;
