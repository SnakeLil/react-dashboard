import { Link } from 'react-router-dom'
import './chartBox.scss'
import { ResponsiveContainer,LineChart,Line,Tooltip } from 'recharts'

type Props ={
    color:string;
    icon:string;
    title:string;
    dataKey:string;
    number:number | string;
    perc:number;
    chartData:object[];

}
  
const ChartBox = (props:Props) => {
    return (
        <div className='chartBox'>
            <div className="boxInfo">
                <div className="title">
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <h1>{props.number}</h1>
                <Link to='/'>View all</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip contentStyle={{backgroundColor:'transparent',border:'none'}} 
                            labelStyle={{display:'none'}}
                            position={{x:30,y:40}}/>
                            <Line 
                            type="monotone" 
                            dataKey={props.dataKey} 
                            stroke={props.color} 
                            strokeWidth={2} 
                            dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className='perc' style={{color:props.perc>0 ? 'green' :'tomato'}}>{props.perc}%</span>
                    <span className='time'>one month ago</span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox