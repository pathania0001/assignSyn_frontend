import { useEffect, useState } from "react";
import { addUser, editUser, fetchUsers } from "../api/userApi";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import toast from "react-hot-toast";

export default function UserForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (id) {
      fetchUsers().then((res) => {
        const user = res.data.find((u) => u.id == id);
        setForm(user);
      });
    }
  }, [id]);

 const submit = async (e) => {
  e.preventDefault();
  try {
    id ? await editUser(id, form) : await addUser(form);
    toast.success(id ? "User updated" : "User created");
    navigate("/");
  } catch {
    toast.error("Operation failed");
  }
};


  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">
          {id ? "Edit User" : "Add User"}
        </h2>
        <form onSubmit={submit} className="space-y-4">
          <input className="w-full border p-2 rounded" placeholder="Name"
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}/>
          <input className="w-full border p-2 rounded" placeholder="Email"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
          <input className="w-full border p-2 rounded" placeholder="Phone"
            value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}/>
          <button className="bg-blue-600 text-white w-full py-2 rounded">
            {id ? "Update User" : "Create User"}
          </button>
        </form>
      </div>
    </Layout>
  );
}
