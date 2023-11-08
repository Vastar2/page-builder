import toast from "react-hot-toast";
import { TModalData } from "../types";

export const onCreateRow = (
  modalData: TModalData,
  onSetModalData: () => void
) => {
  if (!modalData.collectionName) {
    toast.error("You should add the name of collection");
    return;
  }
  if (!modalData.posts.some((element) => element !== null)) {
    toast.error("You should add at least one post");
    return;
  }

  toast.success("Row is created");
  onSetModalData();
};
