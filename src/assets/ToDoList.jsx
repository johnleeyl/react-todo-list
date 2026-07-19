import {useState} from 'react'
export const ToDoList = () =>{
    const [tasks, setTasks] = useState(['Eat Breakfast', 'Walk the dog']);
    const [userInput, setUserInput] = useState('');

    const handleNewInput = (e)=>{
        setUserInput(e.target.value);
    }

    const addNewInput = ()=>{
        if(userInput){
            setTasks([...tasks, userInput]);
            setUserInput('');
        }
        else{
            return;
        }

    }

    const deleteTask = (index)=>{
        setTasks(tasks.filter((task,i) => i !=index));
        

    }

    const handleTaskPositionUp = (index)=>{
        const updatedTasks = [...tasks];
        if(index != 0){
            [updatedTasks[index-1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index-1]];
            setTasks(updatedTasks);
        }
        else{
            return;
        }
    }

    const handleTaskPositionDown = (index)=>{
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index+1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index+1]];
            setTasks(updatedTasks);
        }
        else{
            return;
        }
    }

    return (
        <div className="container">
            <h1>To-Do-List</h1>
            <input type="text" className="searchfield" placeholder="Enter a task..." value={userInput} onChange={handleNewInput}/>
            <button className="add-button" onClick={addNewInput}>Add</button>

            {tasks.map((task, index) =>
                <div className='task-options'>
                    <p className='task'>{task}</p>
                    <button className='task-buttons' id='delete-button'onClick={()=>deleteTask(index)}>Delete</button>
                    <button className='task-buttons' onClick={() =>handleTaskPositionUp(index)}>Up</button>
                    <button className='task-buttons'onClick={()=>handleTaskPositionDown(index)}>Down</button>
                </div>
            )}
        </div>
    );
}