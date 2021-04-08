module.exports = {
    remainingDays(job) {
        //calculo de tempo restante
        const remainingDaysEntry = (job["total-hours"] / job["daily-hours"]).toFixed()

        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remainingDaysEntry)
        const dueDateInMs = createdDate.setDate(dueDay)

        const timeDiffInMs = dueDateInMs - Date.now()
        // transformar milli em dias
        const dayInMs = 1000 * 60 * 60 * 24 //86400000 is a day in milliseconds
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs)

        //restam x dias
        return dayDiff
    },

    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}