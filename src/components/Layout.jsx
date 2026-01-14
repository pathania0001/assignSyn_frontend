import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">User Manager</h1>
        <Link to="/create" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add User
        </Link>
      </header>
      {children}
    </div>
  );
}
