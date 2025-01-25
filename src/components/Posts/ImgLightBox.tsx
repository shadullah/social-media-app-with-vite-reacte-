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
  initialSlide?: number;
}

const ImgLightBox = ({
  open,
  onClose,
  media,
  initialSlide = 0,
}: lightboxProps) => {
  return (
    <div>
      <Lightbox
        plugins={[Zoom]}
        open={open}
        close={onClose}
        index={initialSlide}
        slides={media.map((item) => ({ src: item.src }))}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
      />
    </div>
  );
};

export default ImgLightBox;
