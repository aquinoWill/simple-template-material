import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import palettes from 'themes/palettes'
import overrides from 'themes/overrides'

const theme = createMuiTheme({
  palette: palettes,
  ...overrides
})

export default responsiveFontSizes(theme)
