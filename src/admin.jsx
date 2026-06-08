import { useState, useEffect } from "react";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [contacts, setContacts] = useState([]);

  const handleLogin = () => {
    if (password === "Neha@2026") {
      setIsLoggedIn(true);
    } else {
      alert("Wrong Password");
    }
  };

  const fetchContacts = () => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchContacts();
    }
  }, [isLoggedIn]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/contact/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        setContacts(
          contacts.filter((contact) => contact.id !== id)
        );

        alert("Contact deleted successfully");
      }
    } catch (error) {
      console.error(error);
      alert("Error deleting contact");
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Admin Login</h2>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          style={{ marginLeft: "10px" }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Messages</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>
                {new Date(contact.created_at).toLocaleString()}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;