import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import paintingsData from '../../paintings-data.json'
import Painting from '@components/Painting'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PaintingType from '../../types/painting'

type Props = {
  paintingData: PaintingType
}

const PaintingPage = ({ paintingData }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !paintingData?.id) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div css={mainCss}>
      <Painting
        src={paintingData.src}
        alt={paintingData.alt}
        title={paintingData.title}
        width={paintingData.width}
        height={paintingData.height}
        quality={paintingData.quality}
        loading={'eager'}
        priority={false}
      />
    </div>
  )
}

type Params = {
  params: {
    id: string
  }
}

export async function getStaticProps({ params }: Params) {
  const paintingObject = paintingsData.find(
    (paintingObject) => paintingObject.id === params.id
  )

  return {
    props: {
      paintingData: paintingObject,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: paintingsData.map((paintingObject) => {
      return {
        params: {
          id: paintingObject.id,
        },
      }
    }),
    fallback: false,
  }
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
