import type { NextPage } from 'next';

const complaintsnavbar : NextPage = props => {

  const complaintsnavbarcontents = [
    {
      text: "All",
      link: ""
    },
    {
      text: "Resolved",
      link: ""
    },
    {
      text: "Open",
      link: ""
    },
    {
      text: "Pending",
      link: ""
    },
    {
      text: "Closed",
      link: ""
    },
  ]

  return (
    <div className="mx-[35px] mt-[44px] bg-[#0B63C5] rounded-t-[15px] h-[104px] w-[1079px]">
      <div className='mx-[76.5px] text-white py-[23.5px] flex flex-row space-x-[60px]'>
        {complaintsnavbarcontents.map((content) => 
          <div className='border-2 border-white w-fit h-[57px] rounded-[40px] text-center hoverAnimation'>
            <a href={content.link}>
              <p className='py-[15px] px-[40px] text-[18px]'>{content.text}</p>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default complaintsnavbar