import MenuProductcard from '@/components/molicuels/MenuProductcard';
import { assets } from '@/utils/AssetImport';

const Menu = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-20">
      <h1 className="text-5xl uppercase font-semibold font-serif text-center ">
        Our Menu
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-20 mt-24">
        <MenuProductcard
          img={assets.food1}
          title={'pasta dishes'}
          heading={'Mus natoque quisque tincidunt '}
          price={'$20.00'}
        />
        <MenuProductcard
          img={assets.food1}
          title={'pasta dishes'}
          heading={'Mus natoque quisque tincidunt '}
          price={'$20.00'}
        />
        <MenuProductcard
          img={assets.food1}
          title={'pasta dishes'}
          heading={'Mus natoque quisque tincidunt '}
          price={'$20.00'}
        />
        <MenuProductcard
          img={assets.food1}
          title={'pasta dishes'}
          heading={'Mus natoque quisque tincidunt '}
          price={'$20.00'}
        />
        <MenuProductcard
          img={assets.food1}
          title={'pasta dishes'}
          heading={'Mus natoque quisque tincidunt '}
          price={'$20.00'}
        />
        <MenuProductcard
          img={assets.food1}
          title={'pasta dishes'}
          heading={'Mus natoque quisque tincidunt '}
          price={'$20.00'}
        />
        <MenuProductcard
          img={assets.food1}
          title={'pasta dishes'}
          heading={'Mus natoque quisque tincidunt '}
          price={'$20.00'}
        />
        <MenuProductcard
          img={assets.food1}
          title={'pasta dishes'}
          heading={'Mus natoque quisque tincidunt '}
          price={'$20.00'}
        />
      </div>
    </div>
  );
};

export default Menu;
