import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { useUsers } from "../hooks/useUsers";

const UsersTable = () => {
  const { users } = useUsers();

  const getRoleColor = (role) => {
    switch (role) {
      case "Admin":
        return "bg-destructive-muted text-destructive-foreground";
      case "Manager":
        return "bg-info-muted text-info-foreground";
      case "Staff":
        return "bg-success-muted text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-success-muted text-success-foreground"
      : "bg-destructive-muted text-destructive-foreground";
  };

  return (
    <div className="bg-card text-foreground rounded-lg shadow-sm border border-border">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          Users
        </h3>
        <button className="flex items-center px-4 py-2 bg-background hover:bg-primary-hover text-foreground rounded-lg transition-colors duration-200">
          <FiPlus className="mr-2" size={16} />
          Add User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              {["User", "Role", "Status", "Last Login", "Actions"].map(label =>
                <th
                  key={label}
                  className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  {label}
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {users.map(user =>
              <tr key={user.id} className="hover:bg-accent">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className=" bg-background w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <span className="text-foreground text-sm font-medium">
                        {user.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {user.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(
                      user.role
                    )}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                  {user.lastLogin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-info hover:text-info-hover">
                      <FiEdit size={16} />
                    </button>
                    <button className="text-destructive hover:text-destructive-hover">
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
