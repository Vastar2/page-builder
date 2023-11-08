import { FC, useState } from "react";
import ColumnsFilter from "./ColumnsFilter";
import ColorsFilter from "./ColorsFilter";
import GapsFilter from "./GapsFilter";

interface HeaderProps {
  numberOfColumns: number;
  color: string;
  gap: number;
  onSetNumberOfColumns: (item: number) => void;
  onSetColor: (e: string) => void;
  onSetGap: (e: number) => void;
}

const Header: FC<HeaderProps> = ({
  numberOfColumns,
  color,
  gap,
  onSetNumberOfColumns,
  onSetColor,
  onSetGap,
}) => {
  const [isColumns, setIsColumns] = useState(false);
  const [isColors, setIsColors] = useState(false);
  const [isGap, setIsGap] = useState(false);

  return (
    <div className="w-full flex justify-around items-center bg-white gap-2 p-2 rounded-md relative ml-auto mr-auto shadow-md mb-4">
      <ColumnsFilter
        isColumns={isColumns}
        numberOfColumns={numberOfColumns}
        onOpenColumnsFilter={() => {
          if (isColors || setIsGap) {
            setIsColors(false);
            setIsGap(false);
          }
          setIsColumns(!isColumns);
        }}
        onCloseColumnsFilter={(item) => {
          setIsColumns(false);
          onSetNumberOfColumns(item);
        }}
      />
      <ColorsFilter
        isColors={isColors}
        color={color}
        onOpenColorsFilter={() => {
          if (isColumns || setIsGap) {
            setIsColumns(false);
            setIsGap(false);
          }
          setIsColors(!isColors);
        }}
        onSetColor={onSetColor}
      />
      <GapsFilter
        isGap={isGap}
        gap={gap}
        onOpenGapsFilter={() => {
          if (isColumns || setIsColors) {
            setIsColumns(false);
            setIsColors(false);
          }
          setIsGap(!isGap);
        }}
        onSetGap={onSetGap}
      />
    </div>
  );
};

export default Header;
