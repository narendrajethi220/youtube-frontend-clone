import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"Introducing Sora — OpenAI’s text-to-video model"}
        image={"Sora.jpg"}
        author={"Open AI"}
        views={"1.2M views"}
        timestamp={"5 days ago"}
        thumbnail={"thumbnail.png"}
      ></VideoCard>
    </div>
  );
}
