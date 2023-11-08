import { useForm, SubmitHandler } from "react-hook-form";
import { FC, useState } from "react";
import { Item } from "../types";
import { AiOutlinePlus } from "react-icons/ai";

interface IFormInput {
  title: string;
  description: string;
  file: File;
  age: number;
}

interface NewPostFormProps {
  currentOpenPost: boolean | number | null;
  setCurrentOpenPost: React.Dispatch<
    React.SetStateAction<null | boolean | number>
  >;
  onNewFormData: (data: Item) => void;
}

const NewPostForm: FC<NewPostFormProps> = ({
  currentOpenPost,
  setCurrentOpenPost,
  onNewFormData,
}) => {
  const [file, setFile] = useState<null | File>(null);

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    onNewFormData({ ...data, file });
    setCurrentOpenPost(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = e.target.files;
      setFile(fileList);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full"
    >
      <p className="font-bold text-center mb-4 text-indigo-400 text-xl">
        New post №{typeof currentOpenPost === "number" && currentOpenPost + 1}
      </p>
      <label>
        Title
        <input
          className="w-full py-2 rounded-md border  mt-1 duration-300 border-gray-300 hover:border-gray-400 p-2"
          {...register("title", { required: true, maxLength: 20 })}
        />
      </label>
      <label>
        Description
        <textarea
          className="w-full block py-2 rounded-md border  mt-1 duration-300 border-gray-300 hover:border-gray-400 resize-none p-2"
          {...register("description", { pattern: /^[A-Za-z]+$/i })}
        />
      </label>
      <label>
        Image
        <div className="w-full h-20 py-6 rounded-md mt-1 border cursor-pointer border-gray-300 hover:border-gray-400 flex justify-center items-center">
          {!file ? (
            <AiOutlinePlus className="text-xl" />
          ) : (
            <p>{file[0].name}</p>
          )}
          <input
            type="file"
            className="hidden"
            {...register("file")}
            onChange={handleFileChange}
          />
        </div>
      </label>
      <input
        className="w-full mt-4 py-2 rounded-md border cursor-pointer text-indigo-600 border-indigo-400 duration-300 hover:bg-indigo-100 hover:border-indigo-600 hover:text-indigo-600"
        type="submit"
      />
    </form>
  );
};

export default NewPostForm;