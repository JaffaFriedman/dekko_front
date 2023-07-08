import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import InboxIcon from '@mui/icons-material/Inbox'

export default function Prueba () {
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component='nav' aria-label='main mailbox folders'>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemText primary='Trash' />
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>
  )
}
