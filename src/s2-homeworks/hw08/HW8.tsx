import { Box, Container } from '@mui/system'
import React, { useState } from 'react'

import { Divider } from '@mui/material'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import User from './User'
import { homeWorkReducer } from './bll/homeWorkReducer'
import s from './HW8.module.css'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - дописать типы и логику (сортировка по имени, фильтрация по совершеннолетию) homeWorkReducer, проверить тестом
* 2 - дописать компоненту User
* 3 - сделать стили в соответствии с дизайном
* */

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 5, name: 'Ирина', age: 55 },
]

const HW8 = () => {
    const [people, setPeople] = useState<UserType[]>(initialPeople)
    const [currentSort, setCurrentSort] = useState('')

    const finalPeople = people.map((u: UserType) => <User key={u._id} u={u} />)

    const sortUp = () => {
        setPeople(
            homeWorkReducer(initialPeople, { type: 'sort', payload: 'up' })
        ) // в алфавитном порядке a.name > b.name
        setCurrentSort('up')
    }

    const sortDown = () => {
        setPeople(
            homeWorkReducer(initialPeople, { type: 'sort', payload: 'down' })
        ) // в обратном порядке a.name < b.name}
        setCurrentSort('down')
    }
    const check18 = () => {
        setPeople(
            homeWorkReducer(initialPeople, { type: 'check', payload: 18 })
        ) // совершеннолетние
        setCurrentSort('18')
    }

    return (
        <div id={'hw3'}>
            <Container maxWidth={'xl'}>
                <div className={s2.hwTitle}>Homework #8</div>
            </Container>
            <Divider sx={{ borderWidth: '3px', m: '1rem 0' }} />
            <Container maxWidth={'xl'} sx={{ pb: '2rem' }}>
                <Box sx={{ pt: '2rem', maxWidth: '40%' }}>
                    <div className={s.buttonsContainer}>
                        <SuperButton
                            id={'hw8-button-up'}
                            onClick={sortUp}
                            xType={currentSort === 'up' ? '' : 'secondary'}
                        >
                            Sort up
                        </SuperButton>
                        <SuperButton
                            id={'hw8-button-down'}
                            onClick={sortDown}
                            xType={currentSort === 'down' ? '' : 'secondary'}
                        >
                            Sort down
                        </SuperButton>
                        <SuperButton
                            id={'hw8-button-18'}
                            onClick={check18}
                            xType={currentSort === '18' ? '' : 'secondary'}
                        >
                            Check 18+
                        </SuperButton>
                    </div>

                    <table id={'hw8-users'} className={s.users}>
                        <thead className={s.thead}>
                            <tr>
                                <td className={s.nameCol}>Name</td>
                                <td className={s.ageCol}>Age</td>
                            </tr>
                        </thead>

                        <tbody>{finalPeople}</tbody>
                    </table>
                </Box>
            </Container>
            <Divider sx={{ borderWidth: '3px', m: '1rem 0' }} />
        </div>
    )
}

export default HW8
