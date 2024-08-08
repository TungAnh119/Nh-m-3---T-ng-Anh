import Button from "../Button";

const TodoItem = ({ data, onChange, onDelete }) => {
  return (
    <div className="item-container">
      <div className="item-data">
        <input onChange={onChange} checked={data.isDone} type="checkbox" />
        <div className={`item-text ${data.isDone ? "done" : ""}`}>
          {data.text}
        </div>
      </div>
      <Button size="small" color="danger" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
