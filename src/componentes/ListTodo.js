import { useState } from "react"

const ListTodo = ({Todos, setTodos}) => {
  const rojo = {backgroundColor: "red"}
  const verde = {backgroundColor: "green"}
    return (
        <div>
         
          <ul>
            
            {Todos.map(todo =>
              <li key={todo.id} >
              {todo.name}
              
              <button onClick={()=>{
                //para que en la consola del pc salgo el indice del todo en el que estas
                const indice = Todos.indexOf(todo);
                console.log(indice);
                //para actualizar
                const updateTodos = Todos.map(todo => {
                  //revisar que todo queremos añadir en updateTodos
                  if(todo.id===indice+1){
                    return({...todo, isComplete:true});
                    //sino encontramos el todo a cambiar {...todo}
                  } 
                  return todo;
                } 
                  );
                setTodos(updateTodos);
                console.log(updateTodos);
                }
                }>Actualizar</button>

              <button onClick={() => {
                let indice = Todos.indexOf(todo)
                Todos.splice(indice, 1) //At position index, remove n=1 items
                setTodos([...Todos])
              }}>
              Eliminar</button>

             {todo.isComplete ? <span style={verde}> Hecho</span> : <span style={rojo}> Pendiente </span>}
          </li>
      )}
        </ul> 
       </div>
    )
}

export default ListTodo;