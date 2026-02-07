import oreoCookie1 from "@/assets/oreo-cookie-1.png";
import oreoCookie2 from "@/assets/oreo-cookie-2.png";
import oreoCookie3 from "@/assets/oreo-cookie-3.png";

const cookies = [oreoCookie1, oreoCookie2, oreoCookie3];

interface FloatingCookieProps {
  className?: string;
  delay: string;
  size: number;
  cookieIndex: number;
  rotation?: number;
}

const FloatingCookie = ({ className, delay, size, cookieIndex, rotation = 0 }: FloatingCookieProps) => (
  <div
    className={`absolute ${className}`}
    style={{
      width: size,
      height: size,
      animationDelay: delay,
      transform: `rotate(${rotation}deg)`,
    }}
  >
    <img
      src={cookies[cookieIndex % 3].src}
      alt="Floating cookie"
      className="w-full h-full object-contain drop-shadow-lg"
    />
  </div>
);

const ProductBanner = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Floating cookie images */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingCookie className="top-[5%] left-[3%] animate-float" delay="0s" size={80} cookieIndex={0} rotation={-15} />
        <FloatingCookie className="top-[12%] right-[8%] animate-float-delayed" delay="1s" size={100} cookieIndex={1} rotation={20} />
        <FloatingCookie className="top-[8%] left-[25%] animate-float-slow" delay="0.5s" size={60} cookieIndex={2} rotation={-30} />
        <FloatingCookie className="top-[25%] right-[20%] animate-float" delay="2s" size={90} cookieIndex={0} rotation={45} />
        <FloatingCookie className="top-[3%] left-[55%] animate-float-delayed" delay="1.5s" size={70} cookieIndex={1} rotation={-10} />
        <FloatingCookie className="top-[18%] left-[75%] animate-float-slow" delay="0s" size={85} cookieIndex={2} rotation={30} />
        <FloatingCookie className="top-[35%] left-[5%] animate-float" delay="3s" size={110} cookieIndex={1} rotation={-25} />
        <FloatingCookie className="top-[30%] right-[3%] animate-float-delayed" delay="2.5s" size={75} cookieIndex={0} rotation={15} />

        {/* Bottom floating cookies */}
        <FloatingCookie className="bottom-[25%] left-[10%] animate-float-slow" delay="1s" size={95} cookieIndex={2} rotation={-40} />
        <FloatingCookie className="bottom-[35%] right-[15%] animate-float" delay="0.5s" size={65} cookieIndex={1} rotation={25} />
        <FloatingCookie className="bottom-[20%] left-[65%] animate-float-delayed" delay="2s" size={105} cookieIndex={0} rotation={-5} />
        <FloatingCookie className="bottom-[30%] right-[35%] animate-float-slow" delay="1.5s" size={55} cookieIndex={2} rotation={35} />
        <FloatingCookie className="bottom-[15%] left-[40%] animate-float" delay="0.8s" size={80} cookieIndex={1} rotation={-20} />
        <FloatingCookie className="bottom-[40%] left-[85%] animate-float-delayed" delay="1.2s" size={70} cookieIndex={0} rotation={50} />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
        {/* Title */}
        <div className="text-center animate-scale-in">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-cookie-dark drop-shadow-md">
            GLACE
          </h1>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-cookie-dark drop-shadow-md -mt-2 md:-mt-4">
            L'OREO
          </h2>
        </div>

        {/* Subtitle */}
        <p className="mt-8 text-center text-muted-foreground max-w-md text-lg animate-fade-up-delayed font-sans">
          Découvrez notre collection de glaces artisanales aux saveurs uniques et gourmandes
        </p>

        {/* Call to action buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up-delayed">
          <button className="px-8 py-4 bg-chocolate text-cream font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            Découvrir
          </button>
          <button className="px-8 py-4 border-2 border-chocolate text-chocolate font-semibold rounded-full hover:bg-chocolate hover:text-cream transition-all duration-300">
            Nos Saveurs
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default ProductBanner;
