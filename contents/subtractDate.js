function subtractDate(date1, date2, language) {
    const [month1, year1] = date1.split('/').map(Number);
    const [month2, year2] = date2.split('/').map(Number);

    const totalMonths1 = year1 * 12 + month1;
    const totalMonths2 = year2 * 12 + month2;

    const monthDifference = totalMonths2 - totalMonths1;

    const years = Math.floor(monthDifference / 12);
    const months = monthDifference % 12;

    if (language === "pt") {
        return `${years} ano${years !== 1 ? 's' : ''} ${months} mes${months !== 1 ? 'es' : ''}`;
    } else {
        return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
    }
}

const date = new Date();
const year = date.toISOString().split("-")[0]
const month = date.toISOString().split("-")[1]


document.querySelector("#oceanpact-time-pt").innerHTML = subtractDate("09/2023", `${month}/${year}`, "pt");
document.querySelector("#oceanpact-time-en").innerHTML = subtractDate("09/2023", `${month}/${year}`, "en");