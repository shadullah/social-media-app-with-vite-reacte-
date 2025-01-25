import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

interface Media {
  type: string;
  src: string;
}

interface lightboxProps {
  open: boolean;
  media: Media[];
  onClose: () => void;
}

const ImgLightBox = ({ open, onClose, media }: lightboxProps) => {
  return (
    <div>
      <Lightbox
        plugins={[Zoom]}
        open={open}
        close={onClose}
        slides={media.map((item) => ({ src: item.src }))}
      />
    </div>
  );
};

export default ImgLightBox;
