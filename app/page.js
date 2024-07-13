"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    setMainTask([...mainTask, { title, description }]);
    setTitle("");
    setDescription("");
    console.log(mainTask);
  }

  const deleteHandler = (event) => {
    let copyTask = [...mainTask];
    copyTask.splice(event, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Task available</h2>;
  if(mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return (
        <div key={index} id="card" className="bg-gray-800 flex flex-row justify-between text-white px-5 py-4 rounded-md w-3/4">
          <h2 className="font-bold">{task.title}</h2>
          <p>{task.description}</p>
          <button
          onClick={() => deleteHandler(index)}
          className="bg-red-500 transition-all duration-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      )
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-10 text-3xl text-center font-bold">Manoj's Todo List</h1>

      <form className="flex flex-col justify-center mt-10 gap-2 items-center" onSubmit={submitHandler} >
        <input type="text" className="border border-gray-300 rounded-md px-4 py-2 mr-2 bg-gray-800 text-white" placeholder="Add a task" spellcheck="false" value={title} onChange={(event) => {
          setTitle(event.target.value);
        }} />
        <textarea className="border border-gray-300 rounded-md px-4 py-2 mr-2 bg-gray-800 text-white min-h-14 max-h-48" placeholder="Enter description" spellcheck="false" value={description} onChange={(event) => {
          setDescription(event.target.value);
        }} ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </form>
      <hr />
      <div className=" bg-black flex flex-col justify-center mt-10 gap-3 py-4 items-center min-h-44 w-full" >
          {renderTask}
      </div>
    </>
  )
};

export default page;