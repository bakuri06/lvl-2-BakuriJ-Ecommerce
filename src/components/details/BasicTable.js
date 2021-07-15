import { Box } from '@material-ui/core';

export function BasicTable({ data: { title } }) {

  return (
    <div>
    <Box style={{maxWidth:'300px'}}>
      <Box marginTop='30px' fontSize='15px' color='#4F4F4F' display='flex' justifyContent='space-between'>
        <Box fontWeight='bold'> Model </Box>
        <Box style={{width:'50px'}}></Box>
        <Box style={{textAlign:'end'}}color='#7D5755' >{title}</Box>
      </Box>
      <Box marginTop='30px' fontSize='15px' color='#4F4F4F' display='flex' justifyContent='space-between'>
        <Box fontWeight='bold'>Color </Box>
        <Box color='#7D5755'>Blue</Box>
      </Box>
      <Box marginTop='30px' fontSize='15px' color='#4F4F4F' display='flex' justifyContent='space-between'>
        <Box fontWeight='bold'>Delivery </Box>
        <Box color='#7D5755'>	USA, Europe</Box>
      </Box>
    </Box>
    <Box borderBottom='1px solid #E5E5E5' marginTop='30px'></Box>
    </div>
  );
}

