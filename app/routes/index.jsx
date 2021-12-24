import HomePage from "~/Components/HomePage";
import WallPaper from "~/Components/WallPaper"

import WallPaperStyles from '~/styles/WallPaper.css'

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
