import { FC, useState } from "react";
import ColumnsFilter from "./ColumnsFilter";
import ColorsFilter from "./ColorsFilter";
import GapsFilter from "./GapsFilter";

interface HeaderProps {
  numberOfColumns: number;
  setNumberOfColumns: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  gap: number;
  setGap: React.Dispatch<React.SetStateAction<number>>;
}

const Header: FC<HeaderProps> = ({
  numberOfColumns,
  setNumberOfColumns,
  color,
  setColor,
  gap,
  setGap,
}) => {
  const [isColumns, setIsColumns] = useState(false);
  const [isColors, setIsColors] = useState(false);
  const [isGap, setIsGap] = useState(false);

  return (
    <div className="w-full flex justify-around items-center bg-white gap-2 p-2 rounded-md relative ml-auto mr-auto shadow-md mb-4">
      <ColumnsFilter
        isColors={isColors}
        setIsGap={setIsGap}
        setIsColors={setIsColors}
        setIsColumns={setIsColumns}
        isColumns={isColumns}
        numberOfColumns={numberOfColumns}
        setNumberOfColumns={setNumberOfColumns}
      />
      <ColorsFilter
        isColumns={isColumns}
        setIsGap={setIsGap}
        setIsColumns={setIsColumns}
        setIsColors={setIsColors}
        isColors={isColors}
        color={color}
        setColor={setColor}
      />
      <GapsFilter
        isColumns={isColumns}
        setIsColors={setIsColors}
        setIsColumns={setIsColumns}
        setIsGap={setIsGap}
        isGap={isGap}
        gap={gap}
        setGap={setGap}
      />
    </div>
  );
};

export default Header;
