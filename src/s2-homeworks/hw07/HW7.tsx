import { Container, Divider } from '@mui/material'
import React, { useState } from 'react'

import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import s from './HW7.module.css'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - в файле SuperSelect.tsx дописать логику функции onChangeCallback
* 2 - в файле SuperRadio.tsx дописать логику функции onChangeCallback
* 3 - в файле SuperRadio.tsx дописать name, checked, value (узнать для чего в радио name)
* 4 - сделать стили в соответствии с дизайном
* */

const arr = [
    { id: 1, value: 'x' },
    { id: 2, value: 'y' },
    { id: 3, value: 'z' },
] // value может быть изменено

const HW7 = () => {
    const [value, onChangeOption] = useState<number>(2) // селект и радио должны работать синхронно

    return (
        <div id={'hw7'}>
            <Container maxWidth={'lg'}>
                <div className={s2.hwTitle}>Homework #7</div>
            </Container>
            <Divider sx={{ borderWidth: '3px', m: '1rem 0' }} />
            {/*демонстрация возможностей компонент:*/}
            <div className={s2.hw}>
                <Container maxWidth={'lg'}>
                    <div className={s.container}>
                        <div>
                            <SuperSelect
                                id={'hw7-super-select'}
                                options={arr}
                                value={value}
                                onChangeOption={onChangeOption}
                            />
                        </div>
                        <div>
                            <SuperRadio
                                id={'hw7-super-radio'}
                                name={'hw7-radio'}
                                options={arr}
                                value={value}
                                onChangeOption={onChangeOption}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default HW7
