import React, { Suspense } from "react";
import { motion } from "framer-motion";
import FlashDrive3D from "./components/Flashdrive3d";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const members = [
  "นายนันทกร แสงสว่าง",
  "นางสาวฑิตฐิตา ทบศรี",
  "นายราเมศวร์ ปิ่นแก้ว",
  "นายพรเอก ปานทอง",
];

// 📌 ใช้ตัวแปรเดียวเก็บลิงก์
const videoUrl =
  "https://www.youtube.com/embed/27Zu0bOlC9k?si=ADicX0vT-9-PvCEf";

export default function App() {
  return (
    <div className="relative w-screen h-screen bg-black text-white overflow-auto sm:overflow-hidden flex flex-col sm:flex-row items-center sm:justify-center">
      {/* โมเดล 3D ตรงกลาง */}
      <div
        className="
          pointer-events-none
          z-0
          flex justify-center
          h-80 w-full
          sm:absolute sm:inset-0 sm:items-center sm:justify-center sm:w-auto sm:h-auto
        "
      >
        <Suspense fallback={null}>
          <FlashDrive3D />
        </Suspense>
      </div>

      {/* UI มือถือ */}
      <div className="sm:hidden z-10 w-full px-6 pt-6 pb-20 space-y-8">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold text-center mt-32"
        >
          FLASHDRIVE
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-black bg-opacity-70 rounded p-4 max-w-md mx-auto text-base break-words"
        >
          <h2 className="font-semibold mb-3 text-xl">สมาชิก</h2>
          <ul className="list-decimal list-inside space-y-1">
            {members.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-black bg-opacity-70 rounded p-4 max-w-md mx-auto text-base break-words"
        >
          <p>
            แฟลชไดร์ฟ (USB Flash Drive) คืออุปกรณ์เก็บข้อมูลขนาดพกพา
            เชื่อมต่อผ่านพอร์ต USB ใช้เก็บไฟล์ รูปภาพ เพลง และเอกสารต่างๆ
            ได้สะดวกและรวดเร็ว
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-black bg-opacity-70 rounded p-4 max-w-md mx-auto text-base break-words"
        >
          <h2 className="font-semibold mb-3 text-xl">วิธีใช้งาน</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>เสียบพอร์ต USB กับคอมพิวเตอร์</li>
            <li>ลากไฟล์หรือคัดลอกตามต้องการ</li>
            <li>กด Eject ก่อนถอดอุปกรณ์ทุกครั้ง</li>
          </ol>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="w-full max-w-md aspect-video bg-black bg-opacity-70 rounded overflow-hidden mx-auto"
        >
          <iframe
            src={videoUrl}
            title="Flash Drive Demo"
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        </motion.div>
      </div>

      {/* UI Desktop */}
      <div className="hidden sm:block z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute top-4 left-4 pointer-events-auto bg-black bg-opacity-70 p-3 rounded max-w-xs text-sm sm:text-base break-words"
        >
          <h2 className="font-semibold mb-2 text-lg">สมาชิก</h2>
          <ul className="list-decimal list-inside space-y-1 break-words">
            {members.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-auto text-3xl sm:text-5xl font-bold"
        >
          FLASHDRIVE
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-4 right-4 pointer-events-auto bg-black bg-opacity-70 p-3 rounded max-w-xs text-sm sm:text-base break-words"
        >
          <p>
            แฟลชไดร์ฟ (USB Flash Drive) คืออุปกรณ์เก็บข้อมูลขนาดพกพา
            เชื่อมต่อผ่านพอร์ต USB ใช้เก็บไฟล์ รูปภาพ เพลง และเอกสารต่างๆ
            ได้สะดวกและรวดเร็ว
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-4 right-4 pointer-events-auto bg-black bg-opacity-70 p-3 rounded max-w-xs text-sm sm:text-base"
        >
          <h2 className="font-semibold mb-2">วิธีใช้งาน</h2>
          <ol className="list-decimal list-inside space-y-1 break-words">
            <li>เสียบพอร์ต USB กับคอมพิวเตอร์</li>
            <li>ลากไฟล์หรือคัดลอกตามต้องการ</li>
            <li>กด Eject ก่อนถอดอุปกรณ์ทุกครั้ง</li>
          </ol>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-4 left-4 pointer-events-auto w-56 sm:w-80 aspect-video bg-black bg-opacity-70 rounded overflow-hidden"
        >
          <iframe
            src={videoUrl}
            title="Flash Drive Demo"
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        </motion.div>
      </div>
    </div>
  );
}
