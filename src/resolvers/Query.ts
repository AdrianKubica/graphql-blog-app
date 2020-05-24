import { v4 as uuidv4 } from 'uuid';

export const Query = {
  me() {
      return {
          id: uuidv4(),
          name: 'Adrian',
          email: 'my-email',
          age: 32
      }
  },
  post() {
      return {
          id: uuidv4(),
          title: 'Super post',
          body: 'Super body description',
          published: true
      }
  },
  users(parent: any, args: any, { db }: any, info: any) {
      if (!args.query) {
          return db.users
      }
      return db.users.filter((user: any) => user.name.toLowerCase().includes(args.query.toLowerCase()))
  },
  posts(parent: any, args: any, { db }: any, info: any) {
      if (!args.query) {
          return db.posts
      }
      return db.posts.filter((post: any) => {
          return post.title.toLowerCase().includes(args.query.toLowerCase()) ||
              post.body.toLowerCase().includes(args.query.toLowerCase())
      })
  },
  comments(parent: any, args: any, { db }: any, info: any) {
      return db.comments
  }
}