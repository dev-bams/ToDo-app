function CurrentDate() {
  const options = { weekday: "long", month: "long", day: "numeric" };
  const currentDate = new Date().toLocaleDateString(undefined, options);
  return (
    <div className=" mb-5">
      <h5>{currentDate.toString()}</h5>
    </div>
  );
}

export default CurrentDate;
