import { memo, useState } from 'react'
import { Box } from 'theme-ui'
import { scaleOrdinal, scaleLog } from 'd3-scale'
import Chart from './chart'
import sx from '../styles'

const x1 = scaleLog().domain([10, 1000000]).range([1.5, 98.25]).clamp(true)

const x2 = scaleLog().domain([1, 1000]).range([1.5, 98.25]).clamp(true)

const y = scaleOrdinal()
  .domain(['forests', 'soil', 'biomass', 'ocean', 'mineralization', 'dac'])
  .range(
    Array(6)
      .fill(0)
      .map((_, i) => i * 14 + 10)
  )

const Charts = ({
  highlighted,
  filtered,
  data,
  bounds,
  setBounds,
  tooltips,
}) => {
  return (
    <Box sx={{ mt: [2, 2, 2, 3], pt: ['12px'] }}>
      <Box sx={{...sx.label, mb: [2]}}>Filter by metrics</Box>
      <Chart
        x={x1}
        y={y}
        highlighted={highlighted}
        filtered={filtered}
        data={data.volume}
        label='volume'
        tooltipLabel='volumeFilter'
        units='tCO₂'
        setBounds={setBounds}
        bounds={bounds.volume}
        ticks={[10, 100, 1000, 10000, 100000, 1000000]}
        tooltips={tooltips}
      />
      <Box sx={{ mt: [1, 1, 1, 2] }}>
        <Chart
          x={x2}
          y={y}
          highlighted={highlighted}
          filtered={filtered}
          data={data.permanence}
          label='permanence'
          tooltipLabel='permanenceFilter'
          units='years'
          setBounds={setBounds}
          bounds={bounds.permanence}
          ticks={[1, 10, 100, 1000]}
          tooltips={tooltips}
        />
      </Box>
    </Box>
  )
}

export default memo(Charts)
