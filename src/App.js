import React, { Component } from 'react';
import './App.css';
import SelectedUserList from './components/SelectedUserList';
import UserList from './components/UserList';

const userDB = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    id: 2,
    firstName: 'Test',
    lastName: 'Doe',
  },
  {
    id: 3,
    firstName: 'Masha',
    lastName: 'Doe',
  },
  {
    id: 4,
    firstName: 'Sasha',
    lastName: 'Doe',
  },
  {
    id: 5,
    firstName: 'Dasha',
    lastName: 'Doe',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userDB.map((user) => ({ ...user, isSelected: false })),
    };
  }

  setUsers = (newUsers) => this.setState({ users: newUsers });

  render() {
    const { users } = this.state;

    return (
      <>
        <header>
          <SelectedUserList users={[...users]} />
        </header>

        <main>
          <UserList users={users} setUsers={this.setUsers} />
        </main>
      </>
    );
  }
}

export default App;
