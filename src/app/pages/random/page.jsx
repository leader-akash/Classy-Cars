"use client"
import React, { useEffect, useState } from 'react';
import { useGetAllUsersQuery } from '../../redux/services/users';
import Navbar from '../../components/navbar/Navbar';

const Random = () => {
  const [users, setUsers] = useState([]);
  const { data: usersData } = useGetAllUsersQuery('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (usersData) {
      setUsers(usersData);
    }
  }, [usersData]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <h1>hello from users</h1>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <h3 key={user.id}>{user.name}</h3>)
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default Random;
