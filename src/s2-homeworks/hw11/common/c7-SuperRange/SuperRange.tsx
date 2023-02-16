import {Slider, SliderProps} from '@mui/material'

import React from 'react'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                maxWidth: '180px',                
                '& .MuiSlider-thumb': {
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #00CC22'
                },                
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B'
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22'
                } 
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
