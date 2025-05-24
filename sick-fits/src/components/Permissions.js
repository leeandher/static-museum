import { useStore } from "@/backend/context";
import { PERMISSIONS } from "@/backend/data";

import ErrorMessage from "@/components/ErrorMessage";
import Table from "@/components/styles/Table";
import SickButton from "@/components/styles/SickButton";

export default function Permissions() {
  const allPermissions = PERMISSIONS;
  const { user: me } = state;
  return (
    <>
      <ErrorMessage error={error} />
      <div>
        <h2>Manage Permissions</h2>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              {PERMISSIONS.map((permission) => (
                <th key={permission}>{permission}</th>
              ))}
              <th>👇</th>
            </tr>
          </thead>
          <tbody>
            <UserPermissions
              user={me}
              allPermissions={allPermissions}
              key={me.id}
            />
          </tbody>
        </Table>
      </div>
    </>
  );
}

function UserPermissions({ user, allPermissions }) {
  const { state, dispatch } = useStore();
  const { loading, error, user } = state;
  const { name, email, permissions } = user;

  const handlePermissionChange = ({ target }) => {
    const { permissions } = user;
    const { value, checked } = target;
    // 1. Take a copy of the current permissions
    let updatedPermissions = [...permissions];
    // 2. Update the permission
    if (checked) {
      updatedPermissions.push(value);
    } else {
      updatedPermissions = updatedPermissions.filter(
        (permission) => permission !== value
      );
    }
    // 3. Update the state, run mutation as callback
    dispatch({
      type: "UPDATE_USER",
      user: { ...user, permissions: updatedPermissions },
    });
  };

  return (
    <>
      {error && (
        <tr>
          <td colspan="9">
            <ErrorMessage error={error} />
          </td>
        </tr>
      )}
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        {allPermissions.map((permission) => (
          <td key={permission}>
            <label htmlFor={`${user.id}-permission-${permission}`}>
              <input
                type="checkbox"
                id={`${user.id}-permission-${permission}`}
                checked={permissions.includes(permission)}
                value={permission}
                onChange={handlePermissionChange}
              />
            </label>
          </td>
        ))}
        <td>
          <SickButton
            type="button"
            disabled={loading}
            onClick={updatePermissions}
          >
            Updat{loading ? "ing" : "e"}
          </SickButton>
        </td>
      </tr>
    </>
  );
}
