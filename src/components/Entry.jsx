import {useState} from "react"
import Note from "./Note";
import CreateArea from './createArea'

function Final(){

    const [note, saveNote] = useState([]) 

    function uploadChange(itemNote){
        
        saveNote((preValue)=>{
            return [
                ...preValue,
                itemNote
            ]
        })
    }

    function onChecked(id){
        saveNote((preValue)=>{
            return preValue.filter((boxItem, index)=>{
                return index !== id
            })
        })
    }

    return (<div>
        <CreateArea
            setChange={uploadChange}
        />
            {note.map((item, index)=>(
                <Note 
                    key={index}
                    id={index}
                    title={item.title}
                    content={item.content}
                    onChecked={onChecked}
                />
            ))}
            
        </div>

    )
}


export default Final