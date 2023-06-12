import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { removeUser } from "../store";
import { useThunk } from "../hooks/useThunk";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user...</div>}
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}>123</ExpandablePanel>;
}
export default UsersListItem;
