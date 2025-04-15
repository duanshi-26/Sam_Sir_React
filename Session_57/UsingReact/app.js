// fetch the root div

let root = document.getElementById('root');

// create element using React ka "createElement method" jiske 3 arguemnts hai 
// 1. type
// 2. props ya attributes
// 3. children ya content

let ele = React.createElement('p', {id:"para", className: "graph"}, "Writing element using React")

// ab elemt ko root par render kardo using ReactDOM

ReactDOM.createRoot(root).render(ele);