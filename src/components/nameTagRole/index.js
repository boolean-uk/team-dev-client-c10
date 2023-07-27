const NameTagRole = ({ user }) => {
  return (
    <>
      <div id="post-user-name">
        <p>
          {user.firstName} {user.lastName}
        </p>
        <small>
          {user.role[0]}
          {user.role.toLowerCase().slice(1)}
        </small>
      </div>
      <div className="edit-icon">
        <p>...</p>
      </div>
    </>
  );
};

export default NameTagRole;
