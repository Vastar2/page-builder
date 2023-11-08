import { onCreateRow } from "../utils";
import { FC, useState, useEffect } from "react";
import { TModalData, Row } from "../types";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";

interface ModalsProps {
  onSetData: (propData: Row) => void;
  isModalGeneral: boolean | number | null;
  setIsModalGeneral: React.Dispatch<
    React.SetStateAction<boolean | number | null>
  >;
  onCloseModalGeneral: () => void;
}

const Modals: FC<ModalsProps> = ({
  onSetData,
  isModalGeneral,
  onCloseModalGeneral,
}) => {
  const [modalData, setModalData] = useState<TModalData>({
    collectionName: "",
    numberOfColumns: 3,
    color: "#818CF8",
    gap: 8,
    posts: [...Array(3)].map(() => null),
  });
  const [currentOpenPost, setCurrentOpenPost] = useState<
    boolean | null | number
  >(null);

  useEffect(() => {
    setModalData((prev) => {
      return {
        ...prev,
        posts: [...Array(prev.numberOfColumns)].map(() => null),
      };
    });
  }, [modalData.numberOfColumns]);

  const onSetModalData = () => {
    onSetData({
      id: uuidv4(),
      collectionName: modalData.collectionName,
      numberOfColumns: modalData.numberOfColumns,
      color: modalData.color,
      gap: modalData.gap,
      posts: modalData.posts,
    });
    setModalData({
      collectionName: "",
      numberOfColumns: 3,
      color: "#818CF8",
      gap: 8,
      posts: [...Array(3)].map(() => null),
    });
    onCloseModalGeneral();
  };

  return (
    <>
      <Modal
        modalType="general"
        isModal={isModalGeneral}
        onSetIsModal={setCurrentOpenPost}
        onCloseModalGeneral={onCloseModalGeneral}
        onGetNumberOfOpenPost={(item) => setCurrentOpenPost(item)}
        onNewFormData={(data) => {
          setModalData((prev) => {
            if (
              currentOpenPost !== null &&
              currentOpenPost !== false &&
              currentOpenPost !== true
            ) {
              return {
                ...prev,
                posts: [
                  ...prev.posts.slice(0, currentOpenPost),
                  data,
                  ...prev.posts.slice(currentOpenPost + 1),
                ],
              };
            }
            return prev;
          });
        }}
        onClearModalData={() => {
          setModalData({
            collectionName: "",
            numberOfColumns: 3,
            color: "#818CF8",
            gap: 8,
            posts: [...Array(3)].map(() => null),
          });
        }}
        onCreateRow={() => onCreateRow(modalData, onSetModalData)}
        modalData={modalData}
        onSetModalData={(name, data) =>
          setModalData((prep) => {
            return { ...prep, [name]: data };
          })
        }
      />
      <Modal
        modalType="post"
        isModal={currentOpenPost}
        onSetIsModal={setCurrentOpenPost}
        onCloseModalGeneral={onCloseModalGeneral}
        onGetNumberOfOpenPost={(item) => setCurrentOpenPost(item)}
        onNewFormData={(data) => {
          setModalData((prev) => {
            if (
              currentOpenPost !== null &&
              currentOpenPost !== false &&
              currentOpenPost !== true
            ) {
              return {
                ...prev,
                posts: [
                  ...prev.posts.slice(0, currentOpenPost),
                  data,
                  ...prev.posts.slice(currentOpenPost + 1),
                ],
              };
            }
            return prev;
          });
        }}
        onClearModalData={() => {
          setModalData({
            collectionName: "",
            numberOfColumns: 3,
            color: "#818CF8",
            gap: 8,
            posts: [...Array(3)].map(() => null),
          });
        }}
        onCreateRow={() => onCreateRow(modalData, onSetModalData)}
        modalData={modalData}
        onSetModalData={(name, data) =>
          setModalData((prep) => {
            return { ...prep, [name]: data };
          })
        }
      />
    </>
  );
};

export default Modals;
