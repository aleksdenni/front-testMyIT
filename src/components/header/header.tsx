import Button from "@/components/button/button";
import { Typography } from "@/components/typography";
import { useLogoutMutation, useMeQuery } from "@/services/auth/auth.api";

export const Header = () => {
  const { data: user } = useMeQuery();
  const [logout] = useLogoutMutation();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant={"h2"}>TEST MY IT</Typography>
      <Button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
      <Typography>{user ? user.email : "Hello"}</Typography>
      <Button variant={"tertiary"}>Header</Button>
    </div>
  );
};

export default Header;
