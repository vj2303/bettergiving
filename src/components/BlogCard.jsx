import React from 'react'
import CRUDButtons from './CRUDButtons'

const BlogCard = (props) => {
    const host = "http://localhost:5000"
    return (
        <div className='w-[350px] min-h-[500px] border border-solid flex flex-col gap-5 pb-[24px] rounded-[18px] relative blog_card overflow-hidden bg-white DM_Sans'>
            {props.role==="ADMIN" && <CRUDButtons handleDelete={props.handleDelete} id={props.id}/>}
            <img src={`${host}/uploads/${props.blog.thumbnail}`} alt="thumbnail" className='rounded-t-[18px] max-h-[200px]'/>
            <div className='flex gap-2 px-[24px]'>
                {props.blog.tags.map((tag, index) => {
                     return <p className='text-[#2D89C8] text-[14px] font-bold uppercase Quicksand'>{tag}</p> 
                })}
            </div>
            <h4 className='text-[#0D283A] font-bold text-xl line-clamp-2 px-[24px]'>{props.blog.title}</h4>
            <p className='text-[#0D283A] text-[14px] line-clamp-3 px-[24px]'>{props.blog.description}</p>
            <a href="#" className='self-end mt-auto px-[24px] text-[#2D89C8] font-bold uppercase'>Read More</a>
        </div>
    )
}

export default BlogCard