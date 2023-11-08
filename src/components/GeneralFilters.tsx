import Header from "./Header";
import { AiOutlinePlus } from "react-icons/ai";
import { FC } from "react";
import { Item } from "../types/index";

interface GeneralFiltersProps {
  // setIsModal: React.Dispatch<React.SetStateAction<boolean | null | number>>;
  setCurrentOpenPost: React.Dispatch<
    React.SetStateAction<boolean | number | null>
  >;
  posts: (null | Item)[];
  numberOfColumns: number;
  setNumberOfColumns: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  gap: number;
  setGap: React.Dispatch<React.SetStateAction<number>>;
  onCreateRow: () => void;
  // setIsModalPost: React.Dispatch<React.SetStateAction<boolean>>;
}

const GeneralFilters: FC<GeneralFiltersProps> = ({
  // setIsModal,
  setCurrentOpenPost,
  posts,
  numberOfColumns,
  setNumberOfColumns,
  color,
  setColor,
  gap,
  setGap,
  onCreateRow,
  // setIsModalPost,
  // setCurrentOpenPost,
}) => {
  return (
    <div className="w-full">
      <p className="font-bold text-center mb-4 text-indigo-400 text-xl">
        New row
      </p>
      <Header
        numberOfColumns={numberOfColumns}
        setNumberOfColumns={setNumberOfColumns}
        color={color}
        setColor={setColor}
        gap={gap}
        setGap={setGap}
      />
      <ul className="flex h-[60px]" style={{ gap: gap }}>
        {[...Array(numberOfColumns).keys()].map((item) => (
          <li
            className="flex-1 h-full rounded-md border border-gray-300"
            key={item}
          >
            {posts[item] ? (
              <div className="py-2">
                <p className="text-center font-bold">{posts[item]?.title}</p>
                <p className="text-center text-sm text-gray-400">(Added)</p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setCurrentOpenPost(item);
                }}
                className="w-full h-full py-2 flex justify-center items-center duration-300 hover:bg-gray-100"
              >
                <AiOutlinePlus />
              </button>
            )}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="w-full mt-4 py-2 rounded-md border cursor-pointer text-indigo-600 border-indigo-400 duration-300 hover:bg-indigo-100 hover:border-indigo-600 hover:text-indigo-600"
        onClick={onCreateRow}
      >
        Create row
      </button>
    </div>
  );
};

export default GeneralFilters;
