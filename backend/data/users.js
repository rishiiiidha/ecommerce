import bcrypt from 'bcryptjs';
const users = [
  {
    username: 'user1',
    email: 'user1@example.com',
    password: bcrypt.hashSync('password1', 10),
    isAdmin: false
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    password: bcrypt.hashSync('password2', 10),
    isAdmin: false
  },
  {
    username: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('adminpassword', 10),
    isAdmin: true
  }
];
export default users;