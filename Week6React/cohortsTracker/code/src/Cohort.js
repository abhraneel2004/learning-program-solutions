class Cohort {
    constructor(cohortCode,
        startDate,
        technology,
        trainerName,
        coachName,
        currentStatus) {
        this.cohortCode = cohortCode;
        this.coachName = coachName;
        this.trainerName = trainerName;
        this.technology = technology;
        this.startDate = startDate;
        this.currentStatus = currentStatus;
    }
}
const CohortsData = [
  new Cohort('INTADMDF10', '15-Jun-2025', 'DSA', 'Ajay Kumar', 'Priya Sharma', 'Scheduled'),
  new Cohort('ADM21JF014', '20-Jun-2025', 'PLSQL', 'Rahul Singh', 'Neha Patel', 'Ongoing'),
  new Cohort('CDBJF21025', '25-Jun-2025', 'Spring', 'Vikram Yadav', 'Anjali Gupta', 'Ongoing'),
  new Cohort('INTADMJF12', '01-Jul-2025', 'Spring Boot', 'Suresh Menon', 'Divya Rao', 'Scheduled'),
  new Cohort('CDE22JF011', '05-Jul-2025', 'React', 'Manish Kumar', 'Pooja Singh', 'Ongoing'),
  new Cohort('INTADMDF09', '15-Jul-2025', 'Git', 'Deepak Jain', 'Archana Reddy', 'Scheduled'),
  new Cohort('ADM22DF001', '25-Jul-2025', 'DSA', 'Amit Sharma', 'Sonia Gupta', 'Ongoing'),
];
export {Cohort, CohortsData};