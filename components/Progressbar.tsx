import formatImageSize from "@/utils/formatImageSize";

interface Props {
  value: number;
  item: {
    name: string;
    size: number;
  };
}

export default function Progressbar({ item, value }: Props) {
  const { name, size } = item;
  const imageSize = formatImageSize(size);
  return (
    <div className="flex items-center gap-4 my-4 bg-gray-300 py-2 rounded px-5">
      <label htmlFor={name}>
        <span className="name">{name}</span>
        <span className="ml-4">{imageSize}</span>
      </label>
      <progress id={name} max="100" value={value} className="rounded-xl" />
      <span>{value}%</span>
      <style jsx>
        {`
          .name {
            width: 200px;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          label {
            display: flex;
            align-items: center;
          }
          progress[value] {
            appearance: none;
            border: none;
            width: 400px;
            height: 20px;
            background-color: whiteSmoke;
            border-radius: 3px;
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5) inset;
            color: royalblue;
            position: relative;
          }

          progress[value]::-webkit-progress-bar {
            background-color: whiteSmoke;
            border-radius: 3px;
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5) inset;
          }

          progress[value]::-webkit-progress-value {
            position: relative;
            background-size: 35px 20px, 100% 100%, 100% 100%;
            border-radius: 3px;
            animation: animate-stripes 5s linear infinite;
          }

          @keyframes animate-stripes {
            100% {
              background-position: -100px 0;
            }
          }

          progress[value]::-webkit-progress-value:after {
            content: "";
            position: absolute;
            width: 5px;
            height: 5px;
            top: 7px;
            right: 7px;
            background-color: white;
            border-radius: 100%;
          }

          progress[value]::-moz-progress-bar {
            background-image: -moz-linear-gradient(
                135deg,
                transparent,
                transparent 33%,
                rgba(0, 0, 0, 0.1) 33%,
                rgba(0, 0, 0, 0.1) 66%,
                transparent 66%
              ),
              -moz-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),
              -moz-linear-gradient(left, #09c, #f44);
            background-size: 35px 20px, 100% 100%, 100% 100%;
            border-radius: 3px;
          }

          progress::-webkit-progress-value {
            background-image: -webkit-linear-gradient(
                135deg,
                transparent,
                transparent 33%,
                rgba(0, 0, 0, 0.1) 33%,
                rgba(0, 0, 0, 0.1) 66%,
                transparent 66%
              ),
              -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),
              -webkit-linear-gradient(left, #09c, #f44);
          }

          progress::-moz-progress-bar {
            background-image: -moz-linear-gradient(
                135deg,
                transparent,
                transparent 33%,
                rgba(0, 0, 0, 0.1) 33%,
                rgba(0, 0, 0, 0.1) 66%,
                transparent 66%
              ),
              -moz-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),
              -moz-linear-gradient(left, #09c, #f44);
          }
        `}
      </style>
    </div>
  );
}
