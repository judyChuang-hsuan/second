export function Login(){
    return new Promise((res)=>{
        setTimeout(res({name:"Edward",token:"AOQGKICVOGJANGO"}),1000)
    })
}

export function Logout(){
    return new Promise((res)=>{
        setTimeout(res(true),1000)
    })
}