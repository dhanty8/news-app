import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center mt-20">
      <Loader2 className="h-[100px] w-[100px] animate-spin" />
    </div>
  );
};

export default Loading;
