export default function Input({value, type,id, onChange, placeholder, Icon}){
    return(
        <div className="flex text-[#df43f7] border-none justify-start  items-center rounded-lg gap-2 pl-2 bg-[#fdf0ff] ">
            <Icon size={20}/>
            <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} required className='rounded-md border-none text-black w-full focus:outline-none  bg-transparent p-2'/>
        </div>
    )
} 