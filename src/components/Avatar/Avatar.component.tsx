import React from "react";
import classNames from "classnames";
import Text from "@components/Text";
import { avatarInitialsSize, avatarLineHeights, AvatarProp, AvatarSize, avatarTitleSizes, avatarSizeClasses } from "./Avatar.types";

import styles from "./Avatar.module.scss";
import Colors from "@styles/colors.scss";

const Avatar = ({
  name,
  surname,
  withTitles = false,
  size = AvatarSize.Large,
  invertedTitle = false,
  role,
  email,
  className,
  onClick
}: AvatarProp) => {
  return (
    <div className={classNames(styles.avatar, className)} onClick={onClick}>
      <div className={classNames(styles.avatar_label, avatarSizeClasses[size])}>
        <Text size={avatarInitialsSize[size]}>{`${name[0]}${surname[0]}`}</Text>
      </div>
      {withTitles &&
        <div className={styles.avatar_titles}>
          {role && <Text tag="p" color={Colors.grayDark} size={14} lineHeight={20} >{role}</Text>}
          <Text
            tag="p"
            size={avatarTitleSizes[size]}
            color={invertedTitle ? Colors.black : Colors.textColor}
            lineHeight={avatarLineHeights[size]}
          >
            {`${name} ${surname}`}
          </Text>
          {email && <Text tag="p" size={12} color={Colors.gray} >{email}</Text>}
        </div>}
    </div>
  );
};

export default Avatar;
