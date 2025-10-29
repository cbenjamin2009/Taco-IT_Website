import HomePage from "~/Components/HomePage";

export const meta = () => {
  const description =
    "Taco-IT is your one-stop shop for buisness IT. We offer consulting services, website design and maintenance, and managed IT services. Let's taco bout your IT needs today!";

  return [
    { title: "Taco-IT Develop. Consult. Manage" },
    { name: "description", content: description }
  ];
};

export default function Index() {
  return <HomePage />;
}
