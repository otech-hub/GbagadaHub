export const PriceBenefits = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* benefits */}
      <div className="flex gap-3 items-center">
        <img className="w-6 h-3" src="/svg/markIcon.svg" alt="mark icon" />
        <p className="">Shared Desk</p>
      </div>
      <div className="flex gap-3 items-center">
        <img className="w-6 h-3" src="/svg/markIcon.svg" alt="mark icon" />
        <p>High Speed WiFi</p>
      </div>
      <div className="flex gap-3 items-center">
        <img className="w-6 h-3" src="/svg/markIcon.svg" alt="mark icon" />
        <p>Uninterrupted Power Supply</p>
      </div>
      <div className="flex gap-3 items-center">
        <img className="w-6 h-3" src="/svg/markIcon.svg" alt="mark icon" />
        <p>No Commitments or Unnecessary Extras</p>
      </div>
    </div>
  );
};
