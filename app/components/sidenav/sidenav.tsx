import Link from "next/link";

const Sidenav = () => {
  return (
    <ul className="text-center min-w-16 w-1/12 bg-gray-500 text-white border-black">
      <li className="flex flex-col box-border border-black border">
        <Link className="p-5 hover:bg-gray-600" href="/dashboard">
          Home
        </Link>
        <Link className="p-5 hover:bg-gray-600" href="/dashboard/personnel">
          Personnel
        </Link>
      </li>
    </ul>
  );
};

export default Sidenav;
