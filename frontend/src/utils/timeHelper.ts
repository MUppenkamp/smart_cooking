const durationFormat = (duration: number): string => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    let time: string;
    if (hours > 0 && minutes > 0) time = `${hours} Std. ${minutes < 10 ? `0${minutes}` : minutes} Min.`;
    else if (hours > 0 && minutes === 0) time = `${hours} Std.}`;
    else time = `${minutes} Min.`;
    return time;
};

export {
    durationFormat
};
