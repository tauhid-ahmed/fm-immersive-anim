import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">Motion Basics</h1>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="h-32 w-32 rounded-lg bg-blue-500"
      />
    </div>
  );
}
