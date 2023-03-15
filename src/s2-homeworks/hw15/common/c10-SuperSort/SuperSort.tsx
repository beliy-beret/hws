import { ArrowDropDown, ArrowDropUp, UnfoldMore } from '@mui/icons-material'

import { IconButton } from '@mui/material'
import React from 'react'

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return sort === down ? up : sort === up ? '' : down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? <ArrowDropDown />
        : sort === up
            ? <ArrowDropUp />
            : <UnfoldMore fontSize='small' />

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <IconButton>
                {icon}
            </IconButton>
        </span>
    )
}

export default SuperSort
