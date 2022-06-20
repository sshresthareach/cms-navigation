import React from 'react';
import Button from '@mui/material/Button';

export default function CommonButton({children, color, disabled, size, sx, variant}) {
    return (
        <Button
        color={color}
        disabled={disabled}
        size={size}
        variant={variant}
        sx={sx}>
            {children}
        </Button>
    )
}
