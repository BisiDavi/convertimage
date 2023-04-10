/* eslint-disable @next/next/no-img-element */
interface Props {
  files: any[];
}

export default function ImageThumbs({ files }: Props) {
  console.log("files", files);
  
  return (
    <>
      {files.length > 0 && (
        <div className="thumbs flex space-x-8 my-4 border p-4 rounded-lg">
          {files.map((file) => (
            <div className="thumb" key={file.name} title={file.name}>
              <img
                src={file.preview}
                alt={file.name}
                onLoad={() => URL.revokeObjectURL(file.preview)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
