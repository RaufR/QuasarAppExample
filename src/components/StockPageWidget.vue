<template>
  <div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/stocks-usa/market-movers-gainers/" rel="noopener" target="_blank"><span class="blue-text">Stock Market</span></a> by TradingView</div>
  </div>
</template>

<script type="text/javascript" async>
  export default {
    name: 'StockPageWidget',
    data () {
      return {
        "exchange": "US",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "width": "100%",
        "height": "500",
        "plotLineColorGrowing": "rgba(60, 188, 152, 1)",
        "plotLineColorFalling": "rgba(255, 74, 104, 1)",
        "gridLineColor": "rgba(242, 243, 245, 1)",
        "scaleFontColor": "rgba(214, 216, 224, 1)",
        "belowLineFillColorGrowing": "rgba(60, 188, 152, 0.05)",
        "belowLineFillColorFalling": "rgba(255, 74, 104, 0.05)",
        "symbolActiveColor": "rgba(242, 250, 254, 1)"
      }
    }
  }
</script>

<style>
</style>
