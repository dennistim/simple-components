import React from "react";
import classNames from "classnames";
import { BadgeProp, badgeColor } from "./Badge.types";
import Text from "@components/Text";

import styles from "./Badge.module.scss";

const Badge = ({ entity, status, text, className }: BadgeProp) => {
  const bgColor: string = badgeColor[entity]?.[status] || badgeColor.default;

  return (
    <Text
      className={classNames(styles.badge, className)}
      bgColor={bgColor}
      size={12}
      lineHeight={16}
    >
      { text || status }
    </Text>
  );
};

export default Badge;
