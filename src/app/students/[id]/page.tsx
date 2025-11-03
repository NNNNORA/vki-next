
import { notFound } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getStudentsApi } from '@/api/studentsApi';
import type StudentInterface from '@/types/StudentInterface';
import Student from '@/components/Students/Student';
import { ReactElement } from 'react';
export default async function StudentPage({
  params,
}: {
  params: Promise<{ id: string }>; // ← теперь params — Promise!
}): Promise<ReactElement> {
  // ✅ Распаковываем params
  const { id } = await params; // или: const { id } = React.use(params);

  const studentId = Number(id);
  if (isNaN(studentId) || studentId <= 0) {
    notFound();
  }

  // ✅ Выполняем fetch на сервере
  const students = await getStudentsApi();
  const student = students.find((s: StudentInterface) => s.id === studentId);

  if (!student || student.isDeleted) {
    notFound();
  }

  // ✅ Student должен быть Server Component или обёрнут в Client Component
  return <Student student={student} />;
}