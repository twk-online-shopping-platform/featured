import Container from "@twk-ui-lib/react/lib/template/Container/Container";
import ProductCard from "@twk-ui-lib/react/lib/molecules/Card/ProductCard/ProductCard";
import {
  ContainerStyleType,
  FlexContainAlign,
  FlexFlow,
} from "@twk-ui-lib/react/lib/template/Container/Type";
import React from "react";
import {
  ButtonVariant,
  ButtondRadius,
  ButtonSize,
} from "@twk-ui-lib/react/lib/atoms/Button/Type";
import { IconSize } from "@twk-ui-lib/react/lib/atoms/Icon/Type";
import {
  TypographyVariant,
  TypographySize,
  TypographyWeight,
} from "@twk-ui-lib/react/lib/atoms/Typography/Type";
import {
  CardElementOrder,
  CurrencyType,
  CardSize,
} from "@twk-ui-lib/react/lib/molecules/Card/ProductCard/Type";

const App = () => {
  return (
    <Container
      type={ContainerStyleType.FLEX}
      flexContentAlign={FlexContainAlign.LEFT_RIGHT}
      flexFlow={FlexFlow.ROW}
      flexWrap={true}
    >
      <ProductCard
        productImage={{
          imageUrl:
            "https://media.direct.playstation.com/is/image/sierialto/pulse-3d-wireless-ps5-headset-accessory-front-angle?$Background_Large$",
          hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
        }}
        description={""}
        title={{
          text: {
            text: "Gaming Headphone",
            variant: TypographyVariant.HEADING,
            size: TypographySize.SMALL,
            weight: TypographyWeight.BOLD,
          },
          order: CardElementOrder.SECOND_ROW,
        }}
        subTitle={{
          text: {
            text: "Headphone",
            variant: TypographyVariant.TEXT,
            size: TypographySize.SMALL,
          },
          order: CardElementOrder.FIRST_ROW,
        }}
        rating={{
          order: CardElementOrder.THRID_ROW,
          value: { value: 3, max: 5, size: IconSize.X_X_SMALL },
        }}
        price={{
          amount: { text: "23.99" },
          discount: { text: "18.99" },
          order: CardElementOrder.FOUTH_ROW,
        }}
        actionButton={{
          order: CardElementOrder.FIFTH_ROW,
          value: {
            label: {
              text: "Add to Cart",
              size: TypographySize.EXTRA_EXTRA_SMALL,
            },
            variant: ButtonVariant.SECONDARY,
            radius: ButtondRadius.CURVE,
            leftIcon: {
              cssValue: "fa-solid fa-cart-shopping",
              size: IconSize.X_X_SMALL,
            },
            size: ButtonSize.SMALL,
          },
        }}
        currency={CurrencyType.USD}
        size={CardSize.EXTRA_SMALL}
        hashBorder={false}
      />
      <ProductCard
        productImage={{
          imageUrl:
            "https://media.direct.playstation.com/is/image/sierialto/pulse-3d-wireless-ps5-headset-accessory-front-angle?$Background_Large$",
          hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
        }}
        description={""}
        title={{
          text: {
            text: "Gaming Headphone",
            variant: TypographyVariant.HEADING,
            size: TypographySize.SMALL,
            weight: TypographyWeight.BOLD,
          },
          order: CardElementOrder.SECOND_ROW,
        }}
        subTitle={{
          text: {
            text: "Headphone",
            variant: TypographyVariant.TEXT,
            size: TypographySize.SMALL,
          },
          order: CardElementOrder.FIRST_ROW,
        }}
        rating={{
          order: CardElementOrder.THRID_ROW,
          value: { value: 3, max: 5, size: IconSize.X_X_SMALL },
        }}
        price={{
          amount: { text: "23.99" },
          discount: { text: "18.99" },
          order: CardElementOrder.FOUTH_ROW,
        }}
        actionButton={{
          order: CardElementOrder.FIFTH_ROW,
          value: {
            label: {
              text: "Add to Cart",
              size: TypographySize.EXTRA_EXTRA_SMALL,
            },
            variant: ButtonVariant.SECONDARY,
            radius: ButtondRadius.CURVE,
            leftIcon: {
              cssValue: "fa-solid fa-cart-shopping",
              size: IconSize.X_X_SMALL,
            },
            size: ButtonSize.SMALL,
          },
        }}
        currency={CurrencyType.USD}
        size={CardSize.EXTRA_SMALL}
        hashBorder={false}
      />
      <ProductCard
        productImage={{
          imageUrl:
            "https://media.direct.playstation.com/is/image/sierialto/pulse-3d-wireless-ps5-headset-accessory-front-angle?$Background_Large$",
          hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
        }}
        description={""}
        title={{
          text: {
            text: "Gaming Headphone",
            variant: TypographyVariant.HEADING,
            size: TypographySize.SMALL,
            weight: TypographyWeight.BOLD,
          },
          order: CardElementOrder.SECOND_ROW,
        }}
        subTitle={{
          text: {
            text: "Headphone",
            variant: TypographyVariant.TEXT,
            size: TypographySize.SMALL,
          },
          order: CardElementOrder.FIRST_ROW,
        }}
        rating={{
          order: CardElementOrder.THRID_ROW,
          value: { value: 3, max: 5, size: IconSize.X_X_SMALL },
        }}
        price={{
          amount: { text: "23.99" },
          discount: { text: "18.99" },
          order: CardElementOrder.FOUTH_ROW,
        }}
        actionButton={{
          order: CardElementOrder.FIFTH_ROW,
          value: {
            label: {
              text: "Add to Cart",
              size: TypographySize.EXTRA_EXTRA_SMALL,
            },
            variant: ButtonVariant.SECONDARY,
            radius: ButtondRadius.CURVE,
            leftIcon: {
              cssValue: "fa-solid fa-cart-shopping",
              size: IconSize.X_X_SMALL,
            },
            size: ButtonSize.SMALL,
          },
        }}
        currency={CurrencyType.USD}
        size={CardSize.EXTRA_SMALL}
        hashBorder={false}
      />
      <ProductCard
        productImage={{
          imageUrl:
            "https://media.direct.playstation.com/is/image/sierialto/pulse-3d-wireless-ps5-headset-accessory-front-angle?$Background_Large$",
          hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
        }}
        description={""}
        title={{
          text: {
            text: "Gaming Headphone",
            variant: TypographyVariant.HEADING,
            size: TypographySize.SMALL,
            weight: TypographyWeight.BOLD,
          },
          order: CardElementOrder.SECOND_ROW,
        }}
        subTitle={{
          text: {
            text: "Headphone",
            variant: TypographyVariant.TEXT,
            size: TypographySize.SMALL,
          },
          order: CardElementOrder.FIRST_ROW,
        }}
        rating={{
          order: CardElementOrder.THRID_ROW,
          value: { value: 3, max: 5, size: IconSize.X_X_SMALL },
        }}
        price={{
          amount: { text: "23.99" },
          discount: { text: "18.99" },
          order: CardElementOrder.FOUTH_ROW,
        }}
        actionButton={{
          order: CardElementOrder.FIFTH_ROW,
          value: {
            label: {
              text: "Add to Cart",
              size: TypographySize.EXTRA_EXTRA_SMALL,
            },
            variant: ButtonVariant.SECONDARY,
            radius: ButtondRadius.CURVE,
            leftIcon: {
              cssValue: "fa-solid fa-cart-shopping",
              size: IconSize.X_X_SMALL,
            },
            size: ButtonSize.SMALL,
          },
        }}
        currency={CurrencyType.USD}
        size={CardSize.EXTRA_SMALL}
        hashBorder={false}
      />
      <ProductCard
        productImage={{
          imageUrl:
            "https://media.direct.playstation.com/is/image/sierialto/pulse-3d-wireless-ps5-headset-accessory-front-angle?$Background_Large$",
          hashImagUrl: "LHF~s@-;CS4-_4oMIpRj%gRjMwxa",
        }}
        description={""}
        title={{
          text: {
            text: "Gaming Headphone",
            variant: TypographyVariant.HEADING,
            size: TypographySize.SMALL,
            weight: TypographyWeight.BOLD,
          },
          order: CardElementOrder.SECOND_ROW,
        }}
        subTitle={{
          text: {
            text: "Headphone",
            variant: TypographyVariant.TEXT,
            size: TypographySize.SMALL,
          },
          order: CardElementOrder.FIRST_ROW,
        }}
        rating={{
          order: CardElementOrder.THRID_ROW,
          value: { value: 3, max: 5, size: IconSize.X_X_SMALL },
        }}
        price={{
          amount: { text: "23.99" },
          discount: { text: "18.99" },
          order: CardElementOrder.FOUTH_ROW,
        }}
        actionButton={{
          order: CardElementOrder.FIFTH_ROW,
          value: {
            label: {
              text: "Add to Cart",
              size: TypographySize.EXTRA_EXTRA_SMALL,
            },
            variant: ButtonVariant.SECONDARY,
            radius: ButtondRadius.CURVE,
            leftIcon: {
              cssValue: "fa-solid fa-cart-shopping",
              size: IconSize.X_X_SMALL,
            },
            size: ButtonSize.SMALL,
          },
        }}
        currency={CurrencyType.USD}
        size={CardSize.EXTRA_SMALL}
        hashBorder={false}
      />
    </Container>
  );
};

export default App;
