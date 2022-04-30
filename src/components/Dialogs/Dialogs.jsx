import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.messages.map(m => <Messages message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;