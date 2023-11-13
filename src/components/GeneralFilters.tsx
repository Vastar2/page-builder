import Header from "./Header";
import { AiOutlinePlus } from "react-icons/ai";
import { FC } from "react";
import { Row } from "../types/index";
import { AiOutlineDelete } from "react-icons/ai";

interface GeneralFiltersProps {
  onGetNumberOfOpenPost: (item: number | null) => void;
  editPost: Row | null;
  onCreateRow: () => void;
  modalData: Row;
  onSetModalData: (name: string, data: number | string | null) => void;
  onDeletePost: (index: number) => void;
}

const GeneralFilters: FC<GeneralFiltersProps> = ({
  onGetNumberOfOpenPost,
  editPost,
  onCreateRow,
  modalData,
  onSetModalData,
  onDeletePost,
}) => {
  return (
    <div className="w-full">
      <p className="font-bold text-center mb-4 text-indigo-400 text-xl">
        {!editPost ? "New" : "Edit"} row
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
        {modalData.posts.map((item, index) => {
          return (
            <li
              className="flex-1 h-full rounded-md border border-gray-300"
              key={index}
            >
              {item ? (
                <div className="py-2 relative">
                  <p className="text-center font-bold">{item?.title}</p>
                  <p className="text-center text-sm text-gray-400">(Added)</p>
                  <button
                    type="button"
                    className="absolute top-1 right-1 p-1 rounded-md duration-300 text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                    onClick={() => onDeletePost(index)}
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => onGetNumberOfOpenPost(index)}
                  className="w-full h-full py-2 flex justify-center items-center duration-300 hover:bg-gray-100"
                >
                  <AiOutlinePlus />
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="w-full mt-4 py-2 rounded-md border cursor-pointer text-indigo-600 border-indigo-400 duration-300 hover:bg-indigo-100 hover:border-indigo-600 hover:text-indigo-600"
        onClick={onCreateRow}
      >
        {!editPost ? "Create" : "Edit"} row
      </button>
    </div>
  );
};

export default GeneralFilters;
