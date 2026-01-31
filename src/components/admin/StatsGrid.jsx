import { Globe, ShieldAlert, BellRing, CheckCircle } from "lucide-react";

const StatsGrid = () => {
  const stats = [
    {
      title: "Total Websites",
      value: "12",
      change: "+5 this month",
      changeColor: "text-green-500",
      icon: <Globe className="h-6 w-6 text-[#10B981]" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "Active Vulnerabilities",
      value: "13",
      change: "+12% this month",
      changeColor: "text-red-500",
      icon: <ShieldAlert className="h-6 w-6 text-[#10B981]" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "High-Risk Alerts",
      value: "6",
      change: "+2 this month",
      changeColor: "text-red-500",
      icon: <BellRing className="h-6 w-6 text-[#10B981]" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "Responses Taken",
      value: "24",
      change: "-5% this month",
      changeColor: "text-green-500",
      icon: <CheckCircle className="h-6 w-6 text-[#10B981]" />,
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div key={index} className="bg-white  rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${item.iconBg}`}>{item.icon}</div>

            <div className="ml-4">
              <p className="text-sm text-gray-500 ">{item.title}</p>
              <p className="text-2xl font-bold text-gray-900 ">{item.value}</p>
            </div>
          </div>

          <div className="mt-4">
            <p className={`text-sm ${item.changeColor}`}>{item.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
