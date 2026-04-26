import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Page() {
  const [show, setShow] = useState(true);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">Animate Presence</h1>
      <button
        onClick={() => setShow(!show)}
        className="mb-4 rounded bg-gray-800 px-4 py-2 text-white"
      >
        Toggle
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="h-32 w-32 rounded-lg bg-green-500"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
