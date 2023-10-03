import BarChartBox from '../../components/barChartBox/BarChartBox.tsx'
import BigChartBox from '../../components/bigChartBox/BigChartBox.tsx'
import ChartBox from '../../components/chartBox/ChartBox'
import PieChartBox from '../../components/pieChartBox/PieChartBox.tsx'
import Topbox from '../../components/topbox/Topbox'
import {chartBoxUser,chartBoxProduct,chartBoxRevenue,chartBoxConversion,barChartBoxVisit,barChartBoxAvenu} from '../../data.ts'

import './home.scss'
// import { Outlet} from "react-router-dom"
const Home = () => {
  return (
    <div className="home">
        <div className="box box1">
          <Topbox/>
        </div>
        <div className="box box2"><ChartBox {...chartBoxUser}/></div>
        <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
        <div className="box box4"><PieChartBox/></div>
        <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
        <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
        <div className="box box7"><BigChartBox/></div>
        <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
        <div className="box box9"><BarChartBox {...barChartBoxAvenu}/></div>

    </div>
  )
}

export default Home