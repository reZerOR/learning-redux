const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input type="checkbox" name="" id="" />
      <p>todo title</p>
      <p>time</p>
      <p>description</p>
      <div>
        <button>delete</button>
        <button>edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
