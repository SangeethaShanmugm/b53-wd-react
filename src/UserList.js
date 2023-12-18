import { Profile } from './Profile';

export function UserList() {
  const userList = [
    {
      name: "Sathya",
      pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Ganesh",
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    },
    {
      name: "Kaja",
      pic: "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
    }
  ];

  return (
    <>
      {userList.map((user) => (
        <Profile name={user.name} pic={user.pic} />
      ))}
    </>
  );
}
