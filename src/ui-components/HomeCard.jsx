/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="464px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="309px"
        height="46px"
        position="absolute"
        top="270px"
        left="6px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Price: $"}${home?.price}${"/night"}`}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
      <Image
        width="320px"
        height="218.62px"
        position="absolute"
        top="-3px"
        left="1px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "rice-fields-7247360_960_720 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="218px"
        height="28px"
        position="absolute"
        top="232px"
        left="6px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="TItle"
        {...getOverrideProps(overrides, "TItle")}
      ></Text>
    </View>
  );
}
