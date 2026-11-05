import {useState} from "react"
import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@mui/material";

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false) 

    const [item, save] = useState({
        title: "",
        content: ""
    })

    function handleSave(event){
        const {name, value} = event.target

        save((preValue)=>{
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();

        if(item.title.trim() === ""){
            return
        }
            props.setChange(item)

            save({
                title: "",
                content: ""
            })   
    }

    function expand(){
        setExpanded(true)
    }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isExpanded?<input onChange={handleSave} name="title" placeholder="Title" value={item.title} />:null}
        <textarea onChange={handleSave} name="content" onClick={expand} placeholder="Take a note..." rows={isExpanded?3:1} value={item.content}/>
        <Zoom in={isExpanded}>
        <button type="submit" ><AddIcon/></button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
