export const PriceBenefits = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* benefits */}
      <div className="flex gap-3">
        <img src="/svg/markIcon.svg" alt="mark icon" />
        <p>Shared Desk</p>
      </div>
      <div className="flex gap-3">
        <img src="/svg/markIcon.svg" alt="mark icon" />
        <p>High Spedd WiFi</p>
      </div>
      <div className="flex gap-3">
        <img src="/svg/markIcon.svg" alt="mark icon" />
        <p>Uninterrupted Power Supply</p>
      </div>
      <div className="flex gap-3">
        <img src="/svg/markIcon.svg" alt="mark icon" />
        <p>No Commitments or Unnecessary Extras</p>
      </div>
    </div>
  );
};
