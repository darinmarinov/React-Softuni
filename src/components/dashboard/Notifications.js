import React from 'react'
import moment from 'moment'
const Notifications = (props) => {
    const { notifications } = props;
    return (
        <div className="card green-blue darken-1">
            <div className="card-content grey lighten-4">
                <h2 className="card-title">Notifications</h2>
                <ul>
                    {notifications && notifications.map(item => {
                        return (
                            <li key={item.id}>
                                <span>{item.user}</span>
                                <span>{item.content}</span>
                                <span>{moment(item.time.toDate()).fromNow()}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Notifications