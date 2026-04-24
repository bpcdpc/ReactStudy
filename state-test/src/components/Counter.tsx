import { useState } from "react";

interface CounterProps {
  init: number;
}

function Counter({ init }: CounterProps) {
  const [count, setCount] = useState<number>(init);
  const handleClick = (): void => {
    setCount((p) => p + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>현재 클릭 수 : {count}</p>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default Counter;

// 클래스형 컴포넌트
// import { Component } from "react";

// type Props = {
//   init: number;
// };

// type State = {
//   count: number;
// };

// class CounterClass extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       count: props.init,
//     };
//   }

//   handleClick = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   render() {
//     return (
//       <>
//         <h1>Counter</h1>
//         <p>현재 카운트 : {this.state.count}</p>
//         <button onClick={this.handleClick}>클릭</button>
//       </>
//     );
//   }
// }

// export default CounterClass;
