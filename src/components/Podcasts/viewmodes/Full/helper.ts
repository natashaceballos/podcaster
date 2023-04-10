export const formatTime=(time:string)=>{
    let seconds = Math.floor(Number(time) / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    const stringSeconds = seconds < 10 ? "0" + seconds : seconds;
    const stringMinutes = minutes < 10 ? "0" + minutes : minutes;
    return stringMinutes + ":" + stringSeconds;
}