const getCurrentDate = () => {
  return new Date().getFullYear();
};

const Header = () => {
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
};

export default Header;
