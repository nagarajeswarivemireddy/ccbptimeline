/* eslint-disable import/extensions */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
// Write your code here
import {Chrono} from 'react-chrono'
// eslint-disable-next-line import/no-unresolved
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const {categoryId} = timelineItemsList
  let course = false
  let project = false
  if (categoryId === 'COURSE') {
    return (course = true)
  }
  if (categoryId === 'PROJECT') {
    return (project = true)
  }
  const courseList = timelineItemsList.filter(
    each => each.categoryId === 'COURSE',
  )

  const projectList = timelineItemsList.filter(
    each => each.categoryId === 'PROJECT',
  )

  return (
    <div className="chrono-container">
      {course ? <CourseTimelineCard courseDetailList={courseList} /> : null}
      <Chrono mode="VERTICAL" items={timelineItemsList} />
    </div>
  )
}

export default TimelineView
