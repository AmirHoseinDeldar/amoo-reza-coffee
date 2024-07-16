import { motion } from "framer-motion";
import coffee1 from "../../assets/coffee/coffee1.png";
import coffee3 from "../../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: coffee3,
    title: "قهوه سیاه",
    subtitle:
      "چشمهایش قهوه ای بود و به حق فهمیده ام که قهوه از سیگار اعتیادآورتر است",
  },
  {
    id: 2,
    image: coffee1,
    title: "قهوه سرد",
    subtitle:
      "چشمهایش قهوه ای بود و به حق فهمیده ام که قهوه از سیگار اعتیادآورتر است",
  },
  {
    id: 3,
    image: coffee3,
    title: "قهوه داغ",
    subtitle:
      "چشمهایش قهوه ای بود و به حق فهمیده ام که قهوه از سیگار اعتیادآورتر است",
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};
const containerVarients = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChilden: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          className="text-3xl font-bold text-lightGray"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
        >
          تازه و <span className="text-primary">خوشمزه</span>
        </motion.h1>
        <motion.p
          className="text-sm opacity-50 font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.4,
          }}
        >
          یک حبه قند در فنجان قهوه‌ تلخ شیرین نمی‌شود دو حبه قند در فنجان قهوه‌ی
          تلخ شیرین نمی‌شود سه حبه، چهار، پنج… اصلا تو بگو یک دنیا قند در این
          دنیای تلخ نه… اگر تو نباشی فال این زندگی شیرین نمی‌شود
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1,
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => (
          <div className="text-center p-4 space-y-6">
            <motion.img
              variants={containerVarients}
              initial="hidden"
              whileInView={"vaisible"}
              viewport={{ amount: 0.8 }}
              src={service.image}
              alt=""
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className="text-darkGray">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
