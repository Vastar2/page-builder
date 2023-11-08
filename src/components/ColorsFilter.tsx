import { HexColorPicker } from "react-colorful";
import { IoMdColorFilter } from "react-icons/io";
import { FC } from "react";

interface ColorsFilterProps {
  isColors: boolean;
  color: string;
  onOpenColorsFilter: () => void;
  onSetColor: (e: string) => void;
}

const ColorsFilter: FC<ColorsFilterProps> = ({
  isColors,
  color,
  onOpenColorsFilter,
  onSetColor,
}) => {
  return (
    <div className="flex flex-1 gap-2 items-center relative">
      <button
        type="button"
        className="flex justify-center gap-1 w-full items-center py-2 rounded-md duration-300 border border-indigo-600 hover:bg-indigo-200"
        onClick={onOpenColorsFilter}
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
            onChange={(e) => onSetColor(e)}
            style={{ width: "100%", height: "180px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ColorsFilter;
