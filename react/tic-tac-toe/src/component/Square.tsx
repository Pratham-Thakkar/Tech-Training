interface IProp {
  value: string;
  onSquareClick: () => void;
}
export const Square: React.FC<IProp> = (props: IProp): JSX.Element => {
  return (
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
};
