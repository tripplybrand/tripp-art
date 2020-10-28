/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styles from '../styles/Theme.module.css'

const Painting = ({ srcSet, sizes, src, alt, title }: PaintingProps) => {
  return (
    <div>
      <img
        srcSet={srcSet}
        sizes={sizes}
        src={src}
        alt={alt}
        css={paintingCss}
      />
      <h3 css={paintingTitleCss}>
        <cite className={styles.text_sm}>{title}</cite>
      </h3>
    </div>
  )
}

interface PaintingProps {
  srcSet: string
  sizes: string
  src: string
  alt: string
  title: string
}

const paintingCss = css`
  margin: 5rem 0 0 0;
`

const paintingTitleCss = css`
  margin: 0 0;
  cite {
    font-style: italic;
  }
`

export default Painting
