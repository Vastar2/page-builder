import { TbColumns3 } from "react-icons/tb";
import { FC } from "react";

interface ColumnsFilterProps {
  isColumns: boolean;
  numberOfColumns: number | null;
  onOpenColumnsFilter: () => void;
  onCloseColumnsFilter: (item: number) => void;
}

const ColumnsFilter: FC<ColumnsFilterProps> = ({
  isColumns,
  numberOfColumns,
  onOpenColumnsFilter,
  onCloseColumnsFilter,
}) => {
  return (
    <div className="flex flex-1 items-center gap-4 relative">
      <button
        type="button"
        className="flex justify-center w-full gap-1 items-center py-2 rounded-md duration-300 border border-indigo-600 hover:bg-indigo-200"
        onClick={onOpenColumnsFilter}
      >
        {numberOfColumns ? (
          <p className="text-indigo-600">({numberOfColumns})</p>
        ) : (
          <TbColumns3 className="text-indigo-600 text-lg" />
        )}
        <p>Columns</p>
      </button>
      {isColumns && (
        <ul className="absolute top-16 w-full bg-white py-3 px-4 rounded-md z-50 shadow-md">
          {[...Array(3).keys()].map((item) => (
            <li
              key={item}
              className="flex justify-center  items-center mb-2 last-of-type:mb-0"
            >
              <button
                type="button"
                className="block w-full rounded-md bg-gray-100 py-1 duration-300 hover:bg-indigo-200"
                onClick={() => {
                  onCloseColumnsFilter(item + 1);
                }}
              >
                {item + 1}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ColumnsFilter;
