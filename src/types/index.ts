// export interface Item {
//   numberOfColumns: number;
//   color: string;
//   id: string;
//   teamName: string[];
//   gap: number;
// }

export interface Item {
  title: string;
  description: string;
  file: File | null;
}

export interface Row {
  id: string;
  numberOfColumns: number;
  color: string;
  gap: number;
  posts: (null | Item)[];
}
