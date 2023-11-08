import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import { useState } from "react";
import GeneralFilters from "./GeneralFilters";
import NewPostForm from "./NewPostForm";
import { Item } from "../types/index";

interface ModalProps {
  modalType: string;
  isModal: boolean | number | null;
  setIsModal: React.Dispatch<React.SetStateAction<boolean | number | null>>;
  setCurrentOpenPost: React.Dispatch<
    React.SetStateAction<boolean | number | null>
  >;
  numberOfColumns: number;
  setNumberOfColumns: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  gap: number;
  setGap: React.Dispatch<React.SetStateAction<number>>;
  posts: (null | Item)[];
  onNewFormData: (data: Item) => void;
  onClearPosts: () => void;
  onCreateRow: () => void;
}

const Modal: FC<ModalProps> = ({
  modalType,
  isModal,
  setIsModal,
  setCurrentOpenPost,
  numberOfColumns,
  setNumberOfColumns,
  color,
  setColor,
  gap,
  setGap,
  posts,
  onNewFormData,
  onClearPosts,
  onCreateRow,
}) => {
  // const rowData = {
  //   id: uuidv4(),
  //   numberOfColumns: numberOfColumns,
  //   color: color,
  //   gap: gap,
  //   posts: [],
  // };

  if (isModal === false || isModal === null) return null;

  // console.log("----------", posts);

  return (
    <div className="absolute w-full h-full top-0 bg-indigo-600 bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
      <div className="w-1/4 px-2 bg-white pt-4 pb-2 rounded-md relative ml-auto mr-auto shadow-md mb-6">
        {modalType === "general" && (
          <GeneralFilters
            // setIsModal={setIsModal}
            setCurrentOpenPost={setCurrentOpenPost}
            posts={posts}
            numberOfColumns={numberOfColumns}
            setNumberOfColumns={setNumberOfColumns}
            color={color}
            setColor={setColor}
            gap={gap}
            setGap={setGap}
            onCreateRow={onCreateRow}
            // setIsModalPost={setIsModalPost}
            // setCurrentOpenPost={setCurrentOpenPost}
          />
        )}
        {modalType === "post" && (
          <NewPostForm
            currentOpenPost={isModal}
            setCurrentOpenPost={setCurrentOpenPost}
            onNewFormData={onNewFormData}
          />
        )}
        <button
          type="button"
          onClick={() => {
            setIsModal(false);
            onClearPosts();
            // setCurrentOpenPost(null);
          }}
          className="absolute top-4 right-4"
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default Modal;
