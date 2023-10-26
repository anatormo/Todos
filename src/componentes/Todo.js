import { useState } from 'react';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';

const initialTodos = [
    {id: 1, name:"Todos 1", isComplete: false},
    {id: 2, name:"Todos 2", isComplete: false}, 
];


const Todo = () => {
    
    const [todos, addTodos] = useState(initialTodos);
    const [value, setValue] = useState("");

    function saveValue(event) {
        setValue(event.target.value)
    }

    function addList(){//valor para que siga el id del ultimo que tiene
        addTodos([...todos, {id: todos.length+1,  name: value, isComplete: false}])//en el lugar donde iba value hay que darle los valores de la lista
    }     //era addTodos([...todos, value])

    return (
        <div>
            <InputTodo ChangeInput={saveValue} Value={value} ClickButton={addList}/>
            <ListTodo Todos={todos} setTodos={addTodos}/>
        </div>
    )
}


export default Todo;



//{"id:1, titulo: Hola, precio: 10,90€"}