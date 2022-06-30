//@ts-ignore
import moment from 'moment';

export const formatDate = (date: string) => {
  return moment(date).format('DD/MM/YYYY');
};
export const formatDashDate = (date: string) => {
  return moment(date).format('YYYY-MM-DD');
};

export const formatHourDate = (date: string) => {
  return moment(date).format('hh:mm');
};
