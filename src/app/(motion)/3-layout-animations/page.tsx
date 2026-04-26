import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">Layout Animations</h1>
      <motion.div
        layout
        className="rounded-lg bg-purple-500 p-8"
        style={{ width: "fit-content" }}
      >
        <motion.button
          layout
          onClick={() => {}}
          className="rounded bg-white px-4 py-2"
        >
          Click me
        </motion.button>
      </motion.div>
    </div>
  );
}
