import { Comment } from "src/comments/entity/comment.entity"
import { Reaction } from "src/reactions/entity/reactions.entity"

export class Message {
    /* constructor(parameters) {
    } */
    id: number
    // user: string
    title: string
    text: string
    comments: Comment[]
    reactions: Reaction[]
    // createdAt: string
    visible: boolean
}
