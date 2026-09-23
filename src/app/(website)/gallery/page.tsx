import Gallery from "./components/Gallery";
import VillaGallery from "./components/VillaGallery";
import { GalleryData } from "./PageData";

export default function GalleryPage() {
  return (
    <main>
      <Gallery {...GalleryData.hero} />
      <VillaGallery
        mandrem={GalleryData.villaGallery.mandrem}
        pilerne={GalleryData.villaGallery.pilerne}
      />
    </main>
  );
}
