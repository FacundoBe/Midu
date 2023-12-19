
export default function Square ({children, index, updateBoard }) {

    return (
        <div key={index} className='square' onClick={()=> updateBoard(index) } >{children} </div>
    )

}