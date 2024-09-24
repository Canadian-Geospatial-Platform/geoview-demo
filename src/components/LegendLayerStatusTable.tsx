import { useContext } from 'react';
import { CGPVContext } from '../providers/cgpvContextProvider/CGPVContextProvider';
import { Box, Divider, List, ListItem, ListItemText } from '@mui/material';


export function LegendLayerStatusTable() {
  const cgpvContext = useContext(CGPVContext);

  if (!cgpvContext) {
    throw new Error('CGPVContent must be used within a CGPVProvider');
  }

  const { legendLayerStatusList } = cgpvContext;


  return (
    <Box sx={{ p: 2 }}>
      <h2>Legend Layer Status</h2>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {legendLayerStatusList.map((row, index) => (
          <>
            <ListItem key={`$legend_layer_status_index_${index}`}>
              <ListItemText primary={row.layerName} secondary={row?.status} />
            </ListItem>
            <Divider component="li" />
          </>
        ))}
      </List>
    </Box>
  );


};