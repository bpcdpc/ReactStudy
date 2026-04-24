interface Child2Props {
  value: string;
}

function Child2({ value }: Child2Props) {
  return <p>입력값: {value}</p>;
}

export default Child2;
