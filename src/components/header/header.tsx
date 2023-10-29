import Button from "@/components/button/button";
import { Typography } from "@/components/typography";

export const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant={"h2"}>TEST MY IT</Typography>
      <Button variant={"secondary"}>Header</Button>
      <Button variant={"tertiary"}>Header</Button>
    </div>
  );
};

export default Header;
