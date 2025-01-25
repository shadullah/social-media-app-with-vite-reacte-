import { useState } from "react";
import PostCard from "./PostCard";
import SearchInput from "./SearchInput";
import ImgLightBox from "./ImgLightBox";

interface Sender {
  id: string;
  name: string;
  avatar: string;
}

interface Media {
  type: string;
  src: string;
}

interface Content {
  text: string;
  media: Media[];
}

interface Post {
  id: string;
  sender: Sender;
  content: Content;
  timestamp: string;
  likes: number;
  comments: number;
}

const posts: Post[] = [
  {
    id: "M50KOUB205NA3LKZ",
    sender: {
      id: "MOMO32S5",
      name: "Momo Nishimiya",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    content: {
      text: "What an amazing day! Just finished hiking Mount Fuji. The view was breathtaking! 🗻✨",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=800&h=600&fit=crop",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop",
        },
      ],
    },
    timestamp: "2024-01-20T09:30:00Z",
    likes: 234,
    comments: 45,
  },
  {
    id: "K92JFHD7362HSKA",
    sender: {
      id: "YUKI789",
      name: "Yuki Tanaka",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    },
    content: {
      text: "Just got my new camera! Testing it out in the city 📸",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1531673056590-0926c0c6c916?w=800&h=800&fit=crop",
        },
      ],
    },
    timestamp: "2024-01-20T08:15:00Z",
    likes: 156,
    comments: 23,
  },
  {
    id: "P98UHGF45JSKAL2",
    sender: {
      id: "HARU456",
      name: "Haru Yoshida",
      avatar:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop",
    },
    content: {
      text: "Coffee and coding session in my favorite café ☕️💻",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=1000&fit=crop",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
        },
        {
          type: "image",

          src: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=600&fit=crop",
        },
      ],
    },
    timestamp: "2024-01-20T07:45:00Z",
    likes: 89,
    comments: 12,
  },
  {
    id: "Q71KOPM294NBXZ",
    sender: {
      id: "KEI789",
      name: "Kei Nakamura",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    content: {
      text: "Beautiful sunset at Shibuya Crossing 🌅",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1200&h=800&fit=crop",
        },
      ],
    },
    timestamp: "2024-01-20T10:20:00Z",
    likes: 445,
    comments: 67,
  },
  {
    id: "N45LPQR789VWXY",
    sender: {
      id: "SAKI123",
      name: "Saki Watanabe",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
    },

    content: {
      text: "Cherry blossoms starting to bloom! Spring is coming early this year 🌸",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=1200&fit=crop",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=800&fit=crop",
        },
      ],
    },
    timestamp: "2024-01-20T11:05:00Z",
    likes: 678,
    comments: 89,
  },
];

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [lightbox, setLight] = useState(false);
  const [currentMedia, setMedia] = useState<Media[]>([]);

  const filteredPosts = posts.filter((post) =>
    post.sender.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleImgClick = (media: Media[]) => {
    setMedia(media);
    setLight(true);
  };

  return (
    <div className="max-w-5xl mx-auto py-12 text-gray-300">
      <h1 className="mb-4 text-4xl ml-4 font-bold">Social Media App</h1>
      <SearchInput searchTerm={searchTerm} onSearch={handleSearch} />
      <div className="px-4">
        <div className="grid grid-cols-1 gap-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard key={post.id} {...post} onImgClick={handleImgClick} />
            ))
          ) : (
            <>
              <p>No Posts matched</p>
            </>
          )}
        </div>
        <ImgLightBox
          open={lightbox}
          media={currentMedia}
          onClose={() => setLight(false)}
        />
      </div>
    </div>
  );
};

export default Posts;
