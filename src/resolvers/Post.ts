export const Post = {
  author(parent: any, args: any, { db }: any, info: any) {
      return db.users.find((user: any) => user.id === parent.author)
  },
  comments(parent: any, args: any, { db }: any, info: any) {
      return db.comments.filter((comment: any) => comment.post = parent.id)
  }
}