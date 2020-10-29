/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styles from '../styles/Theme.module.css'
import Image from 'next/image'

const Painting = ({ src, alt, title, width, height }: PaintingProps) => {
  return (
    <div css={paintingCss}>
      <Image src={src} alt={alt} width={width} height={height} />
      <h3 css={paintingTitleCss}>
        <cite className={styles.text_sm}>{title}</cite>
      </h3>
    </div>
  )
}

type PaintingProps = {
  src: string
  alt: string
  title: string
  width: number
  height: number
}

const paintingCss = css`
  margin: 5rem 0 0 0;
  width: 65vw;
  @media only screen and (max-width: 1200px) {
    width: 65vw;
  }
  @media only screen and (max-width: 768px) {
    width: 92vw;
  }
`

const paintingTitleCss = css`
  margin: 0 0;
  cite {
    font-style: italic;
  }
`

export default Painting
