import { useStyle } from "./ChartPeriodBtn.style";

const ChartPeriodBtn = ({ children, onClick, selected }) => {
  // get css style
  const classes = useStyle({ selected });
  return (
    <button
      className={classes.chart_period_btn}
      onClick={onClick}
      selected={selected}
    >
      {children}
    </button>
  );
};

export default ChartPeriodBtn;
