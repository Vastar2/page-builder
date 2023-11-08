import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { Item, Row } from "../types";

export const onCreateRow = (
  collectionName: string,
  posts: (null | Item)[],
  numberOfColumns: number,
  color: string,
  gap: number,
  setData: React.Dispatch<React.SetStateAction<Row[]>>,
  setNumberOfColumns: React.Dispatch<React.SetStateAction<number>>,
  setCollectionName: React.Dispatch<React.SetStateAction<string>>,
  setColor: React.Dispatch<React.SetStateAction<string>>,
  setGap: React.Dispatch<React.SetStateAction<number>>,
  setPosts: React.Dispatch<React.SetStateAction<(null | Item)[]>>,
  setIsModalGeneral: React.Dispatch<
    React.SetStateAction<boolean | null | number>
  >
) => {
  if (!collectionName) {
    toast.error("You should add the name of collection");
    return;
  }
  if (!posts.some((element) => element !== null)) {
    toast.error("You should add at least one post");
    return;
  }

  toast.success("Row is created");
  setData((prev) => [
    { id: uuidv4(), collectionName, numberOfColumns, color, gap, posts },
    ...prev,
  ]);
  setNumberOfColumns(3);
  setCollectionName("");
  setColor("#818CF8");
  setGap(8);
  setPosts([...Array(numberOfColumns)].map(() => null));
  setIsModalGeneral(false);
};
