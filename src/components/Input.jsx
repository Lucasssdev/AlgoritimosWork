export default function Input({value, type,id, onChange, placeholder}){
    return(
        <div className="flex border-2">
            <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} className='rounded-md p-2'/>
        </div>
    )
}