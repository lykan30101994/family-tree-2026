import { getIsAdmin } from "@/utils/supabase/queries";
import { Network, Users } from "lucide-react";
import Link from "next/link";

export default async function DashboardLaunchpad() {
  const isAdmin = await getIsAdmin();
  const features = [
    {
      title: "Cây gia phả",
      description: "Xem và tương tác với sơ đồ dòng họ",
      icon: <Network className="size-8 text-amber-600" />,
      href: "/dashboard/members",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200/60",
      hoverColor: "hover:border-amber-400 hover:shadow-amber-100",
    },
  ];

  if (isAdmin) {
    features.push({
      title: "Quản lý Người dùng",
      description: "Phê duyệt tài khoản và phân quyền",
      icon: <Users className="size-8 text-rose-600" />,
      href: "/dashboard/users",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200/60",
      hoverColor: "hover:border-rose-400 hover:shadow-rose-100",
    });
  }

  return (
    <main className="flex-1 flex flex-col p-4 sm:p-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {features.map((feat) => (
          <Link
            key={feat.href}
            href={feat.href}
            className={`group flex flex-col p-6 rounded-2xl bg-white border ${feat.borderColor} ${feat.hoverColor} transition-all duration-300 hover:-translate-y-1 shadow-sm`}
          >
            <div
              className={`size-14 rounded-xl flex items-center justify-center mb-5 ${feat.bgColor} transition-colors duration-300 group-hover:bg-white border border-transparent group-hover:${feat.borderColor}`}
            >
              {feat.icon}
            </div>
            <h4 className="text-lg font-bold text-stone-800 mb-2 transition-colors">
              {feat.title}
            </h4>
            <p className="text-sm text-stone-500 line-clamp-2">
              {feat.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
