import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { LIST_NAVIGATION_MENU } from "@/constant/listNavigationMenu";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul
    variants={variants}
    className="fixed top-24 w-60 flex flex-col gap-4"
  >
    {LIST_NAVIGATION_MENU.map((item, i) => (
      <MenuItem title={item.name} href={item.href} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
