import { memo } from 'react'
import { Box, Text, Grid } from 'theme-ui'
import Report from './report'
import Count from './count'

const List = ({ filtered, data, setHighlighted }) => {
  return <Box>
    <Box sx={{
      position: 'sticky', 
      height: 'fit-content', 
      top: 55, 
      pb: [3], 
      backgroundColor: 'background',
      borderWidth: '0px',
      borderBottomWidth: '1px',
      borderColor: 'muted',
      borderStyle: 'solid',
      pt: '14px',
      mt: '-14px',
      mb: [2],
      pl: ['24px']
    }}>
      <Text sx={{display: 'inline-block', mr: [1], fontFamily: 'monospace', textTransform: 'uppercase', color: 'secondary', letterSpacing: 'wide'}}>Selected</Text>
      <Count value={String(filtered.count).padStart(3, '0')} />
      <Text sx={{display: 'inline-block', ml: [3], mr: [1], fontFamily: 'monospace', textTransform: 'uppercase', color: 'secondary', letterSpacing: 'wide'}}>Total</Text>
      <Count value={String(data.length).padStart(3, '0')} />
    </Box>
    <Grid columns={[1, 1, 2]} sx={{display: ['none', 'none', 'grid'], mt: [2], pl: [3]}} gap={['0px']}>
      <Box sx={{ml: [2]}}>
        {data.filter((d) => filtered[d.id]).filter((d,i) => i % 2 == 0)
          .map((d) => <Report setHighlighted={setHighlighted} key={d.id} id={d.id} name={d.name} description={d.description} tags={d.tags} metrics={d.metrics}/>)
        }
      </Box>
      <Box sx={{ml: [3]}}>
        {data.filter((d) => filtered[d.id]).filter((d,i) => i % 2 == 1)
          .map((d) => <Report setHighlighted={setHighlighted} key={d.id} id={d.id} name={d.name} description={d.description} tags={d.tags} metrics={d.metrics}/>)
        }
      </Box>
    </Grid>
  </Box>
}

export default memo(List)