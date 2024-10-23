import Link from "next/link";

const Header = () => {
  return (
    <div className="p-10 flex items-center justify-evenly w-full bg-green-800 text-white border-black border-b-2">
      <div>
        <Link href="/dashboard">Logo</Link>
      </div>
      <div className="text-center">
        <h1>ACE Military</h1>
        <h2>Last name, First name</h2>
      </div>
      <div>
        <h1>Rank</h1>
      </div>
    </div>
  );
};

export default Header;
