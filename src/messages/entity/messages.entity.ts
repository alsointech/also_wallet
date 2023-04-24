import { Comment } from "src/comments/entity/comment.entity"

export class Message {
    /* constructor(parameters) {
        
    } */
    id: number
    // user: string
    title: string
    text: string
    comments: Comment[]
    reactions: any
    // createdAt: string
    visible: boolean
}
