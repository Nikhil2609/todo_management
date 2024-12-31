import {
    Button,
    Typography,
    Card,
    CardContent,
    CardActions,
    Grid,
  } from "@material-ui/core";
import { TodoItem } from "../Interface";

interface TodosProps {
    todos: TodoItem[];
    handleDeleteToDo: Function;
    handleCompleteToDo: Function;
}  
function Todo(props: TodosProps) {
    const todos = props.todos;
    return ( 
        <>
            {
                <Grid container style={{marginTop: "16px"}}>
                {todos.map((todo: TodoItem, index: number) => (
                  <Grid item xs={12} key={index} style={{paddingBottom: "16px"}}>
                    <Card variant="outlined" style={{display: "flex", justifyContent: "space-between"}}>
                      <CardContent>
                        <Typography variant="body1">{todo.name} - <span className={`${todo.status === "completed" ? "completed completed-lable" : ""}`}>{todo.status}</span></Typography> 
                      </CardContent>
                      <CardActions>
                        {
                         todo.status === "pending" &&
                            <Button
                            variant="contained"
                            className="completed"
                            size="small"
                            onClick={() => props.handleCompleteToDo(index)}
                            >
                            Mark as Completed
                            </Button>
                        }
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          onClick={() => props.handleDeleteToDo(index)}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            }
        </>
    );
}

export default Todo;
