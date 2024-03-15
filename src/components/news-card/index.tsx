import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  journalis?: boolean;
  data: any;
}

const NewsCard = (props: Props) => {
  const { journalis, data } = props;
  return (
    <div className="flex flex-col gap-1">
      <img src={data.urlToImage} />
      <label className=" text-2xl">{data.title}</label>
      <p className=" text-sm text-justify">{data.description}</p>
      {journalis && (
        <div className="flex flex-row items-center gap-3 mt-2">
          <Avatar className=" w-9 h-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <label className=" text-sm">Wonu</label>
            <p className=" text-xs">Newsman</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsCard;
