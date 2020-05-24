export const User = {
  posts(parent: any, args: any, { db }: any, info: any) {
      return db.posts.filter((post: any) => post.author === parent.id)
  },
  comments(parent: any, args: any, { db }: any, info: any) {
      return db.comments.filter((comment: any) => comment.author === parent.id)
  }
}