import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBooksByID } from "../../services/bookApi";
import DetailsItem from "../../features/DetailsItem";

function Details() {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("id");

  const { data: book } = useQuery({
    queryKey: ["books", id],
    queryFn: () => getBooksByID(id),
  });

  return (
    <div className="dark:bg-gray-950 duration-200 ">
      <div className="bg-white dark:bg-gray-950 dark:text-white duration-200 ">
        <div className="app w-full max-w-7xl md:m-[100px] border shadow-2xl ">
          {book?.map((detail) => {
            return <DetailsItem detail={detail} key={detail.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
