import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
    <nav className="flex justify-center items-center gap-5 sm:gap-15 py-3 font-medium">
      <Link
        to="/"
        className="px-2 py-1 hover:underline rounded h-8 leading-normal"
        activeProps={{ className: "bg-accent text-accent-foreground" }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>
      <Link
        to="/products"
        className="px-2 py-1 hover:underline rounded leading-normal"
        activeProps={{ className: "bg-accent text-accent-foreground" }}
      >
        Products
      </Link>
      <Link
        to="/chat"
        className="px-2 py-1 hover:underline rounded leading-normal"
        activeProps={{ className: "bg-accent text-accent-foreground" }}
      >
        Chat
      </Link>
      <Link
        to="/graphql"
        className="px-2 py-1 hover:underline rounded leading-normal"
        activeProps={{ className: "bg-accent text-accent-foreground" }}
      >
        GraphQL
      </Link>
    </nav>
  );
};
