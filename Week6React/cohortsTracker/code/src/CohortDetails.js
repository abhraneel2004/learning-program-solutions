import React from "react";
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
    const getStatusClass = (status) => {
        switch(status.toLowerCase()) {
            case 'ongoing':
                return styles.ongoing;
            case 'scheduled':
                return styles.scheduled;
            case 'completed':
                return styles.completed;
            default:
                return '';
        }
    };
    
    return (
        <div className={styles.box}>
            <h3>
                {props.cohort.cohortCode}
                <span>{props.cohort.technology}</span>
            </h3>
            
            <div className={styles.dlContainer}>
                <div className={styles.dt}>Started On</div>
                <div className={styles.dd}>{props.cohort.startDate}</div>
                
                <div className={styles.dt}>Current Status</div>
                <div className={styles.dd}>
                    <span className={`${styles.statusTag} ${getStatusClass(props.cohort.currentStatus)}`}>
                        {props.cohort.currentStatus}
                    </span>
                </div>
                
                <div className={styles.dt}>Coach</div>
                <div className={styles.dd}>{props.cohort.coachName}</div>
                
                <div className={styles.dt}>Trainer</div>
                <div className={styles.dd}>{props.cohort.trainerName}</div>
            </div>
        </div>
    );
}
export default CohortDetails;