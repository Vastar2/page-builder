import { useEffect, useState } from "react";
import Content from "./components/Content";
import { Toaster } from "react-hot-toast";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./components/Modal";
import { Item, Row } from "./types";
import { onCreateRow } from "./utils";

const App = () => {
  const [data, setData] = useState<Row[]>([]);

  const [isModalGeneral, setIsModalGeneral] = useState<boolean | null | number>(
    false
  );
  const [currentOpenPost, setCurrentOpenPost] = useState<
    boolean | null | number
  >(null);

  const [collectionName, setCollectionName] = useState("");
  const [numberOfColumns, setNumberOfColumns] = useState(3);
  const [color, setColor] = useState("#818CF8");
  const [gap, setGap] = useState(8);
  const [posts, setPosts] = useState<(null | Item)[]>(
    [...Array(numberOfColumns)].map(() => null)
  );

  const [modalData, setModalData] = useState({
    collectionName: "",
    numberOfColumns: 3,
    color: "#818CF8",
    gap: 8,
    posts: [...Array(numberOfColumns)].map(() => null),
  });

  useEffect(() => {
    setPosts([...Array(numberOfColumns)].map(() => null));
  }, [numberOfColumns]);

  return (
    <div className="py-10">
      <button
        type="button"
        onClick={() => setIsModalGeneral(true)}
        className="w-1/4 text-3xl py-2 flex justify-around items-center ml-auto mr-auto bg-white rounded-md shadow-md mb-4 border text-indigo-600 border-indigo-400 duration-300 hover:bg-indigo-100 hover:border-indigo-600 hover:text-indigo-600"
      >
        <AiOutlinePlus />
      </button>
      <Content
        data={data}
        onDeleteRow={(id) =>
          setData((prev) => prev.filter((value) => value.id !== id))
        }
      />
      <Modal
        modalType="general"
        isModal={isModalGeneral}
        setIsModal={setIsModalGeneral}
        onGetNumberOfOpenPost={(item) => setCurrentOpenPost(item)}
        posts={posts}
        onNewFormData={(data) => {
          setPosts((prev) => {
            if (
              currentOpenPost !== null &&
              currentOpenPost !== false &&
              currentOpenPost !== true
            ) {
              prev[currentOpenPost] = data;
            }
            return prev;
          });
        }}
        onClearPosts={() => {
          setPosts([...Array(numberOfColumns)].map(() => null));
        }}
        onCreateRow={() =>
          onCreateRow(
            collectionName,
            posts,
            numberOfColumns,
            color,
            gap,
            setData,
            setNumberOfColumns,
            setCollectionName,
            setColor,
            setGap,
            setPosts,
            setIsModalGeneral
          )
        }
        collectionName={collectionName}
        numberOfColumns={numberOfColumns}
        color={color}
        gap={gap}
        onSetCollectionName={(name) => setCollectionName(name)}
        onSetNumberOfColumns={(item) => setNumberOfColumns(item)}
        onSetColor={(color) => setColor(color)}
        onSetGap={(e) => setGap(e)}
      />
      <Modal
        modalType="post"
        isModal={currentOpenPost}
        setIsModal={setCurrentOpenPost}
        onGetNumberOfOpenPost={(item) => setCurrentOpenPost(item)}
        posts={posts}
        onNewFormData={(data) => {
          setPosts((prev) => {
            if (
              currentOpenPost !== null &&
              currentOpenPost !== false &&
              currentOpenPost !== true
            ) {
              prev[currentOpenPost] = data;
            }
            return prev;
          });
        }}
        onClearPosts={() => {
          setPosts((prev) => prev);
        }}
        onCreateRow={() =>
          onCreateRow(
            collectionName,
            posts,
            numberOfColumns,
            color,
            gap,
            setData,
            setNumberOfColumns,
            setCollectionName,
            setColor,
            setGap,
            setPosts,
            setIsModalGeneral
          )
        }
        collectionName={collectionName}
        numberOfColumns={numberOfColumns}
        color={color}
        gap={gap}
        onSetCollectionName={(name) => setCollectionName(name)}
        onSetNumberOfColumns={(item) => setNumberOfColumns(item)}
        onSetColor={(color) => setColor(color)}
        onSetGap={(e) => setGap(e)}
      />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
