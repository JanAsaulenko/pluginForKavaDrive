let comments =[
    {
        id:'1',
        login:'dert',
        stars:4,
        comment:'i like this cafe'
    },
    {
        id:'2',
        login:'tommy',
        stars:2,
        comment:'i hate this coffee'
    }
]


export const asyncUploadPhotos = () =>{
        return (dispatch)=>{
            setTimeout(()=>{
                console.log('tracks');
                dispatch({type:'UPLOAD_COMMENTS', payload:[...comments]})
            },2000)
        }
}