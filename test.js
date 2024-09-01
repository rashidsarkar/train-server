const router = [
  {
    station: "EST",
    arrivalTime: "07:30",
    departureTime: "07:45",
  },
  {
    station: "CEN",
    arrivalTime: "08:30",
    departureTime: "08:45",
  },
  {
    station: "NTH",
    arrivalTime: "09:30",
    departureTime: "09:45",
  },
  {
    station: "STH",
    arrivalTime: "10:30",
    departureTime: "10:45",
  },
  {
    station: "WST",
    arrivalTime: "11:30",
    departureTime: "11:45",
  },
];

const routMap = router.map((item) => item.station);
console.log(routMap);
