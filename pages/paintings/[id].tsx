import { useRouter } from 'next/router'
import paintingsData from '../../paintings-data.json'
import Painting from '@components/Painting'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const PaintingPage = () => {
  const router = useRouter()
  const { id } = router.query
  const paintingObject = paintingsData.find((object) => object.id === id)
  return paintingObject ? (
    <div css={mainCss}>
      <Painting
        src={paintingObject.src}
        alt={paintingObject.alt}
        title={paintingObject.title}
        width={paintingObject.width}
        height={paintingObject.height}
        quality={paintingObject.quality}
        loading={'eager'}
        priority={false}
      />
    </div>
  ) : (
    <p>Painting missing</p>
  )
}

//Note: Paintings are set at 92vw so we take and split the remaining 8vw
const mainCss = css`
  padding: 2rem 4vw 5rem 4vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default PaintingPage
