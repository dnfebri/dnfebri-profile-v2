import { Banner } from "@/components/landing-page";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="min-h-screen bg-red-300">
        <p className="bg-primary">hello word</p>
      </div>
      <div className="min-h-screen bg-blue-300">
        <p>hello word</p>
      </div>
    </main>
  );
}
