import { useState } from "react";
import Content from "./components/Content";
import { Toaster } from "react-hot-toast";
import { AiOutlinePlus } from "react-icons/ai";
import { Row } from "./types";
import Modals from "./components/Modals";

const App = () => {
  const [data, setData] = useState<Row[]>([]);
  const [isModalGeneral, setIsModalGeneral] = useState<boolean | null | number>(
    false
  );
  const [editPost, setEditPost] = useState<Row | null>(null);

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
        onSetEditPost={(item) => {
          setEditPost(item);
          setIsModalGeneral(true);
        }}
      />
      <Modals
        onSetData={(propData) => {
          setData((prev) =>
            editPost
              ? [
                  ...prev.map((item) =>
                    item.id !== editPost.id ? item : propData
                  ),
                ]
              : [propData, ...prev]
          );
        }}
        isModalGeneral={isModalGeneral}
        setIsModalGeneral={setIsModalGeneral}
        onCloseModalGeneral={() => {
          setIsModalGeneral(false);
          setEditPost(null);
        }}
        editPost={editPost}
      />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
