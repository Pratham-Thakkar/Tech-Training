import { ChangeEvent } from "react";

const ImageUploader = ({ setUploadedImage }: any) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUploadedImage(e.target.files![0]);
  }
  return (
    <>
      <div>
        <h2>Add Image:</h2>
        <input type="file" onChange={(e) => handleChange(e)} />
      </div>
    </>
  );
};

export default ImageUploader;
