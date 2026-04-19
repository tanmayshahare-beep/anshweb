import React, { useState, useEffect } from 'react';

const DatabaseExample = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Example function to fetch users from MongoDB
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, this would be an API call to your backend
      // For example: const response = await fetch('/api/users');
      // const data = await response.json();
      
      // Mock data for demonstration
      const mockUsers = [
        { _id: 1, name: 'John Doe', email: 'john@example.com', role: 'student' },
        { _id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'instructor' },
      ];
      
      setUsers(mockUsers);
    } catch (err) {
      setError('Failed to fetch users');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="database-example">
      <h2>Database Integration Example</h2>
      
      {error && <p className="error">Error: {error}</p>}
      
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div>
          <h3>Users in Database:</h3>
          {users.length > 0 ? (
            <ul>
              {users.map(user => (
                <li key={user._id}>
                  {user.name} ({user.email}) - {user.role}
                </li>
              ))}
            </ul>
          ) : (
            <p>No users found</p>
          )}
        </div>
      )}
      
      <button onClick={fetchUsers} disabled={loading}>
        Refresh Users
      </button>
      
      <div className="instructions">
        <h4>To connect to MongoDB:</h4>
        <ol>
          <li>Ensure MongoDB is running locally or set MONGODB_URI environment variable</li>
          <li>Run <code>pnpm run init-db</code> to initialize database collections</li>
          <li>Implement actual API endpoints in <code>api/users.js</code> and <code>api/courses.js</code></li>
          <li>Replace mock data with real API calls</li>
        </ol>
      </div>
    </div>
  );
};

export default DatabaseExample;