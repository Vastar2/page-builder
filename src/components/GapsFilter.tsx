import { FC } from "react";

interface GapsFilterProps {
  isGap: boolean;
  gap: number;
  onOpenGapsFilter: () => void;
  onSetModalData: (name: string, data: number | string | null) => void;
}

const GapsFilter: FC<GapsFilterProps> = ({
  isGap,
  gap,
  onOpenGapsFilter,
  onSetModalData,
}) => {
  return (
    <div className="flex flex-1 gap-2 items-center relative">
      <button
        type="button"
        className="flex justify-center gap-1 w-full items-center py-2 rounded-md duration-300 border border-indigo-600 hover:bg-indigo-200"
        onClick={onOpenGapsFilter}
      >
        <p className="text-indigo-600">({gap})</p>
        <p>Gap</p>
      </button>
      {isGap && (
        <div className="absolute top-16 w-full bg-white py-3 px-4 rounded-md z-50 shadow-md">
          <input
            type="range"
            className="w-full cursor-pointer"
            min="0"
            max="20"
            step="4"
            value={gap}
            onChange={(e) => {
              onSetModalData("gap", Number(e.target.value));
            }}
          />
        </div>
      )}
    </div>
  );
};

export default GapsFilter;
