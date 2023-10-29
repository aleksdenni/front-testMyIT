import Button from "@/components/button/button";

export const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Button variant={"primary"}>Header</Button>
      <Button variant={"secondary"}>Header</Button>
      <Button variant={"tertiary"}>Header</Button>
    </div>
  );
};

export default Header;
