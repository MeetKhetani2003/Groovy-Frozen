import { Link } from 'react-router-dom';

const LinkAtom = ({ title, url }) => {
  return (
    <Link
      to={url}
      className="text-gray-800 font-montserrat font-medium hover:text-main transition duration-200"
    >
      {title}
    </Link>
  );
};

export default LinkAtom;
