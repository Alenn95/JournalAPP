import { Grid, ListItem, ListItemButton, ListItemText,ListItemIcon } from '@mui/material'
import {TurnedInNot} from '@mui/icons-material'
import { useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'
import { useDispatch } from 'react-redux'




export const SideBarItem = ({title= '', body,date, id,imageUrls= []}) => {
  


    const newTitle = useMemo( () => {
        return title.length > 17 ? title.substring(0.17) + '...' : title
    },[title])
  
    const dispatch = useDispatch()

    const onClickActiveNote = () => {
        dispatch(setActiveNote({title,body,id,date,imageUrls}))
    }

    return (
        <ListItem disablePadding>
            <ListItemButton
            onClick={onClickActiveNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>


                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
  )
}
