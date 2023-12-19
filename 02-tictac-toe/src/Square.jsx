
export default function Square ({children, index, updateBoard, isSelected}) {

    const className = `square ${isSelected && 'is-selected'} ` 

    return (
        <div key={index} className= {className} onClick={()=> updateBoard(index) } >{children} </div>
    )

}