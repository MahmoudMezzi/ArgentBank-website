import React from "react";
import "../../style/FeatureList.css";
import Feature from "../../components/Feature";
import chatIcon from "../../assets/icon-chat.webp";
import moneyIcon from "../../assets/icon-money.webp";
import securityIcon from "../../assets/icon-security.webp";

function FeatureList() {
  return (
    <section class="features">
      <h2 class="sr-only">Features</h2>
      <Feature
        image={chatIcon}
        alt={'Chat Icon'}
        title={"You are our #1 priority "}
        text={`Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.`}
      />

      <Feature
        image={moneyIcon}
        alt={'Money Icon'}
        title={"More savings means higher rates"}
        text={`We use top of the line encryption to make sure your data and money is always safe.`}
      />

      <Feature
        image={securityIcon}
        alt={"Money Icon"}
        title={'Security you can trust'}
        text={`We use top of the line encryption to make sure your data and money is always safe.`}
      />
    </section>
  );
}
