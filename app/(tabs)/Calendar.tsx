import { Arrow } from "@/assets";
import { color, Txt } from "@/styles";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function Calendar() {
  const navigation = useNavigation<NavigationProp<any>>();

  // 현재 연도와 월을 상태로 관리
  const [clickDay, setClickDay] = useState<number | null>(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  const isToday = (day: number) =>
    year === todayYear && month === todayMonth && day === todayDay;
  const isClickedDay = (day: number) => clickDay === day;

  const clickDate = (day: number | null) => {
    setClickDay(day);
  };

  const dayOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const prevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
    setClickDay(null); // 달이 바뀔 때 선택 초기화
  };

  const nextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
    setClickDay(null); // 달이 바뀔 때 선택 초기화
  };

  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = [];
    const firstDay = date.getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
      days.push(null);
    }
    for (let i = 1; i <= lastDate; i++) {
      days.push(i);
    }
    return days;
  };

  const days = getDaysInMonth(year, month);
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <View style={styles.container}>
      <View style={styles.calendarBox}>
        <View style={styles.calendarTitle}>
          <Txt color="black" textStyle="semibold20">
            {year}년 {month + 1}월
          </Txt>
          <View style={styles.arrowBox}>
            <TouchableOpacity style={styles.arrowButton} onPress={prevMonth}>
              <Arrow size={28} color={color.gray500} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowButton} onPress={nextMonth}>
              <Arrow size={28} rotate="right" color={color.gray500} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.dateBox}>
          {dayOfWeek.map((day, index) => (
            <View key={index} style={styles.dayBox}>
              <Txt textStyle="medium14" color="gray500">
                {day}
              </Txt>
            </View>
          ))}
        </View>

        <View style={styles.daysContainer}>
          {weeks.map((week, index) => (
            <View key={index} style={styles.weekRow}>
              {week.map((day, dayIndex) => (
                <TouchableOpacity
                  key={dayIndex}
                  onPress={() => clickDate(day)}
                  style={[
                    styles.day,
                    {
                      backgroundColor: day
                        ? isToday(day)
                          ? color.gray800
                          : isClickedDay(day)
                          ? color.gray100
                          : color.white
                        : "transparent",
                    },
                  ]}
                >
                  {day ? (
                    <Txt
                      textStyle="medium14"
                      color={
                        isToday(day)
                          ? "white"
                          : isClickedDay(day)
                          ? "black"
                          : "black"
                      }
                    >
                      {day}
                    </Txt>
                  ) : (
                    <Txt> </Txt>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 108,
    paddingHorizontal: 20,
  },
  calendarBox: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: color.white,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  calendarTitle: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  arrowBox: {
    gap: 8,
    justifyContent: "center",
    flexDirection: "row",
  },
  arrowButton: {
    padding: 8,
  },
  dateBox: {
    flexDirection: "row",
    marginTop: 16,
    gap: 4,
  },
  dayBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    flex: 1,
  },
  day: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    width: (Dimensions.get("window").width - 104) / 7,
    height: (Dimensions.get("window").width - 104) / 7,
    borderRadius: 100,
  },
  daysContainer: {
    marginTop: 8,
  },
  weekRow: {
    flexDirection: "row",
    gap: 4,
  },
});
