import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import GeneralFilters from "./GeneralFilters";
import NewPostForm from "./NewPostForm";
import { Item, TModalData } from "../types/index";

interface ModalProps {
  modalType: string;
  isModal: boolean | number | null;
  onSetIsModal: React.Dispatch<React.SetStateAction<boolean | number | null>>;
  onCloseModalGeneral: () => void;
  onGetNumberOfOpenPost: (item: number | null) => void;
  onNewFormData: (data: Item) => void;
  onClearModalData: () => void;
  onCreateRow: () => void;
  modalData: TModalData;
  onSetModalData: (name: string, data: number | string | null) => void;
}

const Modal: FC<ModalProps> = ({
  modalType,
  isModal,
  onCloseModalGeneral,
  onGetNumberOfOpenPost,
  onNewFormData,
  onClearModalData,
  onCreateRow,
  modalData,
  onSetModalData,
}) => {
  if (isModal === false || isModal === null) return null;

  return (
    <div className="absolute w-full h-full top-0 bg-indigo-600 bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
      <div className="w-1/4 px-2 bg-white pt-4 pb-2 rounded-md relative ml-auto mr-auto shadow-md mb-6">
        {modalType === "general" && (
          <GeneralFilters
            onGetNumberOfOpenPost={onGetNumberOfOpenPost}
            onCreateRow={onCreateRow}
            modalData={modalData}
            onSetModalData={onSetModalData}
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
            onCloseModalGeneral();
            onClearModalData();
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
