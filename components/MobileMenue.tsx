interface MobileMenueProps {
  visible?: boolean;
}

const MobileMenue: React.FC<MobileMenueProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">Home</div>
        <div className="px-3 text-center text-white hover:underline">
          Series
        </div>
        <div className="px-3 text-center text-white hover:underline">Films</div>
        <div className="px-3 text-center text-white hover:underline">
          New & Popular
        </div>
        <div className="px-3 text-center text-white hover:underline">
          My list
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Browse by lenguages
        </div>
      </div>
    </div>
  );
};

export default MobileMenue;
