import {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticPaths,
} from 'next'
import Head from 'next/head'
import { Article, BlogpostImage } from '@components/Article'
import type { Post } from '../index'

export default function BlogPost({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title } = post
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
      </Head>
      <h1>{title}</h1>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  //Import from data
  const slugArray = ['coloradoBackpacking', 'ugandaPapyrus', 'junctionShotgun']

  const paths = slugArray.map((slug) => ({
    params: { id: slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts: Post[] = await res.json()

//   const paths = posts.map((post) => ({
//     params: { id: post.id.toString() },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context
  console.log(params)

  const post: Post = {
    src: '/Uganda_Papyrus_Swamp_4648.JPG',
    alt: 'Watercolor of papyrus swamp in Uganda',
    title: 'Papyrus swamp in Uganda. Mission trip.',
    slug: 'ugandaPapyrus',
    width: 4648,
    height: 3194,
    quality: 75,
    loading: 'lazy',
    priority: false,
  }

  return {
    props: {
      post,
    },
  }
}

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const { params } = context

//   const emptyPost: Post = {
//     title: 'Post not found',
//     body: '',
//     id: 0,
//     userId: 0,
//   }

//   if (!params?.id) {
//     return {
//       props: {
//         post: emptyPost,
//       },
//     }
//   }

//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   )

//   const post: Post = await res.json()

//   return {
//     props: {
//       post,
//     },
//   }
// }
