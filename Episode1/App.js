const value = React.createElement("h1",{id:"parent"},
    ["Hi",
    React.createElement("h2",{id:"child"},"helloworld"),
    React.createElement("h3",{id:"child2"},"I am munavar ahmed")
    ]
)

const dom = ReactDOM.createRoot(document.getElementById("root"));
dom.render(value)