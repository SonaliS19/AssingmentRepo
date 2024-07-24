import { Card } from "../components/ui/card"; // Import ShadCN components
import { motion } from "framer-motion"; // For animation
const ResponseCard = ({ code, title, image }) => {
  return (
    <motion.div
      className="w-full max-w-xs mx-auto my-4" // Adjust max-width for rectangular shape
      whileHover={{ scale: 1.05 }} // Scale up on hover
      transition={{ duration: 0.3 }} // Animation duration
    >
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-medium mb-2">
            {code} : {title}
          </h2>
        </div>
      </Card>
    </motion.div>
  );
};
export default ResponseCard;
