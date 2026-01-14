import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUsers } from "../api/userApi";
import Layout from "../components/Layout";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsers().then((res) => {
      setUser(res.data.find((u) => u.id == id));
    });
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </Layout>
  );
}
