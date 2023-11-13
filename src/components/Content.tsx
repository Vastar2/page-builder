import { FC } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Row } from "../types";
import { twMerge } from "tailwind-merge";

interface ContentProps {
  data: Row[];
  onDeleteRow: (id: string | null) => void;
  onSetEditPost: (item: Row | null) => void;
}

const Content: FC<ContentProps> = ({ data, onDeleteRow, onSetEditPost }) => {
  return (
    <ul className="flex justify-center flex-wrap gap-3 relative">
      {data.map((item, index) => (
        <li
          key={index}
          className={`grid bg-white p-2 pt-5 rounded-md shadow-md relative overflow-hidden`}
        >
          <div
            className="w-full h-2 absolute"
            style={{ backgroundColor: item.color }}
          ></div>
          <div>
            <div className="flex mb-2">
              <p className="font-bold">{item.collectionName}</p>
              <div className="ml-auto">
                <button
                  type="button"
                  onClick={() => onSetEditPost(item)}
                  className="w-8 h-8 flex justify-center items-center bg-white p-2 rounded-md duration-300 border border-indigo-300 hover:bg-gray-100"
                >
                  <AiOutlineEdit />
                </button>
              </div>
              <div className="ml-2">
                <button
                  type="button"
                  onClick={() => onDeleteRow(item.id)}
                  className="w-8 h-8 flex justify-center items-center bg-white p-2 rounded-md duration-300 border border-indigo-300 hover:bg-gray-100"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
            <ul
              className="grid"
              style={{
                gap: data[index].gap,
                gridTemplateColumns: `repeat(${item.numberOfColumns}, 1fr)`,
              }}
            >
              {item.posts.map((value, index) => (
                <li
                  key={index}
                  className={`bg-gray-100 p-2 rounded-md relative`}
                >
                  {value ? (
                    <div
                      className={twMerge(
                        item.numberOfColumns === 1 ? "flex gap-4" : "block"
                      )}
                    >
                      <div
                        className={twMerge(
                          "mb-1",
                          item.numberOfColumns === 1 ? "mr-auto" : ""
                        )}
                      >
                        <p className="font-bold mb-1">{value.title}</p>
                        <p
                          className={twMerge(
                            "break-words",
                            item.numberOfColumns === 1 ? " w-56" : " w-28"
                          )}
                        >
                          {value.description}
                        </p>
                      </div>
                      {value.file && (
                        <div>
                          <img
                            src={URL.createObjectURL(value.file)}
                            alt="user image"
                            className="rounded-md shadow-md w-32"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex justify-center items-center h-full">
                      <p>Nothing</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Content;
