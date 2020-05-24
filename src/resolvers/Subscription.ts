import { Post } from './Post';
export const Subscription =  {
  count: {
    subscribe(parent: any, args: any, { pubsub }: any, info: any) {
      let count = 0

      setInterval(() => {
        count++
        pubsub.publish('count', {
          count
        })
      }, 1000)
      return pubsub.asyncIterator('count')
    }
  },
  comment: {
    subscribe(parent: any, { postId }: any, { db, pubsub }: any, info: any) {
      const post = db.posts.find((post: any) => post.id === postId && post.published)

      if (!post) {
        throw new Error('Post not found')
      }

      return pubsub.asyncIterator(`comment ${postId}`)
    }
  },
  post: {
    subscribe(parent: any, args: any, { pubsub }: any, info: any) {
      return pubsub.asyncIterator('post')
    }
  }
}