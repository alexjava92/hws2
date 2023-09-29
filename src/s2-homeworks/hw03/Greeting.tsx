import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {Button, TextField} from "@mui/material";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback:  (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser:  () => void // need to fix any
    onBlur: () => void // need to fix any
    onEnter: (e: KeyboardEvent) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUserName?: string // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    const inputClass = `${s.input} ${error ? s.errorInput : ''}`; // need to fix with (?:)
    const isError =Boolean(error)
    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <TextField

                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                        variant="outlined"
                        error={isError}
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </div>

                <Button
                    id={'hw3-button'}
                    onClick={addUser}
                    variant="contained"
                    className={s.button}
                    disabled={!name.trim()}
                >
                    add
                </Button >
            </div>

            {lastUserName && (
                <div className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting
