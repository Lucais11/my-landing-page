/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

const Nav = () => {
  return (
    <div css={css({
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '60px'
    })}>
      <div css={css({width: '66%'})}>
        logo here
      </div>
      <div css={css({
        display: 'flex'
      })}>
        <div>LinkedIn</div>
        <div>About</div>
      </div>
    </div>
  )
}

export default Nav