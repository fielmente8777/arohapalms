"use client";

import { AccommodationSectionProps } from "@/@types/landingPageTypes";
import { Card } from "@/app/(website)/destination/[slug]/components/Properties";
import { createContext, useContext, useState } from "react";

interface OpenGalleryProps {
  images: string[];
  index?: number;
}
interface OpenAmenityModalArray {
  amenityType: string;
  amenities: string[];
}

type RoomDetailsType = AccommodationSectionProps["cards"][0];
type PropertyDetailsType = Card;

interface WebContextType {
  isOpen: boolean;
  room: RoomDetailsType | null;
  openRoom: (room: RoomDetailsType) => void;
  closeRoom: () => void;

  // NEW — property popup
  isOpenProperty: boolean;
  property: PropertyDetailsType | null;
  openProperty: (property: PropertyDetailsType) => void;
  closeProperty: () => void;

  isOpenNavBar: boolean;
  setIsOpenNavBar: (open: boolean) => void;

  openImageModal: boolean;
  setOpenImageModal: (open: boolean) => void;

  isOpenFormPopUp: boolean;
  setIsOpenFormPopUp: (open: boolean) => void;

  passImagesArray: string[];
  setPassImagesArray: (images: string[]) => void;

  openAmenityModal: boolean;
  setOpenAmenityModal: (open: boolean) => void;

  imageCurrentIndex: number;
  setImageCurrentIndex: (index: number) => void;

  amenityModalArray: OpenAmenityModalArray[];
  setAmenityModalArray: (array: OpenAmenityModalArray[]) => void;

  openGallery: ({ images, index }: OpenGalleryProps) => void;
  closeGallery: () => void;
}

const WebContext = createContext<WebContextType>({
  isOpen: false,
  room: null,
  openRoom: () => {},
  closeRoom: () => {},

  isOpenProperty: false,
  property: null,
  openProperty: () => {},
  closeProperty: () => {},

  isOpenNavBar: false,
  setIsOpenNavBar: () => {},

  isOpenFormPopUp: false,
  setIsOpenFormPopUp: () => {},

  openImageModal: false,
  setOpenImageModal: () => {},

  passImagesArray: [],
  setPassImagesArray: () => {},

  imageCurrentIndex: 0,
  setImageCurrentIndex: () => {},

  openAmenityModal: false,
  setOpenAmenityModal: () => {},

  amenityModalArray: [],
  setAmenityModalArray: () => {},

  openGallery: () => {},
  closeGallery: () => {},
});

interface WebProviderProps {
  children: React.ReactNode;
}

export const WebProvider = ({ children }: WebProviderProps) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [isOpenFormPopUp, setIsOpenFormPopUp] = useState(false);
  const [passImagesArray, setPassImagesArray] = useState<string[]>([]);
  const [imageCurrentIndex, setImageCurrentIndex] = useState(0);
  const [openAmenityModal, setOpenAmenityModal] = useState(false);
  const [amenityModalArray, setAmenityModalArray] = useState<OpenAmenityModalArray[]>([]);

  const openGallery = ({ images, index = 0 }: OpenGalleryProps) => {
    setPassImagesArray(images);
    setImageCurrentIndex(index);
    setOpenImageModal(true);
  };

  const closeGallery = () => {
    setOpenImageModal(false);
    setPassImagesArray([]);
    setImageCurrentIndex(0);
  };

  const [room, setRoom] = useState<RoomDetailsType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openRoom = (room: RoomDetailsType) => {
    setRoom(room);
    setIsOpen(true);
  };

  const closeRoom = () => {
    setIsOpen(false);
    setRoom(null);
  };

  // NEW — property popup state + handlers
  const [property, setProperty] = useState<PropertyDetailsType | null>(null);
  const [isOpenProperty, setIsOpenProperty] = useState(false);

  const openProperty = (property: PropertyDetailsType) => {
    setProperty(property);
    setIsOpenProperty(true);
  };

  const closeProperty = () => {
    setIsOpenProperty(false);
    setProperty(null);
  };

  return (
    <WebContext.Provider
      value={{
        isOpen,
        room,
        openRoom,
        closeRoom,

        isOpenProperty,
        property,
        openProperty,
        closeProperty,

        isOpenNavBar,
        setIsOpenNavBar,

        isOpenFormPopUp,
        setIsOpenFormPopUp,

        openImageModal,
        setOpenImageModal,

        passImagesArray,
        setPassImagesArray,

        imageCurrentIndex,
        setImageCurrentIndex,

        openAmenityModal,
        setOpenAmenityModal,

        amenityModalArray,
        setAmenityModalArray,

        openGallery,
        closeGallery,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  const context = useContext(WebContext);

  if (context === undefined) {
    throw new Error("useWebContext must be used within a WebProvider");
  }

  return context;
};