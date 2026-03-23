import TodoApp from "../components/TodoApp.jsx";

function  HomeTaskPage(){
    return(
        <div className="text-center">
            <h2>Home task page</h2>
            <TodoApp tasks={"home-task"}/>
        </div>
    )
}

export  default  HomeTaskPage