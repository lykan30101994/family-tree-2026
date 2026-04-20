"use client";

import { useRouter } from "next/navigation";

interface LandingHeroProps {
  siteName: string;
}

export default function LandingHero({ siteName }: LandingHeroProps) {
  const router = useRouter();

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col bg-white p-3 sm:p-4 lg:p-5">
      {/* Title Section */}
      <div className="w-full bg-[#f9e7c3] border border-black text-center py-3 sm:py-4 px-3 sm:px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-black">
          {siteName.toUpperCase()}
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-black mt-1.5 sm:mt-2">
          LÀNG NẠI CỬU, XÃ TRIỆU PHONG, TỈNH QUẢNG TRỊ
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4">
        {/* Buttons Section */}
        <div className="w-full lg:w-1/4 flex flex-col gap-3 sm:gap-4">
          <button
            className="w-full h-12 sm:h-14 lg:h-16 border border-black text-sm sm:text-base lg:text-lg font-bold bg-white hover:bg-gray-100 transition-colors"
            onClick={() => router.push("/about-lineage")}
          >
            THÔNG TIN HỌ NGUYỄN
          </button>
          <button
            className="w-full h-12 sm:h-14 lg:h-16 border border-black text-sm sm:text-base lg:text-lg font-bold bg-white hover:bg-gray-100 transition-colors"
            onClick={() => router.push("/dashboard/members")}
          >
            TRA CỨU GIA PHẢ
          </button>
          <button
            className="w-full h-12 sm:h-14 lg:h-16 border border-black text-sm sm:text-base lg:text-lg font-bold bg-white hover:bg-gray-100 transition-colors"
            onClick={() => router.push("/login")}
          >
            ĐĂNG NHẬP CHỈNH SỬA
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:flex-1">
          <div className="w-full border border-black overflow-hidden">
            <img
              src="/avatar/v0/honguyen.jpg"
              alt="Nhà thờ họ Nguyễn"
              className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[560px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
