import grafImg from "../../assets/graf.png";

export function TradingChartGraphic() {
  return (
    <div className="chart-graphic" aria-hidden="true">
      <img className="chart-graphic-img" src={grafImg} alt="" />
    </div>
  );
}
