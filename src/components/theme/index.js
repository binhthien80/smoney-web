export default {
  color: {
    primary: '#161d33',
    secondary: '#192039',
    text: '#ffffff',
    textSubTitle: '#838aa0',
    subText: '#5e676f',
    green: '#0acf97',
    red: '#f2125e',
    blue: '#448bff',
    orange: '#ff8300',
    gray: '#535c78',
    blur: {
      green: 'rgba(10, 207, 151, 0.2)',
      red: 'rgba(242, 18, 94, 0.2)',
      blue: 'rgba(68, 139, 255, 0.2)',
      orange: 'rgba(255, 131, 0, 0.2)',
      gray: 'rgba(83, 92, 120, 0.2)'
    }
  },
  fontSize: {
      large: '1.325rem',
      medium: '1rem',
      small: '.825rem',
      tiny: '.75rem',
  },
  button: {
    borderSearch: '#5e676f'
  },
  flex: (direction, jContent, aItems) => {
    return `
      display: flex;
      flex-direction: ${direction};
      justify-content: ${jContent};
      align-items: ${aItems};
    `
  }
}
