export type LinkEntryProps = {
  name: string,
  link: string,
  icon?: string,
}

export default ({name, link, icon}: LinkEntryProps) => (
    <a href={link}>
      <div
          className="border w-[100vw] max-w-[350px] h-[80px] flex flex-row items-center bg-[#BEBABA] text-black rounded-[5px] p-[20px] gap-[20px] text-3xl">
        {icon && <i className={icon}/>}
        <div className="flex flex-row gap-[20px]">
          {name}
        </div>
      </div>
    </a>
)
