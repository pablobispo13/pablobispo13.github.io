import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

/**
 * <div> do Chakra com suporte às props de animação do Framer Motion
 * (style com MotionValue, variants, etc). Base para efeitos de parallax.
 */
export const MotionBox = chakra(motion.div);
