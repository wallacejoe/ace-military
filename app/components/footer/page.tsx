const getCurrentDate = () => {
  // Implement logic to get the current date
  return new Date().getFullYear();
};

export default function Header() {
  return (
    <div className="p-10 flex items-center justify-evenly w-full bg-green-800 text-white border-black border-t-2">
      <div className="text-center">
        <p>
          &copy; {getCurrentDate()}
          <span></span> | Joseph Wallace | Arizona
        </p>
      </div>
    </div>
  );
}
