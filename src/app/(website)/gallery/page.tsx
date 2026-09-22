import Gallery from "./components/Gallery";
import VillaGallery from "./components/VillaGallery";
import { GalleryData } from "./PageData";



export default function GalleryPage () {
  return (
    <main>
      <Gallery {...GalleryData.hero} />
      <VillaGallery villas={GalleryData.villas} />
    </main>
  );
};
