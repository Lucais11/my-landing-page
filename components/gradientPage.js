/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

const GradientPage = ({children}) => {
  return (
    <div css={css({
      background: 'rgb(238,174,202)',
      background: 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      padding: '80px',
      minHeight: '100vh'
    })}>
      <div>
        {children}
      </div>
    </div>
  )
}

export default GradientPage