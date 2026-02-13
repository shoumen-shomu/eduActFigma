import Container from '@/components/Container'
import React from 'react'
import Rating from '../../src/assets/Rating.png'
import CourseCard from '@/components/CourseCard'

const Coursepage = () => {
    return (
        <>
        <section className='coursePage'>
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
            {/* common bg for pages */}
                <Container>
                {/* common tag for pages */}
                <div className="text-center">
                    <h3 className="lg:text-[50px] text-[35px] font-bold text-white uppercase">Course</h3>
                    <p className="text-[20px] text-white">Home  /  Course</p>
                </div>
                {/* common tag for pages */}
                </Container>
            </div>
            <div className="py-30">
                <Container>
                    {/* course card part */}
                    <div className="pt-20 flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:justify-between items-center">
                        <CourseCard 
                            className={'lg:w-1/3'}
                            courseTime={'20 Hours'}
                            courseRating={Rating}
                            courseTitle={'Management Consultants in Competitive Markets'}
                            insName={'Guy Hawkins'}
                            insTitle={'Project Manager'}
                            price={'$473.00'}
                            lessons={'15 Lessons'}
                        />
                        <CourseCard 
                            className={'lg:w-1/3'}
                            courseTime={'20 Hours'}
                            courseRating={Rating}
                            courseTitle={'Management Consultants in Competitive Markets'}
                            insName={'Guy Hawkins'}
                            insTitle={'Project Manager'}
                            price={'$473.00'}
                            lessons={'15 Lessons'}
                        />
                        <CourseCard 
                            className={'lg:w-1/3'}
                            courseTime={'20 Hours'}
                            courseRating={Rating}
                            courseTitle={'Management Consultants in Competitive Markets'}
                            insName={'Guy Hawkins'}
                            insTitle={'Project Manager'}
                            price={'$473.00'}
                            lessons={'15 Lessons'}
                        />
                    </div>
                    <div className="pt-20 flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:justify-between items-center">
                        <CourseCard 
                            className={'lg:w-1/3'}
                            courseTime={'20 Hours'}
                            courseRating={Rating}
                            courseTitle={'Management Consultants in Competitive Markets'}
                            insName={'Guy Hawkins'}
                            insTitle={'Project Manager'}
                            price={'$473.00'}
                            lessons={'15 Lessons'}
                        />
                        <CourseCard 
                            className={'lg:w-1/3'}
                            courseTime={'20 Hours'}
                            courseRating={Rating}
                            courseTitle={'Management Consultants in Competitive Markets'}
                            insName={'Guy Hawkins'}
                            insTitle={'Project Manager'}
                            price={'$473.00'}
                            lessons={'15 Lessons'}
                        />
                        <CourseCard 
                            className={'lg:w-1/3'}
                            courseTime={'20 Hours'}
                            courseRating={Rating}
                            courseTitle={'Management Consultants in Competitive Markets'}
                            insName={'Guy Hawkins'}
                            insTitle={'Project Manager'}
                            price={'$473.00'}
                            lessons={'15 Lessons'}
                        />
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Coursepage