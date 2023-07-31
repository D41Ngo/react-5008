import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ]);

  const handleGetTodos = () => {
    // axios("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
    //   (resp) => {
    //     console.log(resp);
    //     setTodos(resp);
    //   }
    // );

    // api1 => api2 => api3 => api4

    console.log("[[1]]");

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log("[[2]]");
        setTodos(resp);

        return [];
      })
      .then((resp) => {
        // .then trước đó không có giá trị trả về. không có return
        // Được ? Không
        console.log({ resp });
        return 100;
      })
      .then((payload) => {
        console.log(payload);
      })
      .catch((err) => {
        console.log("err", err);
      });

    console.log("[[3]]");
  };

  const __handleGetTodos = async () => {
    // await: dành cho promise, đợi khi nào promise trả về kết quả thì nó mới thực hiện tiếp dòng tiếp theo.

    try {
      console.log("[[1]]");
      const resp = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      console.log("[[2]]");

      const todos = await resp.json();

      console.log("[[3]]");

      setTodos(todos);
    } catch (err) {
      console.log(err);
    }

    console.log("call xong");
  };

  useEffect(() => {
    // TH2. dùng dể call api khi người dùng vào trang web của chúng ta.
    // handleGetTodos();

    __handleGetTodos();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((t) => {
          return (
            <li key={t.id}>
              {t.title}

              {t.completed ? (
                <span className="ml-2 badge bg-warning">Completed</span>
              ) : (
                <span className="ml-2 badge bg-success">Inprogress</span>
              )}
            </li>
          );
        })}
      </ul>
      <button onClick={handleGetTodos} className="btn btn-success">
        Get TODO
      </button>
    </div>
  );
}
