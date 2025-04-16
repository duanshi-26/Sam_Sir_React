function ArrowOnClick(){
    function withoutArgs(){
        console.log("I am without Arguments");
    }
    function withArgs(a){
        console.log("I am with argyments= "+a);
    }
    return(
        <div>
        <button onClick={withoutArgs}>Click Me</button>
        <button onClick={()=>withArgs(10)}> Click Me</button>
        </div>
    )
}

export default ArrowOnClick;