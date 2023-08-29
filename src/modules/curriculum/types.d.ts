type Course = {
    id: string,
    title: string,
    image: string,
    curriculumId: string
}

type Chapter = {
    id: string,
    description: string,
    courseId: string
}

type Curriculum = {
    id: string,
    title: string,
    image: string
}