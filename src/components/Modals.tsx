import { onCreateRow } from "../utils";
import { FC, useState, useEffect } from "react";
import { Item, Row } from "../types";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";

interface ModalsProps {
  onSetData: (propData: Row) => void;
  isModalGeneral: boolean | number | null;
  setIsModalGeneral: React.Dispatch<
    React.SetStateAction<boolean | number | null>
  >;
  onCloseModalGeneral: () => void;
  editedPost: Row | null;
}

const Modals: FC<ModalsProps> = ({
  onSetData,
  isModalGeneral,
  onCloseModalGeneral,
  editedPost,
}) => {
  const [modalData, setModalData] = useState<Row>({
    id: null,
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
        posts: [...Array(prev.numberOfColumns)].map(
          (_, index) => prev.posts[index]
        ),
      };
    });
  }, [modalData.numberOfColumns]);

  useEffect(() => {
    editedPost && setModalData(editedPost);
  }, [editedPost]);

  const onSetModalData = () => {
    onSetData({
      id: !modalData.id ? uuidv4() : modalData.id,
      collectionName: modalData.collectionName,
      numberOfColumns: modalData.numberOfColumns,
      color: modalData.color,
      gap: modalData.gap,
      posts: modalData.posts,
    });
    setModalData({
      id: null,
      collectionName: "",
      numberOfColumns: 3,
      color: "#818CF8",
      gap: 8,
      posts: [...Array(3)].map(() => null),
    });
    onCloseModalGeneral();
  };

  const onNewFormData = (data: Item) => {
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
  };

  const onClearModalData = () => {
    setModalData({
      id: null,
      collectionName: "",
      numberOfColumns: 3,
      color: "#818CF8",
      gap: 8,
      posts: [...Array(3)].map(() => null),
    });
  };

  const onDeletePost = (index: number) => {
    setModalData((prev) => {
      return {
        ...prev,
        posts: [
          ...prev.posts.map((item, indexPosts) =>
            indexPosts === index ? null : item
          ),
        ],
      };
    });
  };

  return (
    <>
      <Modal
        modalType="general"
        isModal={isModalGeneral}
        editedPost={editedPost}
        onSetIsModal={setCurrentOpenPost}
        onCloseModalGeneral={onCloseModalGeneral}
        onGetNumberOfOpenPost={(item) => setCurrentOpenPost(item)}
        onNewFormData={onNewFormData}
        onClearModalData={onClearModalData}
        onCreateRow={() => onCreateRow(modalData, onSetModalData)}
        modalData={modalData}
        onSetModalData={(name, data) =>
          setModalData((prep) => {
            return { ...prep, [name]: data };
          })
        }
        onCloseModalPost={() => setCurrentOpenPost(null)}
        onDeletePost={onDeletePost}
      />
      <Modal
        modalType="post"
        isModal={currentOpenPost}
        editedPost={editedPost}
        onSetIsModal={setCurrentOpenPost}
        onCloseModalGeneral={onCloseModalGeneral}
        onGetNumberOfOpenPost={(item) => setCurrentOpenPost(item)}
        onNewFormData={onNewFormData}
        onClearModalData={onClearModalData}
        onCreateRow={() => onCreateRow(modalData, onSetModalData)}
        modalData={modalData}
        onSetModalData={(name, data) =>
          setModalData((prep) => {
            return { ...prep, [name]: data };
          })
        }
        onCloseModalPost={() => setCurrentOpenPost(null)}
        onDeletePost={onDeletePost}
      />
    </>
  );
};

export default Modals;
