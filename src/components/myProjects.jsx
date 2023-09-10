import ProjectsData from "../Projects/data"
import MyProjectsItem from './myProjectsItem'
const MyProjects = () => {
  return (
    <div className="mb-[163px]">
      <h3 className='text-[#fff] uppercase text-[20px] font-medium mb-16'>My Projects</h3>
      <div className='flex flex-col gap-[102px]'>
        {ProjectsData.map(item => (
          <MyProjectsItem {...item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default MyProjects