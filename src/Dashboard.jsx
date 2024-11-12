import { useState } from 'react';


// TODO App in React JS
function Dashboard(){
    const [todos, setTodos] = useState([
        {value: "Moosa", disabled: true}, 
        {value: "Asad", disabled: true}
    ]);
    const [value, setValue] = useState("");
    // console.log("todos: ",todos);

    const addTodo = () => {
        setTodos([...todos, {value, disabled: true}]);
        setValue("");
    }

return(
    <div>
        <h1>Todo App in React JS</h1>

        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>

        <button onClick={() => setTodos([])}>Delete all</button>

        <br />
        <ul>
            {todos.map((v, i) => <li key={i}>
            <input disabled={v.disabled} defaultValue={v.value} type="text" onChange={(e) => v.value = e.target.value} />

            {v.disabled ?
            <button onClick={() => {
                todos.splice(i, 1, { ...v, disabled: false});
                setTodos([...todos]);    
            }}>Edit</button>
             :
             <button onClick={() => {
                v.disabled = true;
                setTodos([...todos]);
             }}>Update</button>
            }

             <button onClick={() => {
                    const oldTodos = [...todos];
                    oldTodos.splice(i, 1);
                    setTodos(oldTodos);
             }}>Delete</button>
            </li>)}
        </ul>
    </div>
)
}
export default Dashboard;

// Simple Counter Example
// function Dashboard(){
//     const [counter, setCounter] = useState(0);
// return(
//     <div>
//         <h1>{counter}</h1>
//         <button onClick={() => setCounter(counter + 1)}>Increment</button>
//     </div>
// )
// }
// export default Dashboard;