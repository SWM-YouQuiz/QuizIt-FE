import {getChapters, getCourses} from "@/modules/curriculum/serverApiActions";
import {cn} from "@/util/tailwind";
import {Header} from "@/components/Header";
import {Alert, BackArrow, Filter} from "@/components/svgs";
import Link from "next/link";
import Card from "@/modules/curriculum/components/Card";
const Chapter = async ({params}: {params: {curriculumId: string, courseId: string}}) => {
    const chapters = await getChapters({curriculumId: 'mvp', courseId: params.courseId});

    return (
        <div className="flex flex-col h-full">
            <Header>
                <Link href={`/curriculum/${params.curriculumId}`}>
                    <BackArrow/>
                </Link>
                <div className="font-bold">mvp</div>
                <Filter/>
            </Header>
            <div className="flex-grow bg-bg-primary p-5 overflow-y-scroll">
                <BodyContainer chapters={chapters}/>
            </div>
        </div>
    )
}

export default Chapter;

const BodyContainer = ({chapters}: {chapters: Chapter[]}) => (
    <div className="w-full overflow-y-scroll space-y-4">
        {
            chapters.map(({id, description, courseId}, idx) => (
                <Card
                    key={`chapter-${id}`}
                    href={`/quiz/${id}`}
                    alt={courseId}
                    imageUrl={'temp'}
                    path={`Chapter ${idx+1}`}
                    percentage={30}
                    title={description}
                />
            ))
        }
    </div>
)