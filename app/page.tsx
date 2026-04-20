import LandingHero from "@/components/LandingHero";
import config from "./config";

export default function HomePage() {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <LandingHero siteName={config.siteName} />
    </div>
  );
}
