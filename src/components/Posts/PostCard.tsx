import { FaThumbsUp } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

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
  onImgClick: (media: Media[], clickedInd: number) => void;
}

const PostCard = ({
  sender,
  content,
  timestamp,
  likes,
  comments,
  onImgClick,
}: Post) => {
  return (
    <div className=" border rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-4 mb-4">
        <img
          className="w-10 h-10 rounded-full"
          src={sender.avatar}
          alt={sender.name}
        />
        <div>
          <h3 className="font-semibold">{sender.name}</h3>
          <p className="text-sm">
            {new Date(timestamp).toLocaleString("en-US")}
          </p>
        </div>
      </div>
      <p className="mb-4">{content.text}</p>
      <div
        className={`grid ${
          content.media.length === 1
            ? "grid-cols-1"
            : content.media.length === 2
            ? "grid-cols-2"
            : "grid-cols-[repeat(auto-fit,minmax(120px,1fr))]"
        } gap-2`}
      >
        {content.media.map((item, index) => (
          <img
            className="cursor-pointer rounded-lg object-cover h-[400px] w-full object-top"
            key={index}
            src={item.src}
            alt="post media"
            onClick={() => onImgClick(content.media, index)}
          />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <p className="flex items-center">
          <FaThumbsUp className="mr-3" /> {likes} Likes
        </p>
        <p className="flex items-center">
          <FaMessage className="mr-3" /> {comments} Comments
        </p>
      </div>
    </div>
  );
};

export default PostCard;
