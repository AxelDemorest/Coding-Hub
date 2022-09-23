import styled from 'styled-components'
import TextField from '@mui/material/TextField';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className="logo">Coding Hub</div>
            <div className="navbar">
                <ul>
                    <li className="navlink">Accueil</li>
                    <li className="navlink">Tags</li>
                    <li className="navlink">ddddd</li>
                </ul>
                <TextField
                id="standard-search"
                label="Recherche"
                type="search"
                variant="standard"
                />
            </div>
        </div>
    )
}

export default Navigation