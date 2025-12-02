import Section from "../../style/mui/styled/Section"
import { useGetCoursesQuery } from "../../toolkit/apis/coursesApi"
import { TextBorderWithIcons } from "../ui/TextBorderAround"
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { OutLinedHoverBtn } from "../../style/buttonsStyles";
import { FlexColumn } from "../../style/mui/styled/Flexbox";
import { Link } from "react-router-dom";
import UnitCourseDetails from "../content/UnitCourseDetails";
import { handelObjsOfArr } from "../../tools/fcs/MakeArray";
import useGrades from "../../hooks/useGrades";
import AutoCompleteFixed from "../../style/mui/styled/AutoCompleteFixed";
import { useState } from "react";

function LatestCourses({ user = null }) {
    const { grades } = useGrades()
    const options = handelObjsOfArr(grades, { id: 'index', label: 'name' })
    const [grade, setGrade] = useState([])
    const { data, isLoading } = useGetCoursesQuery({ isFixed: true, limit: 10, isModernSort: true, grade: grade || user?.grade || null })

    if (data?.values?.courses)
        return (
            <Section>
                <FlexColumn mb={'12px'}>
                    <TextBorderWithIcons sx={{ my: '9px' }} colorOne={'primary.main'} color={'neutral.0'} title={'احدث الكورسات'}
                        endIcon={<img src="./assets/search.svg" style={{ maxWidth: '40px' }} />} />
                    <OutLinedHoverBtn size="small" component={Link} to='/courses' >عرض كل الكورسات</OutLinedHoverBtn>
                    <AutoCompleteFixed
                        label={'الصف الدراسي'}
                        value={grade} setValue={setGrade} multiple isLoading={isLoading}
                        options={options} sx={{ maxWidth: '250px' }} variant="filled" />
                </FlexColumn>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    // spaceBetween={25}
                    // slidesPerView={2.5}
                    breakpoints={{
                        320: { slidesPerView: 1.2, spaceBetween: 15 },   // mobile
                        640: { slidesPerView: 1.2, spaceBetween: 15 }, // small tablets
                        768: { slidesPerView: 2.25, spaceBetween: 20 },   // tablets
                    }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    {data?.values?.courses.map((course, i) => <SwiperSlide key={i}> <UnitCourseDetails course={course} /> </SwiperSlide>)}
                </Swiper>
            </Section>
        )
}

export default LatestCourses
