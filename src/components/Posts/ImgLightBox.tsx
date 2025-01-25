import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";

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
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
      />
    </div>
  );
};

export default ImgLightBox;
