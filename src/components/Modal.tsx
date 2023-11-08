import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import GeneralFilters from "./GeneralFilters";
import NewPostForm from "./NewPostForm";
import { Item } from "../types/index";

interface ModalProps {
  modalType: string;
  isModal: boolean | number | null;
  setIsModal: React.Dispatch<React.SetStateAction<boolean | number | null>>;
  onGetNumberOfOpenPost: (item: number | null) => void;
  posts: (null | Item)[];
  onNewFormData: (data: Item) => void;
  onClearPosts: () => void;
  onCreateRow: () => void;
  collectionName: string;
  numberOfColumns: number;
  color: string;
  gap: number;
  onSetCollectionName: (name: string) => void;
  onSetNumberOfColumns: (item: number) => void;
  onSetColor: (e: string) => void;
  onSetGap: (e: number) => void;
}

const Modal: FC<ModalProps> = ({
  modalType,
  isModal,
  setIsModal,
  onGetNumberOfOpenPost,
  posts,
  onNewFormData,
  onClearPosts,
  onCreateRow,

  collectionName,
  numberOfColumns,
  color,
  gap,
  onSetCollectionName,
  onSetNumberOfColumns,
  onSetColor,
  onSetGap,
}) => {
  if (isModal === false || isModal === null) return null;

  return (
    <div className="absolute w-full h-full top-0 bg-indigo-600 bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
      <div className="w-1/4 px-2 bg-white pt-4 pb-2 rounded-md relative ml-auto mr-auto shadow-md mb-6">
        {modalType === "general" && (
          <GeneralFilters
            onGetNumberOfOpenPost={onGetNumberOfOpenPost}
            posts={posts}
            onCreateRow={onCreateRow}
            collectionName={collectionName}
            numberOfColumns={numberOfColumns}
            color={color}
            gap={gap}
            onSetCollectionName={onSetCollectionName}
            onSetNumberOfColumns={onSetNumberOfColumns}
            onSetColor={onSetColor}
            onSetGap={onSetGap}
          />
        )}
        {modalType === "post" && (
          <NewPostForm
            currentOpenPost={isModal}
            onGetNumberOfOpenPost={onGetNumberOfOpenPost}
            onNewFormData={onNewFormData}
          />
        )}
        <button
          type="button"
          onClick={() => {
            setIsModal(false);
            onClearPosts();
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
