import { useMemo } from 'react'
import TabsStyled from '../../style/mui/styled/TabsStyled'
import { handelObjsOfArr } from '../../tools/fcs/MakeArray'
import LoaderSkeleton from '../../style/mui/loaders/LoaderSkeleton'
import { lang } from '../../settings/constants/arlang'
import useGrades from '../../hooks/useGrades'

function GradesTabs({ setGrade, counts = {}, grade, removeAll = false }) {
    const { grades: gConst, isLoading } = useGrades()

    const gradeOptions = useMemo(() => {
        if (!gConst?.length) return []

        const addedCounts = gConst.map((g, i) => ({
            ...g,
            count: counts[i + 1]?.count
        }))

        const grades = handelObjsOfArr(addedCounts, {
            value: 'index',
            label: 'name',
            count: 'count'
        })

        return removeAll
            ? grades
            : [{ label: lang.ALL, value: 0, count: counts[0]?.count }, ...grades]

    }, [gConst, counts, removeAll])

    if (isLoading || !gradeOptions.length) {
        return <LoaderSkeleton />
    }

    return (
        <TabsStyled
            value={grade}
            setValue={setGrade}
            tabs={gradeOptions}
        />
    )
}

export default GradesTabs
