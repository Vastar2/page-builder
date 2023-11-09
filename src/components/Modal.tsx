import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import GeneralFilters from "./GeneralFilters";
import NewPostForm from "./NewPostForm";
import { Item, Row } from "../types/index";

interface ModalProps {
  modalType: string;
  isModal: boolean | number | null;
  editPost: Row | null;
  onSetIsModal: React.Dispatch<React.SetStateAction<boolean | number | null>>;
  onCloseModalGeneral: () => void;
  onGetNumberOfOpenPost: (item: number | null) => void;
  onNewFormData: (data: Item) => void;
  onClearModalData: () => void;
  onCreateRow: () => void;
  modalData: Row;
  onSetModalData: (name: string, data: number | string | null) => void;
  onCloseModalPost: () => void;
}

const Modal: FC<ModalProps> = ({
  modalType,
  isModal,
  editPost,
  onCloseModalGeneral,
  onGetNumberOfOpenPost,
  onNewFormData,
  onClearModalData,
  onCreateRow,
  modalData,
  onSetModalData,
  onCloseModalPost,
}) => {
  if (isModal === false || isModal === null) return null;

  return (
    <div className="absolute w-full h-full top-0 bg-indigo-600 bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
      <div className="w-1/4 px-2 bg-white pt-4 pb-2 rounded-md relative ml-auto mr-auto shadow-md mb-6">
        {modalType === "general" && (
          <GeneralFilters
            onGetNumberOfOpenPost={onGetNumberOfOpenPost}
            editPost={editPost}
            onCreateRow={onCreateRow}
            modalData={modalData}
            onSetModalData={onSetModalData}
          />
        )}
        {modalType === "post" && (
          <NewPostForm
            currentOpenPost={isModal}
            editPost={editPost}
            onGetNumberOfOpenPost={onGetNumberOfOpenPost}
            onNewFormData={onNewFormData}
          />
        )}
        <button
          type="button"
          onClick={() => {
            if (modalType === "general") {
              onCloseModalGeneral();
              onClearModalData();
            } else if (modalType === "post") {
              onCloseModalPost();
            }
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
