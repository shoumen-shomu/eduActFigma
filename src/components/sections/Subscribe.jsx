import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";

const Subscribe = () => {
  return (
    <div className="mt-50">
      <Container
        className={
          "bg-[url(/src/assets/subscribe.png)] py-20 px-[77px] bg-no-repeat bg-center"
        }
      >
        <Flex className={"justify-between"}>
          <h3 className="text-[40px] text-white font-bold w-[500px]">
            Subscribe to our newsletter for daily updates
          </h3>
          <Flex className={"gap-x-3"}>
            <input
              type="email"
              placeholder="Email Address"
              className="py-5 px-6 rounded-md w-[352px] outline-none border-none bg-white"
            />
            <Button
              btnText={"Subscribe"}
              className={
                "text-white bg-secondary py-4.5 px-12.5 rounded-md text-lg font-bold"
              }
            />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Subscribe;
