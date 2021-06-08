import { NavLink } from 'react-router-dom';
import classes from './DialogsInfo.module.css';

const DialogsInfo = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img src={props.avatar} />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogsInfo;