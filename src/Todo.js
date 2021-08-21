import { useState } from "react";
import { projectFirestore,timestamp } from "./firebase/config";
import useFirestore from "./hooks/useFirestore";
import ModalTest from "./ModalTest";

const Todo = () => {
    
    const[del, setDel] = useState('');

    const handleClick = (e) =>{
        e.preventDefault();
        var task = e.target[0].value;
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        const createdAt = timestamp();
        
        projectFirestore.collection('tasks').add({ task, createdAt });
        

        
        
    }




    const { docs } = useFirestore('tasks'); 
    
    const ids = [];
    
    docs.forEach(doc => ids.push(doc.id));

    const handleDelete = () =>{
        projectFirestore.collection("tasks")
        .get()
        .then(res => {
            res.forEach(element => {
            element.ref.delete();
            });
        });
    }

    const deleteTask = (id) =>{
        
        projectFirestore.collection("tasks").doc(id).delete();
    }
    



    return ( 
        <div className="todo">
            <h1 className="title">To-Do App</h1>
            <div className="box">
                <form onSubmit={handleClick}>
                    <input type="text" placeholder="Enter Task" required />
                    <button><i class="fas fa-plus"></i></button>
                </form>
                <div className="grid">
                    {   docs && 
                        docs.map(doc => (
                            <div className="task">
                                <p>{ doc.task }</p>
                                <button onClick={() => deleteTask(doc.id)}><i class="fas fa-trash"></i></button>
                                <ModalTest id= {doc.id} />
                            </div>
                        ))
                    }   
                </div>
                <div className="deleteAllTasks">
                    { docs && <div className="counter">You have {docs.length} task(s)</div>}
                    <div><button onClick={handleDelete}>Clear all</button></div>
                </div>
            </div>
          
            
        </div>
     );
}
 
export default Todo;