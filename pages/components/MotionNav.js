import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion, useViewportScroll } from "framer-motion";
import DrawerNav from "./DrawerNav";

const MotionNav = motion(Box);

const MotionNavigation = () => {
    const [hidden, setHidden] = React.useState(false);
    const { scrollY } = useViewportScroll();

    React.useEffect(() => {
        return scrollY.onChange(() => update());
    });

    function update() {
        if (scrollY?.current < scrollY?.prev) {
            setHidden(false);
        } else if (scrollY?.current > 1 && scrollY?.current > scrollY.prev) {
            setHidden(true);
        }
    }

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -25 },
    };

    return (
        <Flex>
            <MotionNav
                variants={variants}
                animate={hidden ? "hidden" : "visible"}
                transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.4 }}
                zIndex="10"
                style={{
                    display: "flex",
                    position: "fixed",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "6rem",
                    width: "100%",
                    maxWidth: "100%",
                }}
            >
                <div></div>
                <DrawerNav />
            </MotionNav>
        </Flex>
    );
};

export default MotionNavigation;
