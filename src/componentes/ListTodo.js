import { useState } from "react"

const ListTodo = ({Todos, setTodos}) => {
    return (
        <div>
         
          <ul>
            
            {Todos.map(todo =>
              <li key={todo.name} >
              {todo.name}
              
              <button onClick={()=>{
                //para que en la consola del pc salgo el indice del todo en el que estas
                const index = Todos.indexOf(todo);
                console.log(index);
                //para actualizar
                const updateTodos = Todos.map(todo => {
                  //revisar que todo queremos añadir en updateTodos
                  if(true){
                    return(
                      {...todo, isComplete: true}
                    )
                    //sino encontramos el todo a cambiar {...todo}
                  }else return {...todo}
                } 
                  );
                console.log(updateTodos);

                }
                
                }>Actualizar</button>

              <button onClick={() => {
                let index = Todos.indexOf(todo)
                Todos.splice(index, 1) //At position index, remove n=1 items
                setTodos([...Todos])
              }}>
              Eliminar</button>
          </li>
      )}
        </ul> 
       </div>
    )
}

export default ListTodo;