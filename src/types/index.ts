export interface Item {
  title: string;
  description: string;
  file: File | null;
}

export interface Row {
  id: string | null;
  collectionName: string;
  numberOfColumns: number;
  color: string;
  gap: number;
  posts: (null | Item)[];
}

// export interface TModalData {
//   collectionName: string;
//   numberOfColumns: number;
//   color: string;
//   gap: number;
//   posts: (null | Item)[];
// }
