// src/components/Students/Student.tsx
import type StudentInterface from '@/types/StudentInterface';
import BackLink from '@/components/BackLink/BackLink';

interface StudentProps {
  student: StudentInterface;
}

export default function Student({ student }: StudentProps) {
  const fullName = `${student.lastName} ${student.firstName} ${student.middleName || ''}`.trim();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <BackLink href="/students" />

      <h1 className="text-2xl font-bold mb-4">Профиль студента</h1>

      <div className="bg-white p-4 rounded shadow">
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>ФИО:</strong> {fullName}</p>
        <p><strong>Контакты:</strong> {student.contacts || '—'}</p>
        <p><strong>ID группы:</strong> {student.groupId}</p>
        {student.isDeleted && <p className="text-red-500">Студент удалён</p>}
      </div>
    </div>
  );
}