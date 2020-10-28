/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Painting = ({ srcSet, sizes, src, alt }: PaintingProps) => {
  return (
    <img srcSet={srcSet} sizes={sizes} src={src} alt={alt} css={paintingCss} />
  )
}

interface PaintingProps {
  srcSet: string
  sizes: string
  src: string
  alt: string
}

const paintingCss = css`
  margin: 5rem 0 0 0;
`

export default Painting
