import { Divider } from 'antd';
import './roomAdminTemplate.css'

const RoomAdminTemplate =({children})=>{
    return(
        <div className="roomAdminTemplate">
            <div className="app-title">특별실 추가/제거</div>
            <div>{children}</div>

        </div>
    )
};

export default RoomAdminTemplate;