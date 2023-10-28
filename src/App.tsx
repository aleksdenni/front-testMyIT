import { useForm } from "react-hook-form";

import Button from "@/components/button/button";
import { TextField } from "@/components/text-field";
import { Typography } from "@/components/typography";

function App() {
  const { control } = useForm<any>({});

  return (
    <>
      <span>Hi</span>
      <div>
        <Button variant={"primary"}>Button</Button>
        <Typography variant={"h1"}>Typography</Typography>
        <Typography variant={"body1"}>Typography</Typography>
        <TextField control={control} name={"login"}></TextField>
      </div>
    </>
  );
}

export default App;
