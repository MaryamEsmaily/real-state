const getChartData = (data, pridectedData) => {
  const predictDate = pridectedData?.map((item) => {
    return {
      Price: item?.Forecast,
      date: item.date.split("T")?.[0],
    };
  });

  const chartData = [...data, ...predictDate];

  const sortedData = chartData.sort(function (a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return sortedData;
};

export default getChartData;
