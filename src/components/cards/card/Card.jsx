export default function Card({ title, desc, ok, onClick }) {
  return (
    <div onClick={onClick} className="cart">
      <h3>" {title} "</h3>
      <p>{desc}</p>
      <div className={`ok ${ok === 1 && "active"}`}>
        <div className="up"></div>
        <div className="down"></div>
      </div>
    </div>
  );
}
