/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SocialPost from "./SocialPost";
import { Flex } from "@aws-amplify/ui-react";
export default function SocialPosttest(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="689px"
      height="299px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SocialPosttest")}
    >
      <SocialPost
        display="flex"
        gap="16px"
        direction="column"
        width="689px"
        height="299px"
        shrink="0"
        position="relative"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SocialPost")}
      ></SocialPost>
    </Flex>
  );
}
