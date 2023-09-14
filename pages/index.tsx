import { Inter } from "next/font/google";
import Link from "next/link";
import SimpleProgressBar from "@/components/SimpleProgressBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Define a function to calculate percentage based on progress and total
  const calculatePercentage = (progress: any, total: any) => {
    return ((progress / total) * 100).toFixed(2); // Limit to 2 decimal places
  };

  // Function to convert importance level to descriptive tags
  const importanceToTags = (importance: number) => {
    switch (importance) {
      case 1:
        return "Low";
      case 2:
        return "Moderate";
      case 3:
        return "High";
      case 4:
        return "Very High";
      case 5:
        return "Critical";
      default:
        return "Unknown";
    }
  };

  // Function to get background color based on importance level
  const getBackgroundColor = (importance: number) => {
    switch (importance) {
      case 1:
        return "bg-blue-400"; // Low Priority - Blue background
      case 2:
        return "bg-yellow-400"; // Moderate Priority - Yellow background
      case 3:
        return "bg-green-400"; // High Priority - Green background
      case 4:
        return "bg-orange-400"; // Very High Priority - Orange background
      case 5:
        return "bg-red-400"; // Critical Priority - Red background
      default:
        return "bg-gray-400"; // Unknown Priority - Gray background
    }
  };

  // Example course data with due dates and importance levels
  const courses = [
    {
      title: "Database",
      instructor: "Quera College",
      link: "https://quera.org/college/landpage/8939/database",
      importance: 2,
      dueDate: new Date("2023-10-17"), // Set the due date as a Date object
      progress: 40,
      status: "In Progress",
    },
    {
      title: "Programming Basics",
      instructor: "Quera College",
      link: "https://quera.org/college/landpage/2572/programming-basics-course",
      importance: 5,
      dueDate: new Date("2023-11-25"), // Set the due date as a Date object
      progress: 55,
      status: "In Progress",
    },
    {
      title: "Fundamentals of Python",
      instructor: "Quera College",
      link: "https://quera.org/college/landpage/12547/fundamentals-of-python",
      importance: 3,
      dueDate: new Date("2023-09-15"), // Set the due date as a Date object
      progress: 82,
      status: "Done",
    },
    {
      title: "Machine Learning Introduction",
      instructor: "Quera College",
      link: "https://quera.org/college/landpage/8522/machine-learning-Introduction",
      importance: 1,
      dueDate: new Date("2023-09-15"), // Set the due date as a Date object
      progress: 21,
      status: "In Progress",
    },
    {
      title: "Git",
      instructor: "Quera College",
      link: "https://quera.org/college/landpage/8241/git",
      importance: 4,
      dueDate: new Date("2023-09-22"), // Set the due date as a Date object
      progress: 60,
      status: "In Progress",
    },
    {
      title: "Front-End",
      instructor: "Quera College",
      link: "https://quera.org/college/landpage/6092/front-end",
      importance: 5,
      dueDate: new Date("2023-11-19"), // Set the due date as a Date object
      progress: 35,
      status: "In Progress",
    },
  ];

  const sortedCourses = [...courses].sort(
    (a, b) => b.importance - a.importance,
  );

  // Function to calculate days until due date
  const calculateDaysTillDue = (dueDate: Date) => {
    const currentDate = new Date();
    const timeDifference = dueDate.getTime() - currentDate.getTime();
    const daysTillDue = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return `Due in: ${daysTillDue} days`;
  };

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-3xl font-semibold mb-4">My Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sortedCourses.map((course, index) => (
          <Link key={index} href={course.link} target="_blank">
            <div
              className={`border border-gray-500 shadow-md p-4 cursor-pointer hover:shadow-lg bg-gray-100 ${
                course.status === "Done" ? "border-green-500" : ""
              } ${course.status === "Cancelled" ? "border-red-500" : ""}`}
              key={index}
            >
              <div className="flex gap-2">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p
                  className={`text-black border border-black inline py-1 px-2 text-xs ${getBackgroundColor(
                    course.importance,
                  )}`}
                >
                  {importanceToTags(course.importance)}
                </p>
              </div>
              <p className="text-gray-600">Instructor: {course.instructor}</p>
              <p className="text-gray-600">
                {calculateDaysTillDue(course.dueDate)}
              </p>
              <SimpleProgressBar progress={course.progress} />{" "}
              {/* Example usage with 75% progress */}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
