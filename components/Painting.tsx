/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styles from '../styles/Theme.module.css'
import Image from 'next/image'

const Painting = ({
  src,
  alt,
  title,
  width,
  height,
  quality,
  loading,
  priority,
}: PaintingProps) => {
  return (
    <div css={paintingCss}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        loading={loading}
        priority={priority}
      />
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
  width: string | number
  height: string | number
  quality: string | number
  loading?: 'lazy' | 'eager' | undefined
  priority?: boolean
}

const paintingCss = css`
  margin: 5rem 0 0 0;
  width: 65vw;
  @media only screen and (max-width: 1200px) {
    width: 65vw;
  }
  @media only screen and (max-width: 1024px) {
    width: 85vw;
  }
  @media only screen and (max-width: 768px) {
    width: 92vw;
  }
  @media only screen and (max-width: 420px) {
    width: 92vw;
  }
  @media only screen and (max-width: 320px) {
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
