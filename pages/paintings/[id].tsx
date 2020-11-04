import Link from 'next/link'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import paintingsData from '../../paintings-data.json'
import Painting from '@components/Painting'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PaintingType from '../../types/painting'
import styles from '../../styles/Theme.module.css'

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
      <Link href='/' passHref as={`/`}>
        <a className={styles.text_xs} css={homeLinkCss}>
          Into My Own
        </a>
      </Link>
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

const homeLinkCss = css`
  text-transform: uppercase;
  text-decoration: underline;
  margin: 0 0 1rem 0;
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

export default PaintingPage
