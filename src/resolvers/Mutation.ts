import { v4 as uuidv4 } from 'uuid'

export const Mutation = {
  createUser(parent: any, args: any, { db }: any, info: any) {
      const emailTaken = db.users.some((user: any) => user.email === args.data.email)
      if (emailTaken) {
          throw new Error('Email taken')
      }

      const user = { 
          id: uuidv4(), 
          ...args.data
      }

      db.users.push(user)

      return user
  },
  updateUser(parent: any, { id, data }: any, { db }: any, info: any) {
      const user = db.users.find((user: any) => user.id === id)

      if (!user) {
          throw new Error('Unable not found')
      }

      if (typeof data.email === 'string') {
          const emailTaken = db.users.some((user: any) => user.email === data.email)

          if (emailTaken) {
              throw new Error('Email taken')
          }

          user.mail = data.email
      }

      if (typeof data.name === 'string') {
          user.name = data.name
      }

      if (typeof data.age !== 'undefined') {
          user.age = data.age
      }

      return user
  },
  createPost(parent: any, args: any, { db, pubsub }: any, info: any) {
      const userExists = db.users.some((user: any) => user.id === args.data.author)

      if (!userExists) {
          throw new Error('User not found')
      }

      const post = {
          id: uuidv4(),
          ...args.data
      }

      db.posts.push(post)

      if (args.data.published) {
        pubsub.publish('post', { 
            post: {
                mutation: 'CREATED',
                data: post
            }
        })
      }

      return post
  },
  updatePost(parent: any, { id, data }: any, { db, pubsub }: any, info: any) {
      const post = db.posts.find((post: any) => post.id === id)
      const originalPost = { ...post }

      if (!post) {
          throw new Error('Post not found')
      }

      if (typeof data.title === 'string') {
          post.title = data.title
      }

      if (typeof data.body === 'string') {
          post.body = data.body
      }

      if (typeof data.published === 'boolean') {
          post.published = data.published

          if (originalPost.published && !post.published) {
              pubsub.publish('post', {
                  mutation: 'DELETED',
                  data: originalPost
              })
          } else if (!originalPost.published && post.published) {
            pubsub.publish('post', {
                mutation: 'CREATED',
                data: post
            })
          }
      } else if (post.published) {
        pubsub.publish('post', {
            mutation: 'UPDATED',
            data: post
        })
      }

      return post
  },
  createComment(parent: any, args: any, { db, pubsub }: any, info: any) {
    const userExists = db.users.some((user: any) => user.id === args.data.author)
    const postExists = db.posts.some((post: any) => post.id === args.data.post && post.published)

    if (!userExists || !postExists) {
        throw new Error('Unable to found user or post')
    }
      
    const comment = {
        id: uuidv4(),
        ...args.data
    }

    db.comments.push(comment)
    pubsub.publish(`comment ${args.data.post}`, {
        comment: {
            mutation: 'CREATED',
            data: comment
        }
    })

    return comment
  },
  updateComment(parent: any, { id, data }: any, { db, pubsub }: any, info: any) {
      const comment = db.comments.find((comment: any) => comment.id === id)

      if (!comment) {
          throw new Error('Comment not found')
      }

      if (typeof data.text === 'string') {
        comment.text = data.text
        console.log(comment.post)
        console.log("Test", comment)
        pubsub.publish(`comment ${comment.post}`, {
            comment: {
                mutation: 'UPDATED',
                data: comment
            }
        })
      }

      return comment
  },
  deleteUser(parent: any, args: any, { db }: any, info: any) {
      const userIndex = db.users.findIndex((user: any) => user.id === args.id)

      if (userIndex === -1) {
          throw new Error('User not found')
      }

      const deletedUser = db.users.splice(userIndex, 1)
      db.posts = db.posts.filter((post: any) => post.author !== args.id)
      db.comments = db.comments.filter((comment: any) => comment.author !== args.id)
      return deletedUser[0]
  },
  deletePost(parent: any, args: any, { db, pubsub }: any, info: any) {
      const postIndex = db.posts.findIndex((post: any) => post.id === args.id)

      if (postIndex === -1) {
          throw new Error('Unable to find post')
      }

      const [post] = db.posts.splice(postIndex, 1)
      db.comments = db.comments.filter((comment: any) => comment.post !== args.id)

      if (post.published) {
        pubsub.publish('post', {
            post: {
                mutation: 'DELETED',
                data: post
            }
        })
      }

      return post
  },
  deleteComment(parent: any, args: any, { db, pubsub }: any, info: any) {
      const commentIndex = db.comments.findIndex((comment: any) => comment.id === args.id)

      if (commentIndex === -1) {
          throw new Error('Unable to find comment')
      }

      const [comment] = db.comments.splice(commentIndex, 1)
      pubsub.publish(`comment ${comment.post}`, {
        comment: {
            mutation: 'DELETED',
            data: comment
        }
      })

      return comment
  }
}