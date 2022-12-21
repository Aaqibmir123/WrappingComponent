import React from 'react';
const UsersList = (props) => {
  return (
    <div className="new">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;