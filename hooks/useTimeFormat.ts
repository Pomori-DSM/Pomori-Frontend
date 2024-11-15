export const useTimeFormat = (time: number) => {
  const clock = Math.floor(time / 3600);
  const minute = Math.floor((time % 3600) / 60);
  const second = time % 60;
  const timeFormatText: string =
    (clock > 0 ? clock + "시간 " : "") +
    (minute > 0 ? minute + "분 " : "") +
    (second + "초");
  return {
    clock: clock,
    minute: minute,
    second: second,
    timeFormatText: timeFormatText,
  };
};
