import { useEffect, useState } from "react";
import { fetchUsers, removeUser } from "../api/userApi";
import UserTable from "../components/UserTable";
import Loader from "../components/Loader";
import Layout from "../components/Layout";
import toast from "react-hot-toast";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((res) => setUsers(res.data))
      .catch(() => alert("Failed to load users"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
  try {
    await removeUser(id);
    setUsers(users.filter((u) => u.id !== id));
    toast.success("User deleted");
  } catch {
    toast.error("Delete failed");
  }
};


  return (
    <Layout>
      {loading ? <Loader /> : <UserTable users={users} onDelete={handleDelete} />}
    </Layout>
  );
}
