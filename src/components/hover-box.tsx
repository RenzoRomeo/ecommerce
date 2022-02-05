import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { BoxProps } from "@chakra-ui/react";

const MotionBox = motion(Box);

interface Props extends BoxProps {
  scale?: number;
}

const HoverBox = (props: Props) => {
  const {scale, ...rest} = props;

  return (
    <MotionBox
      whileHover={{ scale: scale || 1.05 }}
      transition={{ duration: 0.2 }}
      {...rest}
    ></MotionBox>
  );
};

export default HoverBox;
