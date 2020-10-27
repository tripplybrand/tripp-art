import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import styled from '@emotion/styled'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

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
        <h1
          css={css`
            ${titleCss};
            ${text6xlCss};
          `}
        >
          {title}
        </h1>
        <h2
          css={css`
            ${subtitleCss};
            ${text2xlCss};
          `}
        >
          A series of paintings based on the artist's personal photographs taken
          in adolescence at the turn of the 21st century.
        </h2>
        <blockquote
          cite='https://bookshop.org/books/swann-s-way-e8bb3127-cd5c-4c15-a4e9-bc94b8f16e6e/9780142437964'
          css={css`
            ${blockquoteCss};
            ${textSmCss};
          `}
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

const mainCss = css`
  padding: 5rem 5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const titleCss = css`
  margin: 0;
  text-transform: uppercase;
  color: #ff6356;
`

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

const text6xlCss = css`
  font-family: Poppins;
  font-size: 4rem;
  line-height: 110%;
  letter-spacing: -0.02em;
  font-weight: 700;
`

const text3xlCss = css`
  font-family: Poppins;
  font-size: 1.875rem;
  line-height: 150%;
  letter-spacing: 0em;
  font-weight: 400;
`

const text2xlCss = css`
  font-family: Poppins;
  font-size: 1.5rem;
  line-height: 150%;
  letter-spacing: 0em;
  font-weight: 300;
`

const textBaseCss = css`
  font-family: Work Sans;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.02em;
  font-weight: 400;
`

const textSmCss = css`
  font-family: Work Sans;
  font-size: 0.875rem;
  line-height: 150%;
  letter-spacing: 0.02em;
  font-weight: 300;
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
