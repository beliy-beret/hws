import { Container, Divider } from '@mui/material'
import React, {useState} from 'react'

import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'
import s from './HW13.module.css'
import s2 from '../../s1-main/App.module.css'
import success200 from './images/200.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')

        axios
            .post(url, {success: x})
            .then((res) => {
                setCode('Код 200!')
                setImage(success200)
                // дописать                
                setText('...всё ок) код 200 - обычно означает что скорее всего всё ок)')
                setInfo('')    
            })
            .catch((e) => {
                // дописать
                if(x === false) {
                    setCode('Ошибка 400!')
                    setImage(error400)
                    setText('Ты не отправил success в body вообще! ошибка 400 - обычно означает что скорее всего фронт отправил что - то не то на бэк!')
                    setInfo('')
                }
                if (x === undefined) {
                    setCode('Ошибка 500!')
                    setImage(error500)
                    setText('эмитация ошибки на сервере ошибка 500 - обычно означает что что - то сломалось на сервере, например база данных)')
                    setInfo('')
                }
                if (x === null) {
                    setCode('Error!')
                    setImage(errorUnknown)
                    setText('Network Error AxiosError')
                    setInfo('')
                }               
            })
    }

    return (
        <div id={'hw13'}>
            <Container maxWidth={'xl'}>
                <div className={s2.hwTitle}>Homework #13</div>
            </Container>
            <Divider />
            <div className={s2.hw}>
                <Container maxWidth={'xl'}>
                    <div className={s.buttonsContainer}>
                        <SuperButton
                            id={'hw13-send-true'}
                            onClick={send(true)}
                            xType={'secondary'}
                            // дописать
                            disabled={!!info}
                        >
                            Send true
                        </SuperButton>
                        <SuperButton
                            id={'hw13-send-false'}
                            onClick={send(false)}
                            xType={'secondary'}
                            // дописать
                            disabled={!!info}
                        >
                            Send false
                        </SuperButton>
                        <SuperButton
                            id={'hw13-send-undefined'}
                            onClick={send(undefined)}
                            xType={'secondary'}
                            // дописать
                            disabled={!!info}
                        >
                            Send undefined
                        </SuperButton>
                        <SuperButton
                            id={'hw13-send-null'}
                            onClick={send(null)} // имитация запроса на не корректный адрес
                            xType={'secondary'}
                            // дописать
                            disabled={!!info}
                        >
                            Send null
                        </SuperButton>
                    </div>

                    <div className={s.responseContainer}>
                        <div className={s.imageContainer}>
                            {image && <img src={image} className={s.image} alt="status" />}
                        </div>

                        <div className={s.textContainer}>
                            <div id={'hw13-code'} className={s.code}>
                                {code}
                            </div>
                            <div id={'hw13-text'} className={s.text}>
                                {text}
                            </div>
                            <div id={'hw13-info'} className={s.info}>
                                {info}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default HW13
