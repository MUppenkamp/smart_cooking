import { format } from 'date-fns';
import { de } from 'date-fns/locale';

const durationFormat = (duration: number): string => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    let time: string;
    if (hours > 0 && minutes > 0) time = `${hours} Std. ${minutes < 10 ? `0${minutes}` : minutes} Min.`;
    else if (hours > 0 && minutes === 0) time = `${hours} Std.}`;
    else time = `${minutes} Min.`;
    return time;
};

const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const result = format(date, 'EEEE, dd. MMMM', {
        locale: de
    });

    return result;
};

export {
    durationFormat,
    formatDate
};
