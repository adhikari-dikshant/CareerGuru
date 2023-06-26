import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

// Company Styles
const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      {/* Company Logo */}
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
          }}
          style={styles.logoImage}
        />
      </View>

      {/* Job Title */}
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      {/* Company Info */}
      <View style={styles.companyInfoBox}>
        {/* Company Name */}
        <Text style={styles.companyName}>{companyName} / </Text>
        {/* Location */}
        <View style={styles.locationBox}>
          {/* Icon */}
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          {/* Text */}
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;