import { Container, Divider } from '@mui/material'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { AppStoreType } from '../hw10/bll/store'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {changeThemeId} from './bll/themeReducer'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const themeId = useSelector<AppStoreType>((state) => state.theme.themeId)
    const dispatch = useDispatch();

    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(Number(id)))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <Container maxWidth={'xl'}>
                <div id={'hw12-text'} className={s2.hwTitle}>
                    Homework #12
                </div>
            </Container>
            <Divider />          

            <div className={s2.hw}>
                <Container maxWidth={'xl'} sx={{mt: '1rem'}}>
                    <p>Выберите тему</p>
                    <SuperSelect
                        id={'hw12-select-theme'}
                        className={s.select}
                        // сделать переключение тем
                        options={themes}
                        onChangeOption={change}
                    />
                </Container>                
            </div>
        </div>
    )
}

export default HW12
