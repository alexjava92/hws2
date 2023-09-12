import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type UserProps = {
    avatar: string;
    name: string;
}

export type MessageDataProps = {
    id: number;
    user: UserProps;
    message: {
        text: string;
        time: string;
    };
}

export type MessagePropsType = {
    message: MessageDataProps;
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    alt={props.message.user.name}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name}

                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {props.message.message.text}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {props.message.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default Message
