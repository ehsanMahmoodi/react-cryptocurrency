import { Box } from "@mui/material";
import { useStyle } from "./CoinChart.style";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { darkTheme } from "../../Theme";
import { chart_day } from "../../config/chart_day";
import { ChartPeriodBtn, Loading, NotFoundElement } from "../index";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const CoinChart = ({ days, setDays, currencyName }) => {
  // get css style
  const classes = useStyle();
  // get coin chart data
  const { coinChartDetail, status } = useSelector(
    (store) => store.single_coin_chart_slice
  );

  return (
    <Box className={classes.chart_cointainer}>
      {status === "success" ? (
        <>
          <Line
            options={{
              maintainAspectRatio: false,
              aspectRatio: 30,
              spanGaps: false,
              layout: {
                padding: 5,
              },
              elements: {
                point: { radius: 1 },
                hitRadius: 5000,
              },
              plugins: {
                tooltip: {
                  rtl: false,
                  textDirection: "rtl",
                  backgroundColor: [darkTheme.palette.primary.light],
                },
              },
            }}
            data={{
              labels: coinChartDetail.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 2}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: coinChartDetail.map((coin) => coin[1]),
                  label: `قیمت ${days} روز گذشته `,
                  borderColor: "#eebc1d",
                  fill: false,
                  tension: 1,
                  borderWidth: 1.5,
                },
              ],
            }}
          />
          <Box className={classes.chart_period_btn_wrraper}>
            {chart_day.map((item) => {
              return (
                <ChartPeriodBtn
                  children={item.lable}
                  key={item.value}
                  onClick={() => setDays(item.value)}
                  selected={days === item.value}
                />
              );
            })}
          </Box>
        </>
      ) : status === "pending" ? (
        <Loading />
      ) : (
        <NotFoundElement />
      )}
    </Box>
  );
};

export default CoinChart;
