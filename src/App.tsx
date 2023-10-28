import Button from "@/components/button/button";
import { Typography } from "@/components/typography";

function App() {
  return (
    <>
      <span>Hi</span>
      <div>
        <Button variant={"primary"}>Button</Button>
        <Typography variant={"h1"}>Typography</Typography>
        <Typography variant={"body1"}>Typography</Typography>
      </div>
    </>
  );
}

export default App;
