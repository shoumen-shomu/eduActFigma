import BlogPost from "../BlogPost";
import Container from "../Container";
import Flex from "../Flex";
import { FaAngleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className="mt-30">
      <Container>
        {/* Header part */}
        <Flex
          className={"gap-x-2 text-2xl text-primary font-bold justify-center"}
        >
          Latest Blog
          <Flex className="text-base text-secondary">
            <FaAngleRight />
            <FaAngleRight />
            <FaAngleRight />
            <FaAngleRight />
          </Flex>
        </Flex>
        <h3 className="text-[#2A254D] text-[40px] font-bold mt-5 mb-20 text-center">
          Latest Updates & Articles
        </h3>
        {/* Header part */}
        <Flex className={"gap-x-9"}>
          {/* Products */}
          <BlogPost />
          <BlogPost />
          <BlogPost />
          {/* Products */}
        </Flex>
      </Container>
    </div>
  );
};

export default Blog;
