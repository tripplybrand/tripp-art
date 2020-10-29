import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import styles from '../styles/Theme.module.css'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Painting from '@components/Painting'

const title: string = 'Into My Own'

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div css={containerCss}>
      <Head>
        <title>Into My Own</title>
      </Head>
      <main css={mainCss}>
        <h1 css={titleCss} className={styles.text_6xl}>
          {title}
        </h1>
        <h2 css={subtitleCss} className={styles.text_2xl}>
          A series of paintings based on the artist's personal photographs taken
          in adolescence at the turn of the 21st century.
        </h2>
        <blockquote
          cite='https://bookshop.org/books/swann-s-way-e8bb3127-cd5c-4c15-a4e9-bc94b8f16e6e/9780142437964'
          css={blockquoteCss}
          className={styles.text_sm}
        >
          <p css={blockquoteContentCss}>
            The places we have known do not belong solely to the world of space
            in which we situate them for our greater convenience. They were only
            a thin slice among contiguous impressions which formed our life at
            that time; the memory of a certain image is but regret for a certain
            moment; and houses, roads, avenues are as fleeting, alas, as the
            years.
          </p>
          <footer css={blockquoteFooterCss}>
            —Marcel Proust, <cite>Swann's Way</cite>
          </footer>
        </blockquote>
        <div>
          <Painting
            srcSet={
              'Mountain_Lake_Fisherman_4790.jpg 4790w, Mountain_Lake_Fisherman_1200.jpg 1200w, Mountain_Lake_Fisherman_768.jpg 768w,'
            }
            sizes={'(max-width: 768px) 92vw, (max-width: 1200px) 92vw, 92vw'}
            src={'/Mountain_Lake_Fisherman_4790.jpg'}
            alt={'Watercolor of boy fishing in Colorado'}
            title={'Elk Creek, Colorado. Backpacking.'}
          />
        </div>
        <div>
          <Painting
            srcSet={
              'Uganda_Papyrus_Swamp_4648.jpg 4648w, Uganda_Papyrus_Swamp_1200.jpg 1200w, Uganda_Papyrus_Swamp_768.jpg 768w,'
            }
            sizes={'(max-width: 768px) 92vw, (max-width: 1200px) 92vw, 92vw'}
            src={'/Uganda_Papyrus_Swamp_4648.jpg'}
            alt={'Watercolor of papyrus swamp in Uganda'}
            title={'Papyrus swamp in Uganda. Mission trip.'}
          />
        </div>
        {/*
        <List>
          {posts.map((post) => (
            <Link href='/posts/[id]' as={`/posts/${post.id}`}>
              <ListItem key={post.id}>
                <PostTitle>{post.title}</PostTitle>
              </ListItem>
            </Link>
          ))}
        </List>
          */}
      </main>
    </div>
  )
}

const containerCss = css`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
//Note: Paintings are set at 92vw so we take and split the remaining 8vw
const mainCss = css`
  padding: 5rem 4vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const titleCss = css`
  margin: 0;
  text-transform: uppercase;
  color: #302928;
`
//#FF6356
//#eac3c2
//#302928
//#998381

const subtitleCss = css`
  max-width: 50rem;
  margin: 1rem 0;
  text-align: center;
  color: #302928;
`

const blockquoteCss = css`
  max-width: 50rem;
  p::before {
    content: '\\201C';
  }
  p::after {
    content: '\\201D';
  }
  color: #302928;
  margin: 2rem 0;
`

const blockquoteContentCss = css`
  margin: 0;
  text-align: left;
`

const blockquoteFooterCss = css`
  margin: 0;
  text-align: right;
`

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  const posts: Post[] = await res.json()

  return {
    props: {
      posts,
    },
  }
}
