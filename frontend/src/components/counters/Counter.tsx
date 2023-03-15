import Countdown from "react-countdown";

export default function Counter() {
  const iLeave = new Date('04/05/2023')
  iLeave.setHours(7)
  return (
    <>
    {/* <h1>Time left </h1> */}
    <h3 style={{position: "absolute", top: 0}}><Countdown date={iLeave} /></h3>
    </>
  );
}
