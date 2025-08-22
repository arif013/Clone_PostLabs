import React from 'react'

const data = [
    {
        item0: "",
        item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias nulla veritatis expedita recusandae enim blanditiis animi sequi, repellendus repellat!",
        item1: "",
        class: "col-span-2"
    },
    {
        item0: "",
        item1: "",
        item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias nulla veritatis expedita recusandae enim blanditiis animi sequi, repellendus repellat!",
        class: "col-span-2"
    },
    {
        item0: "",
        item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias nulla veritatis expedita recusandae enim blanditiis animi sequi, repellendus repellat!",
        item1: "",
        class: "col-span-2"
    }
]

const Building = () => {
    return (
        <section>
            <div className='text-[144px] px-[40px] py-[100px] leading-none'>What We're <br /> Building</div>
            {data.map((dataItem, index) => (
                <div className='grid grid-cols-4 items-center py-[220px]'>
                    <>
                        {/* <div></div> */}

                        <p className='col-span-2 text-[36px]'>{dataItem.item}</p>
                        {/* <div></div> */}
                    </>
                </div>
            ))}
            <div>

            </div>
        </section>
    )
}

export default Building