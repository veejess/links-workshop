export type LinkEntryProps = {
  name: string,
  link: string,
  icon?: string,
}

const LinkEntry = ({name, link, icon}: LinkEntryProps) => (
    <a href={link} className="entry">
        {icon && <i className={icon}/>}
        <span>
          {name}
        </span>
    </a>
)

export default LinkEntry
