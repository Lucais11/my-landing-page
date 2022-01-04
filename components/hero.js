/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

const columnStyles = {
  width: '50%',
  paddingLeft: '10px',
  paddingRight: '10px'
}

const Hero = ({image, title, body}) => {
  return (
    <div css={css({
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    })}>
      <div css={css(columnStyles)}>
        <figure>
          <img src={image} alt="" />
        </figure>
      </div>
      <div css={css(columnStyles)}>
        <h1 css={css({fontSize: '6em'})}>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default Hero