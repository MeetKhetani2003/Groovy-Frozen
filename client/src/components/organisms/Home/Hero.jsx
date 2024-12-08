import { Button } from '@/components/ui/button';
import { assets } from '@/utils/AssetImport';

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-full h-[100vh]" src={assets.bgImg} alt="bg" />
        <div className="absolute top-24  left-6 lg:left-24 flex items-center justify-center">
          <div className="lg:w-2/4 hidden lg:block">
            <img src={assets.veg} alt="veg" />
          </div>
          <div className="lg:w-2/4 lg:ml-12 lg:mb-28">
            <p className="font-montserrat">Welcome to</p>
            <span className="leading-none">
              <p className=" text-8xl lg:text-[120px] font-serif">Groovy </p>
              <p className=" text-8xl lg:text-[120px] font-serif">Cafe </p>
            </span>
            <p className="text-lg font-montserrat mt-4 text-gray-800">
              Aliquet augue netus id tempus platea praesent vulputate euismod,
              ullamcorper venenatis malesuada magnis urna primis
            </p>
            <Button className="mt-4 bg-primaryBg border border-main shadow-lg hover:bg-main text-main hover:text-white hover:shadow-lg hover:shadow-[#ffbd80]">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
