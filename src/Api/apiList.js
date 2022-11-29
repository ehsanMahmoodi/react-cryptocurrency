export const base_url = "https://api.coingecko.com/api/v3/";
export const popular_coin_url = (currency) =>
  `${base_url}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
export const coin_list_url = (currency) =>
  `${base_url}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h`;
export const single_coin_detail_url = (coinId) =>
  `${base_url}coins/${coinId}?localization=false&tickers=false`;
export const coin_chart_detail_url = (coinID, currencyName, days = 365) =>
  `${base_url}coins/${coinID}/market_chart?vs_currency=${currencyName}&days=${days}`;
