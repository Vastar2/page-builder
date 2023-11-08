import { useEffect, useState } from "react";
import Content from "./components/Content";
import { Toaster } from "react-hot-toast";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./components/Modal";
import { Item, Row } from "./types";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const App = () => {
  const [data, setData] = useState<Row[]>([]);
  const [isModalGeneral, setIsModalGeneral] = useState<boolean | null | number>(
    false
  );
  const [currentOpenPost, setCurrentOpenPost] = useState<
    boolean | null | number
  >(null);

  const [numberOfColumns, setNumberOfColumns] = useState(3);
  const [color, setColor] = useState("#818CF8");
  const [gap, setGap] = useState(8);
  const [posts, setPosts] = useState<(null | Item)[]>(
    [...Array(numberOfColumns)].map(() => null)
  );

  useEffect(() => {
    setPosts([...Array(numberOfColumns)].map(() => null));
  }, [numberOfColumns]);

  // console.log("All data:", data);
  // console.log("isModalGeneral", isModalGeneral);
  // console.log("currentOpenPost", currentOpenPost);
  // console.log("Posts list:", posts);

  const onCreateRow = () => {
    if (!posts.some((element) => element !== null)) {
      toast.error("You should add at least one post");
      return;
    }

    toast.success("Row is created");
    setData((prev) => [
      { id: uuidv4(), numberOfColumns, color, gap, posts },
      ...prev,
    ]);
    setNumberOfColumns(3);
    setColor("#818CF8");
    setGap(8);
    setPosts([...Array(numberOfColumns)].map(() => null));
    setIsModalGeneral(false);
  };

  console.log(data);

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
        setCurrentOpenPost={setCurrentOpenPost}
        numberOfColumns={numberOfColumns}
        setNumberOfColumns={setNumberOfColumns}
        color={color}
        setColor={setColor}
        gap={gap}
        setGap={setGap}
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
        onCreateRow={onCreateRow}
      />
      <Modal
        modalType="post"
        isModal={currentOpenPost}
        setIsModal={setCurrentOpenPost}
        setCurrentOpenPost={setCurrentOpenPost}
        numberOfColumns={numberOfColumns}
        setNumberOfColumns={setNumberOfColumns}
        color={color}
        setColor={setColor}
        gap={gap}
        setGap={setGap}
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
        onCreateRow={onCreateRow}
      />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
