import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className="md:!hidden">
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="!capitalize !text-white"
            >
                Menú
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className="menu"
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Inicio</MenuItem>
                <MenuItem onClick={handleClose}>Series TV</MenuItem>
                <MenuItem onClick={handleClose}>Películas</MenuItem>
                <MenuItem onClick={handleClose}>Novedades más vistas</MenuItem>
                <MenuItem onClick={handleClose}>Mi lista</MenuItem>
            </Menu>
        </div>
    )
}