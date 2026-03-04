const Item = ({ items }) => {
  return (
    <div>
      <h2>Your List</h2>

      {items.map((x, i) => (
        <p key={i}>{x}</p>
      ))}
    </div>
  );
};

export default Item;