import { Card, Avatar } from 'flowbite-react'

function UserListItem({user, handleFunction}) {
    return (
      <Card onClick={handleFunction}>
        <Avatar img={user.pic}>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </Avatar>
      </Card>
    );
}

export default UserListItem