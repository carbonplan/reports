import Metric from './metric'
import Expander from './expander'
import Cycle from './graphics/cycle'
import { Badge, Link, Grid, Box, Divider, Heading, Text, IconButton } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useThemeUI } from 'theme-ui'

const Report = ({ project }) => {
  const id = project.id

  const dispatch = useDispatch()

  const visibility = useSelector(state => state.visibility[id])
  const showOne = useSelector(state => state.showOne)

  const [expanded, setExpanded] = useState(false)

  const context = useThemeUI()
  const theme = context.theme

  const toggle = (e) => {
    if (showOne) {
      dispatch({ type: 'SHOW_ONE', value: false })
      setExpanded(false)
    } else {
      setExpanded(!expanded)
    }
  }

  const showMetrics = [
    'mechanism',
    'volume',
    'negativity',
    'permanence',
    'cost',
    'additionality',
    'transparency'
  ]

  const metrics = showMetrics.map((metric) => {
    return project.metrics.filter((m) => m.name == metric)[0]
  })

  const cycle = project.metrics.filter((m) => m.name == 'volume')[0]['cycle']

  if (visibility) {
    return <Box sx={{ 
      borderStyle: 'solid',
      borderColor: 'muted',
      borderWidth: '0px', 
      borderBottomWidth: '1px',
      pr: [0, 0, 4],
      pt: [3, 3, 3],
      pb: [2, 2, 3]
    }}>
      <Grid gap={['8px', '8px', '16px']} columns={[1, null, '1fr 300px']}>
        <Heading sx={{ mb: [1, 1, 2], fontSize: [4] }}>{project.name}
          <Text sx={{ fontFamily: 'monospace', ml: [2], fontSize: [2], display: 'inline-block' }}>
          </Text>
        </Heading>
        <Box sx={{ textAlign: ['left', null, 'right'] }}>
          {project.tags.map((tag) =>
            <Badge key={tag} variant='primary' sx={{ 
              borderColor: theme.tags[tag],
              color: theme.tags[tag],
              cursor: 'default',
              mr: [2],
              ml: [0, 0, 2]
            }}>
              {tag}
            </Badge>
          )}
        </Box>
      </Grid>
      <Grid gap={['8px', '8px', '16px']} columns={[1, 1, '1fr 32px']}>
      <Text variant='description' sx={{ mb: [0, 0, 2] }}> 
        { project.description }
      </Text>
      <Box sx={{ ml: ['-5px', '-5px', '2px'] }}>
        <Expander toggle={toggle} expanded={(expanded || showOne)}></Expander>
      </Box>
      </Grid>
      <Box>
        {(expanded || showOne) && 
          <Box sx={{ pb: [1] }}>
          <Divider sx={{ mr: [0, 0, 2] }}/>
          {metrics.map((metric) => 
            <Metric 
              key={metric.name} 
              tag={project.tags[0]}
              metric={metric}
            ></Metric>) }
          <Grid columns={[1, 1, '300px 1fr']}>
            <Box sx={{ fontSize: [1], mt: ['12px', '12px', 2] }}>
              <Text sx={{ color: 'secondary' }}>Source</Text>
              <Text>
                <Link sx={{ 
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'text'
                  },
                  '&:hover > #arrow': {
                    color: 'secondary'
                  }
                }} href={ project.program.url }>
                  { project.program.name }
                  <Text id='arrow' variant='arrow'>↗</Text>
                </Link>
              </Text>
            </Box>
            <Box sx={{ fontSize: [1], pr: [2], mt: [0, 0, 2], mb: [2, 2, 0], textAlign: ['left', 'left', 'right'] }}>
              <Text sx={{ color: 'secondary' }}>Location</Text>
              <Text>
                { project.location.name }
              </Text>
            </Box>
          </Grid>
          </Box>
        }
      </Box>
    </Box>
  } else {
    return null
  }
}

export default Report
