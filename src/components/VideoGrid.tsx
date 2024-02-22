import { VideoCard } from "@/components/VideoCard";

const VIDEOS = [
  {
    id: 1,
    title: "Introducing Sora — OpenAI’s text-to-video model",
    image: "image-1.jpg",
    author: "Open AI",
    views: "1.2M views",
    timestamp: "5 days ago",
    thumbnail: "thumbnail.png",
  },
  {
    id: 2,
    title: "I built an Apple Vision Pro app... visionOS tutorial",
    image: "image-2.jpg",
    author: "Beyond Fireship",
    views: "375K views",
    timestamp: "4 days ago",
    thumbnail: "thumbnail-2.png",
  },
  {
    id: 3,
    title:
      "Googles GEMINI 1.5 Just Surprised EVERYONE! (GPT-4 Beaten Again) Finally RELEASED!",
    image: "image-3.jpg",
    author: "TheAIGRID",
    views: "109K views",
    timestamp: "7 days ago",
    thumbnail: "thumbnail-3.png",
  },
  {
    id: 4,
    title: "Damsel | Official Trailer | Netflix",
    image: "image-4.jpg",
    author: "Netflix",
    views: "4.2M views",
    timestamp: "9 days ago",
    thumbnail: "thumbnail-4.png",
  },
  {
    id: 5,
    title: "Deadpool & Wolverine | Official Teaser | In Theaters July 26",
    image: "image-5.jpg",
    author: "Marvel's Entertainment",
    views: "24.1M views",
    timestamp: "10 days ago",
    thumbnail: "thumbnail-5.png",
  },
  {
    id: 6,
    title: "You probably won’t survive 2024... Top 10 Tech Trends",
    image: "image-6.jpg",
    author: "Fireship",
    views: "1.5M views",
    timestamp: "2 months ago",
    thumbnail: "thumbnail-6.png",
  },
  {
    id: 7,
    title: "OpenAI shocks the world yet again… Sora first look",
    image: "image-7.jpg",
    author: "Fireship",
    views: "1.2M views",
    timestamp: "6 days ago",
    thumbnail: "thumbnail-5.png",
  },
  {
    id: 8,
    title: "Introducing DALL.E 3",
    image: "image-8.jpg",
    author: "Open AI",
    views: "851K views",
    timestamp: "5 months ago",
    thumbnail: "thumbnail.png",
  },
  {
    id: 9,
    title: "Introducing Copilot in Windows 11, new AI tools, and more",
    image: "image-9.jpg",
    author: "Windows",
    views: "1.4M views",
    timestamp: "5 months ago",
    thumbnail: "thumbnail-7.png",
  },
  {
    id: 10,
    title: "GPT-4's New Memory Feature Is Stunning (ChatGPT Memory)",
    image: "image-10.jpg",
    author: "AI03Studio",
    views: "4.7K views",
    timestamp: "3 weeks ago",
    thumbnail: "thumbnail-8.png",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video, index) => (
        <div key={video.id}>
          <VideoCard
            title={video.title}
            image={video.image}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
            thumbnail={video.thumbnail}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};
