// type EventBasicProps = { format: "date" | "time" | "all" };
// const current = (dateTimeFormat: EventBasicProps["format"]) => {
//   const d = new Date();
//   switch (dateTimeFormat) {
//     case "date":
//       console.log(d.toLocaleDateString());
//       break;
//     case "time":
//       console.log(d.toLocaleTimeString());
//       break;
//     case "all":
//       console.log(d.toString());
//       break;
//     default:
//       console.log("날짜나 시간 형식이 잘못 지정되었습니다.");
//   }
// };

// function EventBasic({ format }: EventBasicProps) {
//   return (
//     <>
//       <button onClick={() => current(format)}>
//         현재 시각 가져오기({format})
//       </button>
//     </>
//   );
// }

// export default EventBasic;

type EventBasicProps = { format: "date" | "time" | "datetime" };

const current = (dateTimeFormat: EventBasicProps["format"]) => {
  const now = new Date();
  switch (dateTimeFormat) {
    case "date":
      console.log(now.toLocaleDateString());
      break;
    case "time":
      console.log(now.toLocaleTimeString());
      break;
    case "datetime":
      console.log(now.toString());
      break;
    default:
      console.log("시간과 날짜 형식이 잘못되어 있습니다.");
  }
};

function EventBasic({ format }: EventBasicProps) {
  return <button onClick={() => current(format)}>현재 시간 ({format})</button>;
}

export default EventBasic;
