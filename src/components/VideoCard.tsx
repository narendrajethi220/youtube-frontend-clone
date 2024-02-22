export function VideoCard(props: any) {
  return (
    <div className="p-3 cursor-pointer">
      <img src={props.image} className="rounded-xl" alt="Thumbnail" />
      <div className="grid grid-cols-12 pt-3">
        <div className="col-span-1">
          <img
            className={"rounded-full w-15 h-15"}
            src={props.thumbnail}
            alt="Thumbnail"
          />
        </div>
        <div className="col-span-11 pl-1">
          <div>{props.title}</div>
          <div className="col-span-11 text-gray-400 text-base ">
            {props.author}
          </div>
          <div className="col-span-11 text-gray-400 text-base ">
            {props.views} <span className="font-bold text-lg">·</span>{" "}
            {props.timestamp}
          </div>
        </div>
      </div>
      <span></span>
      <VideoCard2></VideoCard2>
    </div>
  );
}
function VideoCard2() {
  return <div></div>;
}
