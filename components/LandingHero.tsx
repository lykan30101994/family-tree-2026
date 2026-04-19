"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

interface LandingHeroProps {
  siteName: string;
}

export default function LandingHero({ siteName }: LandingHeroProps) {
  const router = useRouter();

  return (
    <div className="w-[1280px] h-screen max-h-[90vh] mx-auto flex flex-col bg-white p-5">
      {/* Title Section */}
      <div className="w-full bg-[#f9e7c3] border border-black text-center py-4">
        <h1 className="text-4xl font-serif font-bold text-black">GIA PHẢ HỌ NGUYỄN</h1>
        <p className="text-lg text-black mt-2">LÀNG NẠI CỬU, XÃ TRIỆU PHONG, TỈNH QUẢNG TRỊ</p>
      </div>

      <div className="flex flex-row flex-1">
        {/* Buttons Section */}
        <div className="flex flex-col justify-top items-center w-1/4 space-y-4 p-4">
          <button className="w-full h-16 border border-black text-lg font-bold bg-white hover:bg-gray-100">
            THÔNG TIN HỌ NGUYỄN
          </button>
          <button 
            className="w-full h-16 border border-black text-lg font-bold bg-white hover:bg-gray-100"
            onClick={() => router.push("/dashboard/members")}
          >
            TRA CỨU GIA PHẢ
          </button>
          <button 
            className="w-full h-16 border border-black text-lg font-bold bg-white hover:bg-gray-100"
            onClick={() => router.push("/login")}
          >
            ĐĂNG NHẬP CHỈNH SỬA
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex items-center p-1">
          <div className="w-full">
            <img
              src="/avatar/v0/honguyen.jpg"
              alt="Nhà thờ họ Nguyễn"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
