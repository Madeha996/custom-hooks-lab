import { useFetch } from "../hooks/useFetch";

interface IDate {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

const FetchDataEx = () => {
  const { data, isFetch } = useFetch<IDate>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(isFetch);

  return (
    <>
      {isFetch ? (
        <div>Loading .... </div>
      ) : (
        <div>
          <div>id: {data?.id}</div>
          <div>User id: {data?.userId}</div>
          <div>Title: {data?.title}</div>
          <div>Completed: {data?.completed ? "Yes" : "Not yet!"}</div>
        </div>
      )}
    </>
  );
};

export default FetchDataEx;
