import Image from 'next/image';
export type CollageImageProps = {
src: string;
animation: 'right-to-left' | 'left-to-right' | 'top-to-bottom' | 'bottom-to-top';
};
  
type ImageSliderProps = {
images: CollageImageProps[];
};

const Collage: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-center items-center h-full">
      {images.map((image, index) => (
        <div key={index} className={`w-1/4 h-1/4 overflow-hidden flex justify-center items-center animate-${image.animation}`}>
          <Image src={image.src} alt={`Slide ${index}`} width={800} height={1182} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
    
  );
};

export default Collage;
