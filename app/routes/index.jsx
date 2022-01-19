import HomePage from "~/Components/HomePage";
import WallPaper from "~/Components/WallPaper"

import WallPaperStyles from '~/styles/WallPaper.css'

export const meta = () => {
  return {
    title: "Taco-IT Develop. Consult. Manage",
    description:
      "Taco-IT is your one-stop shop for buisness IT. We offer consulting services, website design and maintenance, and managed IT services. Let's taco bout your IT needs today!"
  };
};

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: WallPaperStyles
        },
    ]
}

export default function Index() {
  return (
    <>
    <WallPaper />
    <HomePage />
    </>
  );
}
