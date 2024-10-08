import Breadcrumbs from "@/app/ui/assignments/breadcrumbs";
import { CleverDataFetcher, fetchAssignmentById, fetchSectionByAssignmentId } from "@/app/lib/clever";
import { Assignment } from "@/app/lib/definitions";
import Form from "@/app/ui/assignments/edit-form";

export default async function Page({ params }: {params: {id:string} }) {
    const id = params.id;
    const assignment = await fetchAssignmentById(id);
    const section = await fetchSectionByAssignmentId(id);

    const fetcher = new CleverDataFetcher
    const assignmentData = await fetcher.getAssignment(section.section_id, id)

    return (
        <main>
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Assignments', href: '/dashboard/assignments' },
              {
                label: 'Edit Assignment',
                href: `/dashboard/assignments/${id}`,
                active: true,
              },
            ]}
          />
          <Form assignment={assignment} />
        </main>
      );
}