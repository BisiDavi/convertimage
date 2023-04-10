/* eslint-disable @next/next/no-img-element */
interface Props {
  files: any[];
}

export default function ImageThumbs({ files }: Props) {
  console.log("files", files);

  return (
    <div className="thumbs flex space-x-8 my-4 border p-4 rounded-lg">
      {files.length > 0 &&
        files.map((file) => (
          <div className="thumb" key={file.name} title={file.name}>
            <img
              src={file.preview}
              onLoad={() => URL.revokeObjectURL(file.preview)}
              alt={file.name}
            />
          </div>
        ))}
    </div>
  );
}