export interface Item {
  title: string;
  description: string;
  file: File | null;
}

export interface Row {
  id: string;
  collectionName: string;
  numberOfColumns: number;
  color: string;
  gap: number;
  posts: (null | Item)[];
}
