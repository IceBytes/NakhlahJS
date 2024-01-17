import { getNumberOfCourses } from "../utils/course.ts";
import { Course, CourseGroup } from "../utils/types.ts";

import Collapse from "./Collapse.tsx";
import CourseCard from "./CourseCard.tsx";
import ProgressPageSplit from "./ProgressPageSplit.tsx";

export default function Courses(
  { courses, completed }: {
    courses: (Course | CourseGroup)[];
    completed: string[];
    
  },
) {
  const total = getNumberOfCourses(courses);
  return (
    <>
      <div className="py-2 flex max-md:flex-col">
        <h1 class="w-1/2 max-md:w-full text-5xl font-bold z-10 mb-2 my-auto">الاساسيات</h1>
        <p class="w-1/2 max-md:w-full text-2xl z-10 mb-2 my-auto">
          لقد أتمت {completed.length} من {total} دورة تدريبية
        </p>
        <ProgressPageSplit className="w-1/2 " completed={completed.length} total={total} />
      </div>
      <section class="flex flex-col gap-2 mb-4">
        {courses.map((course, index) => {
          // Group of courses
          if ("courses" in course) {
            return (
              <div key={index} class="mt-1">
                <Collapse
                  completed={completed}
                  title={course.label}
                  courses={course.courses}
                />
              </div>
            );
          } else {
            // Single course
            return (
              <div key={course.slug}>
                <CourseCard
                  course={course}
                  isDone={completed ? completed.includes(course.slug.replace("\\", "/")) : false}
                />
              </div>
            );
          }
        })}
      </section>
    </>
  );
}
