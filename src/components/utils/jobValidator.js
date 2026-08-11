import { REQUIRED_JOB_SCHEMA, OPTIONAL_JOB_SCHEMA } from './jobSchema'

function fieldIsValid(value, type, required) {
    if (value === undefined || value === null) return !required
    return typeof value === type
}

export function validateJob(job) {
    return (
        Object.entries(REQUIRED_JOB_SCHEMA).every(([f, t]) => fieldIsValid(job?.[f], t, true)) &&
        Object.entries(OPTIONAL_JOB_SCHEMA).every(([f, t]) => fieldIsValid(job?.[f], t, false))
    )
}

export function validateJobs(jobs) {
    return Array.isArray(jobs) ? jobs.filter(validateJob) : []
}