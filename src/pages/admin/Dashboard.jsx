import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/custom/Icon";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { TypographyH2, TypographyH4 } from "@/custom/Typography";

// 🔸 Dashboard summary data
const stats = [
  {
    title: "Employees",
    value: 245,
    icon: "Users",
    color: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Departments",
    value: 12,
    icon: "Building2",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    title: "Attendance",
    value: "96%",
    icon: "CalendarCheck2",
    color: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    title: "Leaves",
    value: 34,
    icon: "Umbrella",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Holidays",
    value: 15,
    icon: "Clock",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Training",
    value: 9,
    icon: "BookOpen",
    color: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Settings",
    value: "-",
    icon: "Settings",
    color: "bg-gray-100",
    iconColor: "text-gray-600",
  },
];

// 🔸 Chart data
const attendanceData = [
  { month: "Jan", attendance: 92 },
  { month: "Feb", attendance: 94 },
  { month: "Mar", attendance: 95 },
  { month: "Apr", attendance: 93 },
  { month: "May", attendance: 97 },
  { month: "Jun", attendance: 96 },
];

const leaveData = [
  { name: "Sick Leave", value: 12 },
  { name: "Casual Leave", value: 8 },
  { name: "Earned Leave", value: 14 },
];
const pieColors = ["#fbbf24", "#f472b6", "#60a5fa"];

const departmentData = [
  { name: "HR", count: 10 },
  { name: "Sales", count: 40 },
  { name: "IT", count: 80 },
  { name: "Marketing", count: 35 },
  { name: "Finance", count: 20 },
];

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <TypographyH2>Dashboard Overview</TypographyH2>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <Card key={i} className="shadow-sm hover:shadow-md transition">
            <CardHeader className="flex items-center gap-4">
              <div className={`p-3 rounded-full ${item.color}`}>
                <Icon
                  name={item.icon}
                  className={`${item.iconColor}`}
                  size={22}
                />
              </div>
              <div>
                <TypographyH4 className="text-sm text-gray-500">
                  {item.title}
                </TypographyH4>
                <p className="text-lg font-semibold text-gray-800">
                  {item.value}
                </p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Attendance Trend */}
        <Card className="shadow-sm">
          <TypographyH4>Attendance Trend</TypographyH4>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <CartesianGrid stroke="#f3f4f6" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="attendance"
                  stroke="#f59e0b"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Leave Distribution */}
        <Card className="shadow-sm">
          <TypographyH4>Leave Distribution</TypographyH4>

          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leaveData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={50}
                  outerRadius={90}
                  paddingAngle={5}
                >
                  {leaveData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={pieColors[index % pieColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Department Employee Count */}
        <Card className="shadow-sm">
          <TypographyH4>Employees by Department</TypographyH4>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#f43f5e" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
