import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div >
            <img alt='test' width='100%'
                 src='https://cdn0.scrvt.com/954371187f9758716188a4deb091ab66/605176d778f8c000/7ec1046eddb5/Dresden_tichr.jpg'/>

            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}

export default ProfileInfo;