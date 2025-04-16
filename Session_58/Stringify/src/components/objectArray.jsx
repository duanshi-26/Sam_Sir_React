const Obj = ()=>{
    let o ={a:10, b:"hello"};
    let arr = [10, "hello", true, null];
    return(
        <>
        <h1>{arr}</h1>
        <h1>{o.a}</h1>
        {/* <h1>{o}</h1> */}
        </>
    )
}

export default Obj;