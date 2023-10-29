import Button from "@/components/button/button";
import { Card } from "@/components/card";
import { Typography } from "@/components/typography";

import s from "./main-page.module.scss";

export const MainPage = () => {
  return (
    <div className={s.container}>
      <Card className={s.card} title={"JAVA"}>
        <section className={s.buttons}>
          <Button>JAVA</Button>
          <Button>JAVA</Button>
          <Button>JAVA</Button>
        </section>
        <section className={s.section}>
          <Typography className={s.text} variant={"h2"}>
            Test your knowledge
          </Typography>
          <Typography className={s.text} variant={"body1"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            doloremque harum quidem sint ullam. Error iure labore nulla
            pariatur, provident sapiente totam! Ad aspernatur cum maiores
            molestiae, quibusdam suscipit voluptatem.{" "}
          </Typography>
        </section>
      </Card>
      <div className={s.bottom}>
        <div className={s.buttonGroup}>
          <Button variant={"primary"}>JAVA</Button>
          <Button variant={"secondary"}>PYTON</Button>
          <Button variant={"tertiary"}>C++</Button>
        </div>
        <div>
          <Card className={s.buttonGroup}>
            <Typography className={s.text} variant={"body2"}>
              <Button variant={"primary"}>JAVA description</Button> Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Dolor
            </Typography>

            <Typography className={s.text} variant={"body2"}>
              {" "}
              <Button variant={"secondary"}>PYTON description</Button>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor{" "}
            </Typography>

            <Typography className={s.text} variant={"body2"}>
              {" "}
              <Button variant={"tertiary"}>C++ description</Button>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor{" "}
            </Typography>
          </Card>
        </div>
      </div>
    </div>
  );
};
