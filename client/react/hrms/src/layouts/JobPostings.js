import React, { useState } from 'react'
import JobPostList from '../pages/JobPostings/JobPostList'

import { Grid } from "semantic-ui-react";
import JobPostDetails from '../pages/JobPostings/JobPostDetails';

export default function JobPostings() {
    const [state, setState] = useState(null)

    const setCurrentJobPost = (value)=>{
        setState(value)
    }

    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <JobPostList setCurrentJobPost = {setCurrentJobPost}/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <JobPostDetails jobPost = {state}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
