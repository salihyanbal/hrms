import React, {useState,useEffect} from 'react'
import JobPostingService from '../../services/jobPostingService'
import JobPostCard from './JobPostCard'

export default function JobPostList({setCurrentJobPost}) {
    const [jobPostings, setJobPostings] = useState([])
    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getAll().then(result => setJobPostings(result.data.data))
    },[])
    return (
        <div>
            {
                jobPostings.map((jobPosting,i) => (
                    <JobPostCard key={i} setCurrentJobPost = {setCurrentJobPost} jobPost = {jobPosting}/>
                ))
            }
        </div>
    )
}
