function User({ name, picture }) {
  return (
    <div className="name-and-picture">
      <p>{name}</p>
      <div className="picture">
        <img src={picture} alt="user" />
      </div>
    </div>
  );
}

export default User;
