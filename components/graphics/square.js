/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import * as d3 from 'd3-scale'
import { useThemeUI } from 'theme-ui'

const Square = ({ tag, data }) => {

  const context = useThemeUI()
  const theme = context.theme

  // const x = (scale.type == 'log') ? d3.scaleLog() : d3.scaleLinear()
  // const width = x.domain([scale.min, scale.max]).range([0, 90])(data)

  return <Box sx={{ 
      mt: ['12px'], 
    }}>
    <svg 
      height='20px' 
      width='90px'
      stroke='none'
      fill='none'
    >
      <rect sx={{ fill: theme.tags[tag], opacity: (data >= 0) ? 1 : 0.2 }} x="0" y="0" width="16" height="12"/>
      <rect sx={{ fill: theme.tags[tag], opacity: (data >= 1) ? 1 : 0.2 }} x="24.66" y="0" width="16" height="12"/>
      <rect sx={{ fill: theme.tags[tag], opacity: (data >= 2) ? 1 : 0.2 }} x="49.32" y="0" width="16" height="12"/>
      <rect sx={{ fill: theme.tags[tag], opacity: (data >= 3) ? 1 : 0.2 }} x="74" y="0" width="16" height="12"/>
    </svg>
  </Box>
}

export default Square