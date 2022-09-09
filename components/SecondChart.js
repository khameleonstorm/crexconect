import { useEffect, useRef } from 'react'
import { chartData, volumes } from "../utils/text"
import dynamic from 'next/dynamic'



const createChart = dynamic(() => { return import('lightweight-charts')}, {
  ssr: false,
})

export default function SecondChart() {
  const container = useRef()

  const renderChart = () => {
    console.log("working")
    var chart = createChart(container, {
      "width": "100%",
      "height": "100%",
      rightPriceScale: {
        scaleMargins: {
          top: 0.3,
          bottom: 0.25,
        },
        borderVisible: false,
      },
      layout: {
        backgroundColor: '#131722',
        textColor: '#d1d4dc',
      },
      grid: {
        vertLines: {
          color: 'rgba(42, 46, 57, 0)',
        },
        horzLines: {
          color: 'rgba(42, 46, 57, 0.6)',
        },
      },
    });
    
    var areaSeries = chart.addAreaSeries({
      topColor: 'rgba(38,198,218, 0.56)',
      bottomColor: 'rgba(38,198,218, 0.04)',
      lineColor: 'rgba(38,198,218, 1)',
      lineWidth: 2,
    });
    
    var volumeSeries = chart.addHistogramSeries({
      color: '#26a69a',
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });
    
    areaSeries.setData(chartData);
    
    volumeSeries.setData(volumes);
  }

  useEffect(() => {
    renderChart()
  }, [])


  return (
      <div id='tv' ref={container} style={{width: "100%", height: "100%"}} >
      </div>
  )
}
