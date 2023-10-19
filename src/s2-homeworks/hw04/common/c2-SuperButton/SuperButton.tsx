import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {


    const finalClassNames = [s.button];

    if (disabled) {
        finalClassNames.push(s.disabled);
    } else {
        switch (xType) {
            case 'red':
                finalClassNames.push(s.red);
                break;
            case 'secondary':
                finalClassNames.push(s.secondary);
                break;
            default:
                finalClassNames.push(s.default);
                break;
        }
    }

    if (className) {
        finalClassNames.push(className);
    }

    const finalClassName = finalClassNames.join(' ');



    // задачка на смешивание классов
    console.log(finalClassName)
    return (

        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
