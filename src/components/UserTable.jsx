import { Link } from "react-router-dom";

export default function UserTable({ users, onDelete }) {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t hover:bg-slate-50">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.phone}</td>
              <td className="p-3 space-x-3">
                <Link to={`/user/${u.id}`} className="text-blue-600">View</Link>
                <Link to={`/edit/${u.id}`} className="text-green-600">Edit</Link>
                <button onClick={() => onDelete(u.id)} className="text-red-500">
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
