import { FC } from "react";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import GeneralFilters from "./GeneralFilters";
import NewPostForm from "./NewPostForm";
import { Item, Row } from "../types/index";

interface ModalProps {
  modalType: string;
  isModal: boolean | number | null;
  editedPost: Row | null;
  onSetIsModal: React.Dispatch<React.SetStateAction<boolean | number | null>>;
  onCloseModalGeneral: () => void;
  onGetNumberOfOpenPost: (item: number | null) => void;
  onNewFormData: (data: Item) => void;
  onClearModalData: () => void;
  onCreateRow: () => void;
  modalData: Row;
  onSetModalData: (name: string, data: number | string | null) => void;
  onCloseModalPost: () => void;
  onDeletePost: (index: number) => void;
}

const Modal: FC<ModalProps> = ({
  modalType,
  isModal,
  editedPost,
  onCloseModalGeneral,
  onGetNumberOfOpenPost,
  onNewFormData,
  onClearModalData,
  onCreateRow,
  modalData,
  onSetModalData,
  onCloseModalPost,
  onDeletePost,
}) => {
  if (isModal === false || isModal === null) return null;

  return (
    <div className="absolute w-full h-full top-0 bg-indigo-600 bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
      <div className="w-1/4 px-2 bg-white pt-4 pb-2 rounded-md relative ml-auto mr-auto shadow-md mb-6">
        {modalType === "general" && (
          <GeneralFilters
            onGetNumberOfOpenPost={onGetNumberOfOpenPost}
            editedPost={editedPost}
            onCreateRow={onCreateRow}
            modalData={modalData}
            onSetModalData={onSetModalData}
            onDeletePost={onDeletePost}
          />
        )}
        {modalType === "post" && (
          <NewPostForm
            currentOpenPost={isModal}
            editedPost={editedPost}
            onGetNumberOfOpenPost={onGetNumberOfOpenPost}
            onNewFormData={onNewFormData}
          />
        )}
        {modalType === "general" && (
          <button
            type="button"
            onClick={() => {
              onCloseModalGeneral();
              onClearModalData();
            }}
            className="absolute text-xl top-5 right-3 text-gray-400 duration-300 hover:text-gray-500"
          >
            <AiOutlineClose />
          </button>
        )}
        {modalType === "post" && (
          <button
            type="button"
            onClick={() => onCloseModalPost()}
            className="absolute text-xl top-5 left-3 text-gray-400 duration-300 hover:text-gray-500"
          >
            <AiOutlineArrowLeft />
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
