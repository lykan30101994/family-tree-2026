import { ArrowLeft, BookOpenText, Landmark, MapPin, Users } from "lucide-react";
import Link from "next/link";

const coreValues = [
  "Kính tổ tiên, trọng cội nguồn",
  "Đoàn kết - nghĩa tình - tương trợ giữa các thế hệ",
  "Giữ gìn gia phong, sống trách nhiệm với gia đình và xã hội",
];

const objectives = [
  "Lưu giữ thông tin phả hệ chính xác, có hệ thống và dễ tra cứu",
  "Kết nối con cháu trong và ngoài quê hương qua nền tảng số",
  "Thuận tiện cập nhật các sự kiện gia tộc: sinh, hôn, mất, giỗ chạp",
];

export default function AboutLineagePage() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900">
      <header className="sticky top-0 z-30 bg-white/80 border-b border-stone-200 shadow-sm backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-stone-700 bg-white border border-stone-200 rounded-full hover:text-amber-700 hover:bg-amber-50 hover:border-amber-200 transition-colors"
          >
            <ArrowLeft className="size-4" />
            Quay về trang chủ
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <section className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-start gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700">
              <BookOpenText className="size-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Giới thiệu Họ Nguyễn
              </h1>
              <p className="text-stone-600 mt-2">
                Trang thông tin tổng quan về dòng họ, mục tiêu bảo tồn gia phả và
                kết nối các thế hệ con cháu.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-1.5">
                Tên dòng họ
              </p>
              <p className="text-base font-semibold text-stone-900">
                Họ Nguyễn - Làng Nại Cửu
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-1.5">
                Địa danh
              </p>
              <p className="text-base font-semibold text-stone-900 inline-flex items-center gap-2">
                <MapPin className="size-4 text-amber-700" />
                Xã Triệu Phong, tỉnh Quảng Trị
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-stone-900 inline-flex items-center gap-2">
            <Landmark className="size-5 text-amber-700" />
            Truyền thống và định hướng
          </h2>
          <p className="text-stone-600 mt-3 leading-relaxed">
            Dòng họ Nguyễn luôn đề cao nề nếp gia đình, tinh thần hiếu học và
            lòng biết ơn tổ tiên. Việc số hóa gia phả giúp thông tin được lưu
            giữ bền vững hơn, đồng thời tạo điều kiện để con cháu ở xa vẫn có
            thể theo dõi, tìm hiểu và đóng góp cho hoạt động chung của dòng họ.
          </p>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900 mb-3">
              Giá trị cốt lõi
            </h3>
            <ul className="space-y-2.5 text-stone-700">
              {coreValues.map((value) => (
                <li key={value} className="flex items-start gap-2.5">
                  <span className="mt-2 size-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900 mb-3 inline-flex items-center gap-2">
              <Users className="size-5 text-amber-700" />
              Mục tiêu của hệ thống gia phả
            </h3>
            <ul className="space-y-2.5 text-stone-700">
              {objectives.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 size-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
