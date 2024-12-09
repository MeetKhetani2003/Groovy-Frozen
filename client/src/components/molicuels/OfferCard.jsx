import { Button } from '../ui/button';

const OfferCard = ({ img, title, heading, className, object }) => {
  return (
    <div
      className={`relative max-h-40 flex flex-col md:flex-row items-center ${className}  p-2 rounded-lg shadow-lg hover:shadow-custom transition-shadow duration-300 overflow-hidden`}
    >
      <div className="w-full md:w-1/2 h-56 mb-8 relative overflow-hidden rounded-lg">
        <img
          src={img}
          alt="offer"
          className={`w-full h-full object-cover ${
            object ? object : 'object-center'
          }  transform hover:scale-105 transition-transform duration-300`}
        />
      </div>

      <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-center text-center md:text-left">
        <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest">
          {title}
        </p>
        <h2 className="text-3xl font-semibold whitespace-nowrap font-montserrat  mt-2">
          {heading}
        </h2>
        <Button className="mt-4 w-28 bg-main text-white font-medium rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300">
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;
