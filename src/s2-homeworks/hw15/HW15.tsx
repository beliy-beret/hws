import { CircularProgress, Container, Divider } from '@mui/material'
import React, {useEffect, useState} from 'react'

import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import SuperSort from './common/c10-SuperSort/SuperSort'
import axios from 'axios'
import s from './HW15.module.css'
import s2 from '../../s1-main/App.module.css'
import {useSearchParams} from 'react-router-dom'

/*
* 1 - дописать SuperPagination
* 2 - дописать SuperSort
* 3 - проверить pureChange тестами
* 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW15 в HW5/pages/JuniorPlus
* */

type TechType = {
    id: number
    tech: string
    developer: string
}


const getTechs = (params: any) => {
    return axios
        .get<{ techs: TechType[], totalCount: number }>(
            'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test3',
            {params}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

const HW15 = () => {
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(4)
    const [idLoading, setLoading] = useState(false)
    const [totalCount, setTotalCount] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<TechType[]>([])

    const sendQuery = (params: any) => {
        setLoading(true)
        getTechs(params)
            .then((res) => {
                // делает студент
                setTechs(res?.data?.techs!)
                setTotalCount(res?.data?.totalCount!)
            }).finally(() => setLoading(false))
    }

    const onChangePagination = (newPage: number, newCount: number) => {
        // делает студент
        setPage(newPage)
        setCount(newCount)
        setSearchParams({page: String(newPage), count: String(newCount), sort})
        sendQuery({page: newPage, count: newCount, sort})        
    }

    const onChangeSort = (newSort: string) => {
        // делает студент
        setSort(newSort)
        setPage(1) // при сортировке сбрасывать на 1 страницу
        setSearchParams({count: String(count), page: String(page), sort: newSort})
        sendQuery({page, count, sort: newSort})        
    }

    useEffect(() => {        
        const params = Object.fromEntries(searchParams)
        setPage(+params.page || 1)
        setCount(+params.count || 4)
        sendQuery({ page, count })
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t.id} className={s.row}>
            <div id={'hw15-tech-' + t.id} className={s.tech}>
                {t.tech}
            </div>

            <div id={'hw15-developer-' + t.id} className={s.developer}>
                {t.developer}
            </div>
        </div>
    ))
        
    return (
        <div id={'hw15'}>
            <Container maxWidth={'xl'} sx={{mt: '2rem'}}>
                <div className={s2.hwTitle}>Homework #15</div>
            </Container>
            <Divider />

            <div className={s2.hw}>
                
                    {idLoading && 
                    (<div id={'hw15-loading'} className={s.loading}>
                        <CircularProgress color="secondary" />
                    </div>)
                    }
                    
                    <SuperPagination
                        page={page}
                        itemsCountForPage={count}
                        totalCount={totalCount}
                        onChange={onChangePagination}
                    />

                    <div className={s.rowHeader}>
                        <div className={s.techHeader}>
                            tech
                            <SuperSort sort={sort} value={'tech'} onChange={onChangeSort} />
                        </div>

                        <div className={s.developerHeader}>
                            developer
                            <SuperSort sort={sort} value={'developer'} onChange={onChangeSort} />
                        </div>
                    </div>

                    {mappedTechs}
                                                
            </div>
        </div>
    )
}

export default HW15
