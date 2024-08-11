import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Education() {
  return (
    <div className="bg-black p-8">
      <h1 className="text-white text-4xl font-bold mb-8 text-center">
  Education
</h1>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-center transition-transform transform hover:scale-105 hover:shadow-lg"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          date="2021-2025"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-4xl">Bachelor of Technology</h3>
          <h4 className="text-center text-2xl">[Computer Science]</h4>
          <h4 className="vertical-timeline-element-subtitle ml-2">Bharat Institute of Technology</h4>
          <h4 className="vertical-timeline-element-subtitle">Meerut, Uttar Pradesh</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-center transition-transform transform hover:scale-105 hover:shadow-lg"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          date="2020-2021"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-4xl">Joint Entrance Examination (JEE)</h3>
          <h4 className="vertical-timeline-element-subtitle">Meerut, Uttar Pradesh</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-center transition-transform transform hover:scale-105 hover:shadow-lg"
          contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          date="2019-2020"
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-4xl">Intermediate (12th)</h3>
          <h4 className="text-center text-2xl">[PCM]</h4>
          <h4 className="vertical-timeline-element-subtitle ml-2">LTR Public School</h4>
          <h4 className="vertical-timeline-element-subtitle">Meerut, Uttar Pradesh</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-center transition-transform transform hover:scale-105 hover:shadow-lg"
          contentStyle={{ background: '#DCD427', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          date="2018-19"
          iconStyle={{ background: '#DCD427', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-4xl">High School</h3>
          <h4 className="vertical-timeline-element-subtitle ml-2">BJS Public School</h4>
          <h4 className="vertical-timeline-element-subtitle">Meerut, Uttar Pradesh</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
export default Education
