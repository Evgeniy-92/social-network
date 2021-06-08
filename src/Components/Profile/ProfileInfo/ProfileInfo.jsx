import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.mainBG}>
                <img src='https://s.zagranitsa.com/images/articles/6729/870x486/53d189dfcd54fa9ecae756ddf5a7c2ee.jpg?1530714543'></img>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
			</div>
        </div>
    )
}

export default ProfileInfo;