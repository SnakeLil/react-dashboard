import './topbox.scss'
import { topDealsUsers } from '../../data.ts'
const Topbox = () => {
    return (
        <div className='topbox'>
            <h1>Top Deals</h1>
            <div className="list">

                {
                    topDealsUsers.map(item => (
                        <div className="item" key={item.id}>
                            <div className="user">
                                <img src={item.img} alt="" />
                                <div className="info">
                                    <span className='username'>{item.username}</span>
                                    <span className='email'>{item.email}</span>
                                </div>
                            </div>

                            <span className='amount'>$22.223</span>
                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default Topbox