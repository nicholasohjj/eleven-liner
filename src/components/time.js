const Today = new Date();
let hours = Today.getHours();
let minutes = Today.getMinutes();

if (hours < 10) hours = `0${hours}`;
if (minutes < 10) minutes = `0${minutes}`;
const CurrentTime = `${hours}${minutes}`;

export default CurrentTime;
