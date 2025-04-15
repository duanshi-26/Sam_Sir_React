function harsh(){
    return(
        <div>I am harsh in small letters but imported in capital</div>
    )
}

export function harsh_named(){
    return(
        <div>
            I am named Harsh hence I am exported without the keyword default, I can be imported only by my own name
        </div>
    )
}
export default harsh;
