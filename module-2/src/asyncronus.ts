interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  return await response.json();
};
const getTodoData = async (): Promise<void> => {
  const data = await getTodo();
  console.log(data);
};
getTodoData();
