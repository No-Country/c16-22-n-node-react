import { Card } from 'flowbite-react';

function UserListItem({user, handleFunction}) {
    return (
      <Card onClick={handleFunction} imgSrc={user.pic}>
        <h5>{user.name}</h5>
        <h5>{user.email}</h5>
      </Card>
    );
}

export default UserListItem