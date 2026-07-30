interface AmenityCardProps {
  title: string;
}

const AmenityCard = ({ title }: AmenityCardProps) => {
  return (
    <div className="flex h-32 items-center justify-center border border-black/30 bg-white px-6 text-center transition-all duration-300  hover:shadow-md">
      <p className="text-xs capitalize tracking-wide text-gray-700">{title}</p>
    </div>
  );
};

export default AmenityCard;
