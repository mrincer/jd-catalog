/* eslint-disable react/prop-types */
import {
  Expand,
  PersonalComputer,
  Cpu,
  Storage,
  Memory,
  Windows,
} from "grommet-icons";
import { AiOutlineWhatsApp } from "react-icons/ai";
import useModal from "../../hooks/useModal";

const GridCard = ({ imgSrc, description, price,  }) => {
  const modal = useModal();
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={imgSrc} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
            {description}
          </h5>
        </a>
        <p className="mb-3 font-normal text-md text-gray-700 dark:text-gray-400">
          {price}
        </p>
        <a
          onClick={modal.onOpen}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Detalles
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default GridCard;
