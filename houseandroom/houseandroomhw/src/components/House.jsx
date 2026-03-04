import Room from "./Room";

export default function House(props) {
  return (
    <div>
      My House
      <h2>House: {props.name}</h2>
      <Room name="bedroom" houseName={props.name}></Room>
    </div>
  );
}