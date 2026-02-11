import Button from "../Button";
import Container from "../Container";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="lg:bg-[url(/src/assets/banner.png)] bg-[#ededed] lg:py-56 py-20 bg-center bg-no-repeat bg-cover">
      <Container>
        <h1 className="lg:text-7xl text-5xl text-[#2A254D] font-bold lg:leading-[70px] leading-[55px] lg:w-[600px] w-[350px] ">
          Come along <br /> as we begin our learning journey
        </h1>
        <p className="text-base text-[#697585] leading-8 py-10 lg:w-[440px] w-[350px]">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary,
        </p>
        <div className="bg-[#f58c37]  text-white text-[18px] font-bold rounded-md w-[178px]">
          <Button
            btnText={
              <>
                Try for fee
                <FaArrowRight />
              </>
            }
            className={
              "bg-[#F57005] py-[19px] px-8 rounded-md w-[178px] clip-ss flex items-center gap-x-2"
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
