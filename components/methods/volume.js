import { Text } from 'theme-ui'

const Volume = () => {
  return (
    <>
      <Text sx={{ mb: [3] }}>
        VOLUME is our best estimate of the current annual carbon removal and/or avoided emissions
        of the project. In all cases volume is based on a public project offering. 
        We are working on calibrating these estimates with 
        domain-specific data-driven models.
      </Text>
      <Text sx={{ mb: [3] }}>
        Note that a project with large VOLUME but low NEGATIVITY
        would not be an effective form of carbon removal
        due to the large emissions.
      </Text>
    </>
  )
}

export default Volume
