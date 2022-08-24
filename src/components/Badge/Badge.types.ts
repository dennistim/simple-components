import Colors from "@styles/colors.scss";

export type BadgeProp = {
  entity: BadgeEntity;
  status: BadgeStatus;
  text?: string;
  className?: string;
};

export enum BadgeEntity {
  Product = "Product",
  User = "User",
  Project = "Project",
  Management = "Management",
  Scenario = "Scenario"
}

export enum BadgeStatus  {
  // Management
  New = "New", // Product, Project
  Unpublished = "Unpublished",
  Recommended = "Recommended",
  // Product
  Missing = "Missing",
  Competitor = "Competitor",
  Popular = "Popular",
  // User
  Active = "Active", // Project, Scenario
  Inactive = "Inactive",
  Deactivated = "Deactivated",
  // Project
  Processing = "Processing",
  Confirmation = "Confirmation",
  Completed = "Completed",
}

export const badgeColor = {
  [BadgeEntity.Product]: {
    [BadgeStatus.Missing]: Colors.red1,
    [BadgeStatus.Competitor]: Colors.blue1,
    [BadgeStatus.Popular]: Colors.orange,
    [BadgeStatus.New]: Colors.green3
  },
  [BadgeEntity.Management]: {
    [BadgeStatus.New]: Colors.green3,
    [BadgeStatus.Unpublished]: Colors.blue2,
    [BadgeStatus.Recommended]: Colors.blue3
  },
  [BadgeEntity.User]: {
    [BadgeStatus.Active]: Colors.orange1,
    [BadgeStatus.Inactive]: Colors.blue2,
    [BadgeStatus.Deactivated]: Colors.grayDark
  },
  [BadgeEntity.Project]: {
    [BadgeStatus.Processing]: Colors.blue2,
    [BadgeStatus.Confirmation]: Colors.orange,
    [BadgeStatus.Completed]: Colors.green1,
    [BadgeStatus.Active]: Colors.orange1,
    [BadgeStatus.New]: Colors.green3
  },
  [BadgeEntity.Scenario]: {
    [BadgeStatus.Active]: Colors.orange1
  },
  default: Colors.grayLight
};
