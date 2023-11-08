import Header from "./Header";
import { AiOutlinePlus } from "react-icons/ai";
import { FC } from "react";
import { TModalData } from "../types/index";

interface GeneralFiltersProps {
  onGetNumberOfOpenPost: (item: number | null) => void;
  onCreateRow: () => void;

  modalData: TModalData;
  onSetModalData: (name: string, data: number | string | null) => void;
}

const GeneralFilters: FC<GeneralFiltersProps> = ({
  onGetNumberOfOpenPost,
  onCreateRow,

  modalData,
  onSetModalData,
}) => {
  return (
    <div className="w-full">
      <p className="font-bold text-center mb-4 text-indigo-400 text-xl">
        New row
      </p>
      <label>
        Collection name
        <input
          type="text"
          value={modalData.collectionName}
          onChange={(e) => onSetModalData("collectionName", e.target.value)}
          className="w-full py-2 rounded-md border mt-1 mb-2 duration-300 border-gray-300 hover:border-gray-400 p-2"
        />
      </label>
      <Header modalData={modalData} onSetModalData={onSetModalData} />
      <ul className="flex h-[60px]" style={{ gap: modalData.gap }}>
        {[...Array(modalData.numberOfColumns).keys()].map((item) => (
          <li
            className="flex-1 h-full rounded-md border border-gray-300"
            key={item}
          >
            {modalData.posts[item] ? (
              <div className="py-2">
                <p className="text-center font-bold">
                  {modalData.posts[item]?.title}
                </p>
                <p className="text-center text-sm text-gray-400">(Added)</p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  onGetNumberOfOpenPost(item);
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
