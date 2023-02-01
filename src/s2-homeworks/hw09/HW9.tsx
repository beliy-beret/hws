import { Container, Divider } from '@mui/material'

import Clock from './Clock'
import React from 'react'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
* 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
* 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
* 4 - сделать стили в соответствии с дизайном
* */

const HW9 = () => {
    return (
        <div id={'hw9'}>
            <Container maxWidth={'xl'}>
                <div className={s2.hwTitle}>Homework #9</div>
            </Container>
            <Divider />
            <Container maxWidth={'xl'} sx={{ pb: '2rem' }}>
                <div className={s2.hw}>
                    <Clock />
                </div>
            </Container>
        </div>
    )
}

export default HW9
