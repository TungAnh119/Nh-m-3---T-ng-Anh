const Tab = ({ items, activeKey, onChange }) => {
  const handleClick = (key) => {
    if (key === activeKey) return;
    onChange(key);
  };

  return (
    <div className="tab-container">
      {items.map((item, index) => (
        <div key={index} className="tab-item ">
          <span
            onClick={() => handleClick(item.key)}
            className={item.key === activeKey ? "active" : ""}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tab;
