import './pieChartBox.scss'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
const data = [
    { name: 'mobile', value: 400, color: '#0088fe' },
    { name: 'desktop', value: 300, color: '#00c49f' },
    { name: 'laptop', value: 100, color: '#ffbb28' },
    { name: 'tablet', value: 200, color: '#ff8042' },
]

const PieChartBox = () => {
    return (
        <div className='pieChartBox'>
            <h1>Leads by Source</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%" >
                    <PieChart >
                        <Tooltip
                            contentStyle={{ background: 'white', borderRadius: '5px' }}
                        />
                        <Pie
                            data={data}

                            innerRadius={'70%'}
                            outerRadius={'90%'}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>

                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="tag">
                {data.map((item,index)=>(
                <div className="item" key={index}>
                <div className="option">
                    <span className='circle' style={{backgroundColor:item.color}}></span>
                    <span>mobile</span>
                </div>
                <span>{item.value}</span>
            </div>
                ))}

               

            </div>
        </div>
    )
}

export default PieChartBox