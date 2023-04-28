import { StackNavigationProp } from "@react-navigation/stack";

export type TElementCard = {
    id: string;
    author: string;
    download_url: string
}

export type ElementDetailsScreenRouteParams = {
  id: string;
};

export type ElementsListNavigationProps = StackNavigationProp<
  { ElementDetailsScreen: ElementDetailsScreenRouteParams },
  'ElementDetailsScreen'
>;