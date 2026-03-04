export default function Room(props) {
  return (
    <div>
      My Room
      <h3>Room: {props.name}</h3>
      <p>This room is in the house named: {props.houseName}</p>
      <p> The bedroom is in the room named: {props.roomName}</p>
    </div>
  );
}