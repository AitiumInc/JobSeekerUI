import React from 'react'
import { Listing } from '../../components';
import { Stack } from '@mui/material';

const data = [
  {
    JobId: 1,
    JobRole: "Software Developer",
    Company: "Company1",
    Location:'LA',
    DatePosted: "10/4/23",
    JobType: "Full-time",
    ShortDescription: "The era of pervasive AI has arrived. In this era, organizations will use generative AI to unlock hidden value in their data, accelerate processes, reduce costs, drive efficiency and innovation to fundamentally"
  },
  {
    JobId: 2,
    JobRole: "Software Developer",
    Company: "Company1",
    Location:'LA',
    DatePosted: "10/4/23",
    JobType: "Full-time",
    ShortDescription: "The era of pervasive AI has arrived. In this era, organizations will use generative AI to unlock hidden value in their data, accelerate processes, reduce costs, drive efficiency and innovation to fundamentally"
  },
  {
    JobId: 3,
    JobRole: "Software Developer",
    Company: "Company1",
    Location:'LA',
    DatePosted: "10/4/23",
    JobType: "Full-time",
    ShortDescription: "The era of pervasive AI has arrived. In this era, organizations will use generative AI to unlock hidden value in their data, accelerate processes, reduce costs, drive efficiency and innovation to fundamentally"
  }
]

const Postings = () => {
  return (
    <Stack sx= {{flexDirection:'column', margin:'2vh 2vh'}}>
      {data.map((joblisting) => (
        <Listing key={joblisting.JobId} info={joblisting}/>
      ))}
    </Stack>
  )
}

export default Postings