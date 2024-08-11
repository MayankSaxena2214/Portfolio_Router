import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Experience() {
  return (
    <div className="bg-black p-8">
      <h1 className="text-white text-4xl font-bold mb-8 text-center">
        Experience
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-center transition-transform transform hover:scale-105 hover:shadow-lg"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          date="June 2024-July 2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-4xl">Full Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle text-2xl">[Online]</h4>
          <h4 className="vertical-timeline-element-subtitle">Zidio Development</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-center transition-transform transform hover:scale-105 hover:shadow-lg"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          date="May 2024-June 2024"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-4xl">Front End Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle text-2xl">[Online]</h4>
          <h4 className="vertical-timeline-element-subtitle">Octanet Services</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-center transition-transform transform hover:scale-105 hover:shadow-lg"
          contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          date="Feb 2024- March 2024"
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-4xl">Front End Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle text-2xl">[Online]</h4>
          <h4 className="vertical-timeline-element-subtitle">InternPe</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience
