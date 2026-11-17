import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | Aroha Palms Villas in Mandrem & Pilerne",
  description: "Photos of the villas, pools, bedrooms and apartments at Aroha Palms in Mandrem and Pilerne, North Goa.",
  alternates: { canonical: "https://arohapalms.com/gallery/" },
  openGraph: { title: "Photo Gallery | Aroha Palms Villas in Mandrem & Pilerne", description: "Photos of the villas, pools, bedrooms and apartments at Aroha Palms in Mandrem and Pilerne, North Goa.", url: "https://arohapalms.com/gallery/" },
};

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
