import { HexColorPicker } from "react-colorful";
import { IoMdColorFilter } from "react-icons/io";
import { FC } from "react";

interface ColorsFilterProps {
  isColors: boolean;
  isColumns: boolean;
  setIsGap: (value: boolean) => void;
  setIsColumns: (value: boolean) => void;
  setIsColors: (value: boolean) => void;
  color: string;
  setColor: (value: string) => void;
}

const ColorsFilter: FC<ColorsFilterProps> = ({
  isColumns,
  setIsGap,
  setIsColumns,
  setIsColors,
  isColors,
  color,
  setColor,
}) => {
  return (
    <div className="flex flex-1 gap-2 items-center relative">
      <button
        type="button"
        className="flex justify-center gap-1 w-full items-center py-2 rounded-md duration-300 border border-indigo-600 hover:bg-indigo-200"
        onClick={() => {
          if (isColumns || setIsGap) {
            setIsColumns(false);
            setIsGap(false);
          }
          setIsColors(!isColors);
        }}
      >
        <div
          className="bg-indigo-400 rounded-md p-1"
          style={{ backgroundColor: color }}
        >
          <IoMdColorFilter className="text-white" />
        </div>
        <p>Color</p>
      </button>
      {isColors && (
        <div className="absolute w-full top-16 p-3 rounded-md bg-white shadow-md z-50 ">
          <HexColorPicker
            color={color}
            onChange={setColor}
            className=""
            style={{ width: "100%", height: "180px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ColorsFilter;
