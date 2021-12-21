import React from 'react'
import UpperNav from '../../components/UpperNav';
import Nav from '../../components/Nav';
import GroupTraining from '../../components/GroupTraining';
import classes from '../../styles/GroupTraining.module.scss';

const gymTrainingPage = () => {
    return (
        <>
            <UpperNav />
            <div className={classes.backgroundDiv}>
                <Nav />
                <h1 style={{ color: 'white', paddingTop: '35px', paddingBottom: '35px', marginLeft: '10%' }}>Group training</h1>
            </div>
            <GroupTraining />
        </>
    )
}

export default gymTrainingPage
