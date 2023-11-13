import { FC, useState } from "react";
import ColumnsFilter from "./ColumnsFilter";
import ColorsFilter from "./ColorsFilter";
import GapsFilter from "./GapsFilter";
import { Row } from "../types";

interface HeaderProps {
  modalData: Row;
  onSetModalData: (name: string, data: number | string | null) => void;
}

const Header: FC<HeaderProps> = ({ modalData, onSetModalData }) => {
  const [isColumns, setIsColumns] = useState(false);
  const [isColors, setIsColors] = useState(false);
  const [isGap, setIsGap] = useState(false);

  return (
    <div className="w-full flex justify-around items-center bg-white gap-2 p-2 rounded-md relative ml-auto mr-auto shadow-md mb-4">
      <ColumnsFilter
        isColumns={isColumns}
        numberOfColumns={modalData.numberOfColumns}
        onOpenColumnsFilter={() => {
          if (isColors || isGap) {
            setIsColors(false);
            setIsGap(false);
          }
          setIsColumns(!isColumns);
        }}
        onCloseColumnsFilter={(item) => {
          setIsColumns(false);
          onSetModalData("numberOfColumns", item);
        }}
      />
      <ColorsFilter
        isColors={isColors}
        color={modalData.color}
        onOpenColorsFilter={() => {
          if (isColumns || isGap) {
            setIsColumns(false);
            setIsGap(false);
          }
          setIsColors(!isColors);
        }}
        onSetModalData={onSetModalData}
      />
      <GapsFilter
        isGap={isGap}
        gap={modalData.gap}
        onOpenGapsFilter={() => {
          if (isColumns || isColors) {
            setIsColumns(false);
            setIsColors(false);
          }
          setIsGap(!isGap);
        }}
        onSetModalData={onSetModalData}
      />
    </div>
  );
};

export default Header;
