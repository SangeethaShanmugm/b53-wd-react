export function Profile({ name, pic }) {
  return (
    <div>
      <img style={{ width: "300px", height: "300px" }} src={pic} />
      <h1>{name}</h1>
    </div>
  );
}
