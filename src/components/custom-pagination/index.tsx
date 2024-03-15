import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useNavigate } from "react-router-dom";
import { useQuery } from "@/lib/useQuery";

interface Props {
  totalPage: number;
}

export function CustomPagination(props: Props) {
  const query = useQuery();
  const navigate = useNavigate();
  const page =
    query.get("page") === null ? 1 : parseInt(query.get("page") as string);
  const { totalPage } = props;

  const handleNext = () => {
    navigate(`/?page=${page + 1}`);
  };

  const handleBack = () => {
    if (page > 1) {
      navigate(`/?page=${page - 1}`);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handleBack} />
        </PaginationItem>
        {Array.from({ length: totalPage }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => navigate(`/?page=${i + 1}`)}
              isActive={i + 1 === page}
              className=" cursor-pointer"
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
