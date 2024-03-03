import React, { useState } from 'react';
// import ToDoList from './ToDoLists/ToDoList.';
import ToDoList from './ToDoLists/ToDList';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
// import '../tailwind.config';

function App() {
  const [InputItem, setInputItem] = useState('');
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputItem(event.target.value);
  };

  const ListOfItems = () => {
    setItems((prevItems) => {
      return [...prevItems, InputItem];
    });
    setInputItem('');
  };

  const deleteItems = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className='main-div flex justify-center items-center h-screen'>
      <div className='center-div text-center'>
        <h1 className='text-4xl mb-6'>ToDo List</h1>
        <input
          type='text'
          placeholder='Add To Items'
          value={InputItem}
          onChange={itemEvent}
          className='border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none'
        />
        <button
          onClick={ListOfItems}
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
        >
          +
        </button>

        <ol className='mt-4'>
          {Items.map((itemval, index) => {
            return (
              <ToDoList
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
