export interface IPostUser{
    id: string,
    username: string
}
export interface IPost{
    id: number,
    title: string,
    description: string,
    create_post_At: string,
    user : IPostUser
}