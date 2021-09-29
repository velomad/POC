import React from "react";
import Compress from "browser-image-compression";

const FileUpload = ({ documentName }) => {
  const [image, setImage] = React.useState("");
  const [imagePreview, setImagePreview] = React.useState(null);
  const [imagePreviewLoading, setimagePreviewLoading] = React.useState(false);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadstart = () => {
      setimagePreviewLoading(true);
    };
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
      }
      reader.onloadend = () => {
        setimagePreviewLoading(false);
      };
    };
    if (file) {
      reader.readAsDataURL(event.target.files[0]);
    }

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 420,
      useWebWorker: true,
    };

    Compress(file, options)
      .then((compressedBlob) => {
        compressedBlob.lastModifiedDate = new Date();
        // Convert the blob to file
        const convertedBlobFile = new File([compressedBlob], file.name, {
          type: file.type,
          lastModified: Date.now(),
        });
        setImage(convertedBlobFile);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log(image);

  //   const onFileResize = (e) => {
  //     const file = e.target.files[0];
  //     Resizer.imageFileResizer(
  //       file, // the file from input
  //       480, // width
  //       480, // height
  //       "JPEG", // compress format WEBP, JPEG, PNG
  //       70, // quality
  //       0, // rotation
  //       (uri) => {
  //         console.log(uri);
  //         // You upload logic goes here
  //         setImage(uri);
  //       },
  //       "base64" // blob or base64 default base64
  //     );
  //   };

  return (
    <div className="space-y-2">
      <input
        type="file"
        className="file"
        name="myImage"
        onChange={onFileChange}
        // accept="image/*"
        id="input"
        style={{ display: "none" }}
      />

      <div className="w-60 relative text-center h-72  border-2 border-gray-400 rounded-md cursor-pointer border-dashed">
        <label draggable="true" htmlFor="input" className="">
          {imagePreview ? (
            <div className="py-4">
              <img className=" object-cover" src={imagePreview} />
            </div>
          ) : (
            <div className="absolute-center">
              Drag and drop files here or click to browse
            </div>
          )}
        </label>
      </div>

      <div className="w-60">
        <div className="text-center">{documentName}</div>

        {imagePreview !== null && (
          <div
            className="bg-red-400 text-center p-1 cursor-pointer text-white"
            onClick={() => setImagePreview(null)}
          >
            Remove
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
