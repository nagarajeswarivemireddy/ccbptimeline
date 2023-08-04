/* eslint-disable no-unused-vars */
// Write your code here
const CourseTimelineCard = props => {
  const {courseDetailList} = props
  const {
    id,
    categoryId,
    title,
    courseTitle,
    description,
    duration,
    tagsList,
  } = courseDetailList
  return (
    <div className="courseContainer">
      <div className="title">
        <h1 className="heading">{courseTitle}</h1>
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      {tagsList.map(each => (
        <p className="tags">{each.name}</p>
      ))}
    </div>
  )
}
export default CourseTimelineCard
