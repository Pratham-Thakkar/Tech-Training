interface IRestart {
  onRestart: () => void;
}
export const Restart = (props: IRestart) => {
  return (
    <>
      <button className="restart-button" onClick={props.onRestart}>
        Restart
      </button>
    </>
  );
};
